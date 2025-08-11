import React, { useRef, useEffect, useState } from 'react';

const videos = [
  '/videos/video1.mp4',
];

const CARD_WIDTH = 400;
const CARD_OVERLAP = 12;


const CascadeStackCarousel: React.FC = () => {
  // Detecta se o mouse está sobre o carrossel
  const [isHovering, setIsHovering] = useState(false);
  // Para touch mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const [isCentered, setIsCentered] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (video) {
        if (idx === active) video.play();
        else video.pause();
      }
    });
  }, [active]);

  // Detecta se o carrossel está centralizado na viewport (preciso)
  useEffect(() => {
    const checkCenter = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // Considera centralizado se o centro do carrossel está próximo do centro da viewport
      const centerY = rect.top + rect.height / 2;
      const isCenter = Math.abs(centerY - vh / 2) < 40 && rect.top < vh / 2 && rect.bottom > vh / 2;
      setIsCentered(isCenter);
    };
    window.addEventListener('scroll', checkCenter);
    window.addEventListener('resize', checkCenter);
    checkCenter();
    return () => {
      window.removeEventListener('scroll', checkCenter);
      window.removeEventListener('resize', checkCenter);
    };
  }, []);

  // Bloqueia scroll da página enquanto navega nos vídeos
  useEffect(() => {
    if (isCentered && active < videos.length - 1) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCentered, active]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if ((isCentered && isHovering) || (isCentered && window.innerWidth < 900)) {
        e.preventDefault();
        if (e.deltaY > 0) {
          setActive((prev) => Math.min(prev + 1, videos.length - 1));
        } else if (e.deltaY < 0) {
          setActive((prev) => Math.max(prev - 1, 0));
        }
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isCentered, active, isHovering]);

  // Touch mobile: swipe para navegar
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (!isCentered) return;
      touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (!isCentered || touchStartX.current === null) return;
      touchEndX.current = e.changedTouches[0].clientX;
      const delta = touchEndX.current - touchStartX.current;
      if (Math.abs(delta) > 40) {
        if (delta < 0) setActive((prev) => Math.min(prev + 1, videos.length - 1));
        else setActive((prev) => Math.max(prev - 1, 0));
      }
      touchStartX.current = null;
      touchEndX.current = null;
    };
    const ref = containerRef.current;
    if (ref) {
      ref.addEventListener('touchstart', handleTouchStart);
      ref.addEventListener('touchend', handleTouchEnd);
    }
    return () => {
      if (ref) {
        ref.removeEventListener('touchstart', handleTouchStart);
        ref.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [isCentered, active]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: CARD_WIDTH + CARD_WIDTH * 0.05 * 4,
        height: '70vh',
        margin: '0 auto',
        userSelect: 'none',
        cursor: 'grab',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {videos.map((src, idx) => {
        const isActive = idx === active;
        const rightIdx = idx - active;
        // Cards atrás do principal: escala menor, opacidade reduzida, shadow, 15% visível
        if (rightIdx > 0 && rightIdx <= 4) {
          const offset = rightIdx * CARD_WIDTH * 0.15;
          return (
            <div
              key={src}
              className={`glass-card transition-all duration-300 border border-glass shadow-lg rounded-2xl`}
              style={{
                position: 'absolute',
                left: `calc(50% + ${offset}px)`,
                top: '50%',
                transform: 'translate(-50%, -50%) scale(0.92)',
                width: CARD_WIDTH,
                height: '65vh',
                zIndex: 100 - rightIdx,
                opacity: 0.5 + 0.1 * (5 - rightIdx),
                overflow: 'hidden',
                cursor: 'default',
                clipPath: `inset(0 ${CARD_WIDTH * 0.85}px 0 0)`,
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#222',
                boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
              }}
            >
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={src}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  aspectRatio: '9/16',
                  borderRadius: '2rem',
                  background: '#222',
                  opacity: 0.7,
                }}
                autoPlay={false}
                loop
                muted
                playsInline
                controls={false}
              />
            </div>
          );
        }
        // Card principal sempre centralizado e por cima
        if (isActive) {
          return (
            <div
              key={src}
              className={`glass-card transition-all duration-300 border border-glass shadow-lg rounded-2xl`}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) scale(1)',
                width: CARD_WIDTH,
                height: '65vh',
                zIndex: 100,
                opacity: 1,
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 12px 40px hsla(220, 15%, 5%, 0.4), 0 0 20px hsla(267, 84%, 68%, 0.1)',
                background: '#222',
              }}
            >
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={src}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  aspectRatio: '9/16',
                  borderRadius: '2rem',
                  background: '#222',
                  opacity: 1,
                }}
                autoPlay={isActive}
                loop
                muted
                playsInline
                controls={false}
              />
            </div>
          );
        }
        // Cards à esquerda do ativo ficam ocultos
        return null;
      })}
    </div>
  );
};

export default CascadeStackCarousel;
