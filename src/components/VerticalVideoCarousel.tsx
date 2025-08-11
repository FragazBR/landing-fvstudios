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

  return (
    <div style={{ width: '100%', maxWidth: CARD_WIDTH, margin: '0 auto', position: 'relative', minHeight: '70vh' }}>
      {/* Botões de navegação */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
        <button
          onClick={() => setActive((prev) => Math.max(prev - 1, 0))}
          disabled={active === 0}
          style={{
            padding: '10px 24px',
            fontSize: 18,
            borderRadius: 8,
            background: active === 0 ? '#ccc' : '#222',
            color: '#fff',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            cursor: active === 0 ? 'not-allowed' : 'pointer',
          }}
        >Anterior</button>
        <button
          onClick={() => setActive((prev) => Math.min(prev + 1, videos.length - 1))}
          disabled={active === videos.length - 1}
          style={{
            padding: '10px 24px',
            fontSize: 18,
            borderRadius: 8,
            background: active === videos.length - 1 ? '#ccc' : '#222',
            color: '#fff',
            border: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            cursor: active === videos.length - 1 ? 'not-allowed' : 'pointer',
          }}
        >Próximo</button>
      </div>
      {/* Carrossel de vídeos em cascata */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '65vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'visible',
        }}
      >
        {videos.map((src, idx) => {
          const rightIdx = idx - active;
          if (rightIdx > 0 && rightIdx <= 4) {
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
    </div>
  );
};

export default CascadeStackCarousel;
