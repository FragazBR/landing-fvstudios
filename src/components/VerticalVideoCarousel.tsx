import React, { useRef, useState } from 'react';
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const videos = [
  '/videos/video1.mp4',
  '/videos/video2.mp4',
  '/videos/video3.mp4',
  '/videos/video4.mp4',
  '/videos/video5.mp4',
];


// Ajusta largura dos cards para mobile
const getCardWidth = () => (typeof window !== 'undefined' && window.innerWidth <= 600 ? 280 : 400);
const CARD_OVERLAP = 12;


const CascadeStackCarousel: React.FC = () => {
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // controla play/pause do principal
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Só o vídeo ativo toca e tem som, os outros pausam
  React.useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === active) {
        video.muted = false;
        if (isPlaying) {
          video.play();
        } else {
          video.pause();
        }
      } else {
        video.muted = true;
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [active, isPlaying]);

  // Detecta se está em mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600;
  const CARD_WIDTH = getCardWidth();
  return (
    <div
      style={{
        width: '100%',
        maxWidth: CARD_WIDTH * 2.2,
        margin: '0 auto',
        position: 'relative',
        minHeight: '60vh',
        overflowX: isMobile ? 'hidden' : undefined,
        marginBottom: '-2rem',
      }}
    >
      <div style={{ position: 'relative', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: isMobile ? 'hidden' : undefined }}>
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
            // Ajusta deslocamento lateral para mobile
            const leftRight = isMobile ? CARD_WIDTH * 0.55 : CARD_WIDTH * 0.7;
            const farLeftRight = isMobile ? CARD_WIDTH * 0.95 : CARD_WIDTH * 1.3;
            if (offsetIdx === 0) {
              scale = 1.1;
              x = 0;
              zIndex = 10;
              opacity = 1;
            } else if (offsetIdx === -1) {
              scale = 0.9;
              x = -leftRight;
              zIndex = 5;
              opacity = 0.8;
            } else if (offsetIdx === 1) {
              scale = 0.9;
              x = leftRight;
              zIndex = 5;
              opacity = 0.8;
            } else if (offsetIdx === -2) {
              scale = 0.7;
              x = -farLeftRight;
              zIndex = 1;
              opacity = 0.5;
            } else if (offsetIdx === 2) {
              scale = 0.7;
              x = farLeftRight;
              zIndex = 1;
              opacity = 0.5;
            } else {
              return null;
            }
            return (
              <Card
                key={src}
                className={cn(
                  "transition-all duration-500 shadow-sm p-0 bg-card cursor-pointer group border border-muted",
                  offsetIdx === 0
                    ? "hover:border-primary/70"
                    : "hover:border-primary/70 hover:scale-[1.03] hover:shadow-lg",
                )}
                style={{
                  position: 'absolute',
                  left: `calc(50% + ${x}px)`,
                  top: '50%',
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  width: CARD_WIDTH,
                  height: '55vh',
                  zIndex,
                  opacity,
                  transition: 'all 0.5s cubic-bezier(.4,2,.3,1)',
                }}
                onClick={() => {
                  if (offsetIdx === 0) {
                    setIsPlaying((prev) => !prev);
                  } else {
                    setActive(idx);
                    setIsPlaying(true);
                    setTimeout(() => {
                      if (videoRefs.current[idx]) {
                        videoRefs.current[idx].play();
                      }
                    }, 100);
                  }
                }}
              >
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  src={src}
                  loop
                  controls
                  playsInline
                  className={cn(
                    "w-full h-full object-cover rounded-lg transition-transform duration-300"
                  )}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Card>
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
