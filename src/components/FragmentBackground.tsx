
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, Stars } from '@react-three/drei';
import { useRef, useMemo, useState } from 'react';
import { Vector3 } from 'three';
import * as THREE from 'three';


interface SocialIconProps {
  index: number;
  mousePosition: Vector3;
  imgSrc: string;
  alt: string;
  totalIcons: number;
}

const SocialIcon = ({ index, mousePosition, imgSrc, alt, totalIcons }: SocialIconProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const currentPosition = useRef(new Vector3());
  const targetPosition = useRef(new Vector3());

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    // Distribuição 3D mais solta e interativa
    const angle = ((index + 1) / totalIcons) * Math.PI * 2;
    const radius = 2.5 + (hovered ? 0.5 : 0);
    targetPosition.current.set(
      Math.cos(angle + state.mouse.x) * radius,
      Math.sin(angle + state.mouse.y) * radius,
      Math.sin(state.clock.elapsedTime + index) * 0.7
    );
    currentPosition.current.lerp(targetPosition.current, 0.1);
    meshRef.current.position.copy(currentPosition.current);
    meshRef.current.rotation.z += delta * (hovered ? 0.7 : 0.3);
    meshRef.current.rotation.x = hovered ? Math.sin(state.clock.elapsedTime) * 0.3 : 0;
    meshRef.current.rotation.y = hovered ? Math.cos(state.clock.elapsedTime) * 0.3 : 0;
  });

  return (
    <mesh
      ref={meshRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <Html
        center
        transform
        sprite
        style={{
          transition: 'all 0.3s cubic-bezier(.4,2,.3,1)',
          transform: `scale(${hovered ? 1.5 : 1})`,
          pointerEvents: 'auto'
        }}
      >
        <img
          src={imgSrc}
          alt={alt}
          width={24}
          height={24}
          style={{ cursor: 'pointer', transition: 'all 0.3s cubic-bezier(.4,2,.3,1)' }}
        />
      </Html>
    </mesh>
  );
};

const MovingStars = () => {
  const starsRef = useRef<any>();
  
  useFrame((state, delta) => {
    if (starsRef.current) {
      // Very smooth and continuous movement
      starsRef.current.position.z += delta * 0.5;
      
      // Reset position for infinite effect
      if (starsRef.current.position.z > 50) {
        starsRef.current.position.z = -50;
      }
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={150}
      depth={100}
      count={3000}
      factor={2}
      saturation={0}
      fade
      speed={0}
    />
  );
};

const SocialFragmentScene = () => {
  const { camera } = useThree();
  const mousePos = useRef(new Vector3(0, 0, 0));
  
  const socialIcons = useMemo(() => [
    { imgSrc: '/icons/instagramblur.png', alt: 'Instagram' },
    { imgSrc: '/icons/tiktokblur.png', alt: 'TikTok' },
    { imgSrc: '/icons/facebookblur.png', alt: 'Facebook' },
    { imgSrc: '/icons/linkedinblur.png', alt: 'LinkedIn' },
    { imgSrc: '/icons/xblur.png', alt: 'X' },
    { imgSrc: '/icons/whatsapp.png', alt: 'WhatsApp' },
    { imgSrc: '/icons/treadsblur.png', alt: 'Threads' }
  ], []);
  
  useFrame((state) => {
    // Convert mouse position to 3D world coordinates
    const mouse = state.mouse;
    
    // Simple projection to world space
    mousePos.current.set(
      mouse.x * 4,
      mouse.y * 3,
      0
    );
  });

  return (
    <>
      {/* Moving stars background */}
      <MovingStars />
      
      {/* Very dark ambient lighting */}
      <ambientLight intensity={0.05} color="#ffffff" />
      
      {/* Social icons in chain formation */}
      {socialIcons.map((socialIcon, index) => (
        <SocialIcon
          key={index}
          index={index}
          mousePosition={mousePos.current}
          imgSrc={socialIcon.imgSrc}
          alt={socialIcon.alt}
          totalIcons={socialIcons.length}
        />
      ))}
    </>
  );
};

const FragmentBackground = () => {
  return (
    <div
      className="fragment-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        background: '#0e0e0e',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <SocialFragmentScene />
      </Canvas>
    </div>
  );
};

export default FragmentBackground;