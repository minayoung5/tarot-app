import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export function MysticalParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-purple-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
}

export function StarryBackground() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse at 20% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 70%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)
        `
      }}></div>

      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle 2s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
            boxShadow: '0 0 6px 2px rgba(255, 255, 255, 0.3)'
          }}
        />
      ))}

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-600/5 rounded-full blur-3xl"></div>
    </div>
  );
}

export function MysticalOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div 
        className="absolute w-64 h-64 rounded-full opacity-20"
        style={{
          top: '10%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
          filter: 'blur(40px)'
        }}
      />
      <div 
        className="absolute w-64 h-64 rounded-full opacity-20"
        style={{
          top: '60%',
          right: '10%',
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%)',
          animation: 'float 10s ease-in-out infinite reverse',
          animationDelay: '2s',
          filter: 'blur(40px)'
        }}
      />
      <div 
        className="absolute w-96 h-96 rounded-full opacity-10"
        style={{
          bottom: '20%',
          left: '30%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
          animation: 'float 12s ease-in-out infinite',
          animationDelay: '4s',
          filter: 'blur(60px)'
        }}
      />
    </div>
  );
}

export function MysticalDecoration() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg className="absolute top-0 left-0 w-full h-full opacity-5">
        <defs>
          <pattern id="mystical-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="1" fill="white" />
            <circle cx="0" cy="0" r="1" fill="white" />
            <circle cx="100" cy="0" r="1" fill="white" />
            <circle cx="0" cy="100" r="1" fill="white" />
            <circle cx="100" cy="100" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mystical-pattern)" />
      </svg>
    </div>
  );
}
