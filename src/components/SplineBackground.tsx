import { useState } from 'react';

const SplineBackground = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      className="spline-background-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        overflow: 'hidden',
        background: hasError ? 'linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--accent)/0.1))' : 'transparent'
      }}
    >
      {!isLoaded && !hasError && (
        <div 
          className="loading-placeholder"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, hsl(var(--primary)/0.05), hsl(var(--accent)/0.05))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'hsl(var(--muted-foreground))',
            fontSize: '18px'
          }}
        >
          Carregando animação 3D...
        </div>
      )}
      
      <iframe
        src="https://my.spline.design/website3dherodesignanimatedrlvnt-SxfPgqVMjP08Oet7hLds89Uo/"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          background: 'transparent',
          display: hasError ? 'none' : 'block'
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="eager"
        title="3D Background Animation"
        onLoad={() => {
          console.log('Spline iframe loaded successfully');
          setIsLoaded(true);
        }}
        onError={() => {
          console.log('Spline iframe failed to load');
          setHasError(true);
        }}
      />
      
      {hasError && (
        <div 
          className="error-fallback"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--accent)/0.1))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'hsl(var(--muted-foreground))',
            fontSize: '16px'
          }}
        >
          Fundo 3D indisponível
        </div>
      )}
    </div>
  );
};

export default SplineBackground;