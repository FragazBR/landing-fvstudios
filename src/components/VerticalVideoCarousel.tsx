import React, { useRef, useEffect, useState } from 'react';

const videos = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
  '/videos/video4.mp4',
  '/videos/video5.mp4',
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
    const card = videoRefs.current[active];
    if (!card) return;
    const handleWheel = (e: WheelEvent) => {
      if (isCentered) {
        e.preventDefault();
        if (e.deltaY > 0) {
          setActive((prev) => {
            const next = Math.min(prev + 1, videos.length - 1);
            if (next !== prev) {
              window.scrollBy({ top: window.innerHeight * 0.1, behavior: 'smooth' });
            }
            return next;
          });
        } else if (e.deltaY < 0) {
          setActive((prev) => {
            const next = Math.max(prev - 1, 0);
            if (next !== prev) {
              window.scrollBy({ top: -window.innerHeight * 0.1, behavior: 'smooth' });
            }
            return next;
          });
        }
      }
    };
    card.addEventListener('wheel', handleWheel, { passive: false });
    return () => card.removeEventListener('wheel', handleWheel);
  }, [isCentered, active]);

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
        width: '100%',
        maxWidth: CARD_WIDTH,
        height: '70vh',
        margin: '0 auto',
        userSelect: 'none',
        cursor: 'grab',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflowX: 'hidden',
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {videos.map((src, idx) => {
        const isActive = idx === active;
        const rightIdx = idx - active;
        // Cards atrás do principal: escala menor, opacidade reduzida, shadow, 15% visível
        if (rightIdx > 0 && rightIdx <= 4) {
          // No mobile, cards atrás ficam 10% à direita do card principal
          const isMobile = window.innerWidth < 900;
          const offset = rightIdx * CARD_WIDTH * (isMobile ? 0.10 : 0.15);
          return (
            <div
              key={src}
              className={`glass-card transition-all duration-300 shadow-lg rounded-2xl p-0 bg-transparent`}
              style={{
                position: 'absolute',
                left: `calc(50% + ${offset}px)`,
                top: '50%',
                transform: 'translate(-50%, -50%) scale(0.92)',
                width: '100%',
                maxWidth: CARD_WIDTH,
                height: '65vh',
                zIndex: 100 - rightIdx,
                opacity: 0.5 + 0.1 * (5 - rightIdx),
                overflow: 'hidden',
                cursor: 'default',
                clipPath: 'inset(0 ' + (CARD_WIDTH * 0.85) + 'px 0 0)',
              }}
            >
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={src}
                loop
                playsInline
                controls={false}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '1rem',
                }}
              />
            </div>
          );
        }
        // Card ativo (frente)
        else if (rightIdx === 0) {
          return (
            <div
              key={src}
              className={`glass-card transition-all duration-300 shadow-lg rounded-2xl p-0 bg-transparent`}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%) scale(1)',
                width: '100%',
                maxWidth: CARD_WIDTH,
                height: '65vh',
                zIndex: 100,
                overflow: 'hidden',
                cursor: 'default',
                clipPath: 'inset(0px 0 0 0)',
              }}
            >
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={src}
                loop
                controls
                playsInline
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '1rem',
                }}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CascadeStackCarousel;
