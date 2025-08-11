import React, { useRef, useState } from 'react';

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
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Só o vídeo ativo toca e tem som, os outros pausam
  React.useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === active) {
        video.muted = false;
        video.play();
      } else {
        video.muted = true;
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [active]);

  return (
    <div style={{ width: '100%', maxWidth: CARD_WIDTH * 2.2, margin: '0 auto', position: 'relative', minHeight: '70vh' }}>
      <div style={{ position: 'relative', height: '65vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Botão anterior */}
        <button
          onClick={() => setActive((prev) => Math.max(prev - 1, 0))}
          disabled={active === 0}
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.3)',
            border: 'none',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: active === 0 ? 'not-allowed' : 'pointer',
            opacity: active === 0 ? 0.4 : 1,
            zIndex: 20,
          }}
          aria-label="Anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {/* Orbital carousel */}
        <div style={{ position: 'relative', width: '100%', height: '65vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {videos.map((src, idx) => {
            // Orbital positions: center, left, right, far left, far right
            const offsetIdx = idx - active;
            let scale = 0.7;
            let x = 0;
            let zIndex = 1;
            let opacity = 0.5;
            if (offsetIdx === 0) {
              scale = 1.1;
              x = 0;
              zIndex = 10;
              opacity = 1;
            } else if (offsetIdx === -1) {
              scale = 0.9;
              x = -CARD_WIDTH * 0.7;
              zIndex = 5;
              opacity = 0.8;
            } else if (offsetIdx === 1) {
              scale = 0.9;
              x = CARD_WIDTH * 0.7;
              zIndex = 5;
              opacity = 0.8;
            } else if (offsetIdx === -2) {
              scale = 0.7;
              x = -CARD_WIDTH * 1.3;
              zIndex = 1;
              opacity = 0.5;
            } else if (offsetIdx === 2) {
              scale = 0.7;
              x = CARD_WIDTH * 1.3;
              zIndex = 1;
              opacity = 0.5;
            } else {
              return null;
            }
            return (
              <div
                key={src}
                className={`glass-card transition-all duration-500 shadow-lg rounded-2xl p-0 bg-transparent`}
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${x}px)`,
                  top: '50%',
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  width: CARD_WIDTH,
                  height: '55vh',
                  zIndex,
                  opacity,
                  boxShadow: offsetIdx === 0 ? '0 4px 16px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.10)',
                  border: offsetIdx === 0 ? '3px solid #222' : '2px solid #ccc',
                  background: '#fff',
                  cursor: 'pointer',
                  transition: 'all 0.5s cubic-bezier(.4,2,.3,1)',
                }}
                onClick={() => {
                  setActive(idx);
                  setTimeout(() => {
                    if (videoRefs.current[idx]) {
                      videoRefs.current[idx].play();
                    }
                  }, 100);
                }}
              >
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  src={src}
                  loop
                  controls
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '1rem',
                  }}
                />
              </div>
            );
          })}
        </div>
        {/* Botão próximo */}
        <button
          onClick={() => setActive((prev) => Math.min(prev + 1, videos.length - 1))}
          disabled={active === videos.length - 1}
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.3)',
            border: 'none',
            borderRadius: '50%',
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: active === videos.length - 1 ? 'not-allowed' : 'pointer',
            opacity: active === videos.length - 1 ? 0.4 : 1,
            zIndex: 20,
            marginLeft: 8,
          }}
          aria-label="Próximo"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
};

export default CascadeStackCarousel;
