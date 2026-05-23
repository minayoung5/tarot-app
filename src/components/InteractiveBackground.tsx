import { useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

export function InteractiveStarfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(180, Math.floor((window.innerWidth * window.innerHeight) / 12000));

      const colors = [
        'rgba(196, 181, 253,',
        'rgba(168, 85, 247,',
        'rgba(34, 211, 238,',
        'rgba(103, 232, 249,',
        'rgba(255, 255, 255,',
      ];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.6 + 0.2,
          speedX: (Math.random() - 0.5) * 0.08,
          speedY: (Math.random() - 0.5) * 0.08,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      return particles;
    };

    resizeCanvas();
    particlesRef.current = createParticles();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          particle.x += Math.cos(angle) * force * 1.5;
          particle.y += Math.sin(angle) * force * 1.5;
          particle.opacity = Math.min(1, particle.opacity + force * 0.2);
        } else {
          particle.opacity = Math.max(0.2, particle.opacity - 0.003);
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        const twinkle = Math.sin(time * particle.twinkleSpeed + particle.twinkleOffset);
        const currentOpacity = particle.opacity * (0.5 + twinkle * 0.5);
        const size = particle.size * (1 + twinkle * 0.2);

        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, size * 3
        );
        glowGradient.addColorStop(0, `${particle.color}${currentOpacity * 0.6})`);
        glowGradient.addColorStop(0.5, `${particle.color}${currentOpacity * 0.1})`);
        glowGradient.addColorStop(1, `${particle.color}0)`);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size * 3, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${currentOpacity})`;
        ctx.fill();
      });

      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.08;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 0.3;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(180deg, #050508 0%, #08060f 30%, #0a0816 60%, #0c0818 100%)' }}
    />
  );
}

export function MysticalOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          top: '-10%',
          right: '-5%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(168, 85, 247, 0.06) 40%, transparent 70%)',
          animation: 'float 25s ease-in-out infinite',
          filter: 'blur(80px)'
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          top: '20%',
          left: '-8%',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, rgba(103, 232, 249, 0.04) 40%, transparent 70%)',
          animation: 'float 30s ease-in-out infinite reverse',
          animationDelay: '5s',
          filter: 'blur(70px)'
        }}
      />

      <div
        className="absolute"
        style={{
          width: '1400px',
          height: '700px',
          bottom: '-350px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse at 50% 80%, rgba(139, 92, 246, 0.4) 0%, rgba(168, 85, 247, 0.25) 15%, rgba(124, 58, 237, 0.18) 25%, rgba(34, 211, 238, 0.12) 40%, rgba(6, 182, 212, 0.06) 55%, rgba(232, 121, 249, 0.03) 70%, transparent 85%)',
          filter: 'blur(50px)',
          animation: 'planetBreathe 8s ease-in-out infinite',
        }}
      />

      <div
        className="absolute"
        style={{
          width: '1000px',
          height: '500px',
          bottom: '-280px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse at 50% 70%, rgba(196, 181, 253, 0.2) 0%, rgba(139, 92, 246, 0.15) 20%, rgba(168, 85, 247, 0.1) 35%, rgba(34, 211, 238, 0.08) 50%, transparent 70%)',
          filter: 'blur(35px)',
          animation: 'planetBreathe 8s ease-in-out infinite',
          animationDelay: '1s',
        }}
      />

      <div
        className="absolute"
        style={{
          width: '600px',
          height: '250px',
          bottom: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.08) 0%, rgba(196, 181, 253, 0.12) 15%, rgba(139, 92, 246, 0.15) 30%, rgba(168, 85, 247, 0.08) 50%, transparent 70%)',
          filter: 'blur(25px)',
        }}
      />

      <div
        className="absolute"
        style={{
          width: '1800px',
          height: '600px',
          bottom: '-320px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse at 50% 70%, rgba(139, 92, 246, 0.1) 0%, rgba(34, 211, 238, 0.06) 30%, rgba(232, 121, 249, 0.03) 50%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'planetBreathe 12s ease-in-out infinite reverse',
          animationDelay: '2s',
        }}
      />

      <div
        className="absolute"
        style={{
          width: '1200px',
          height: '400px',
          bottom: '-200px',
          left: '50%',
          transform: 'translateX(-50%) rotate(-3deg)',
          background: 'radial-gradient(ellipse at 30% 80%, rgba(34, 211, 238, 0.08) 0%, transparent 50%)',
          filter: 'blur(80px)',
          animation: 'float 20s ease-in-out infinite reverse',
          animationDelay: '3s',
        }}
      />
      <div
        className="absolute"
        style={{
          width: '1200px',
          height: '400px',
          bottom: '-200px',
          left: '50%',
          transform: 'translateX(-50%) rotate(3deg)',
          background: 'radial-gradient(ellipse at 70% 80%, rgba(232, 121, 249, 0.06) 0%, transparent 50%)',
          filter: 'blur(80px)',
          animation: 'float 18s ease-in-out infinite',
          animationDelay: '6s',
        }}
      />
    </div>
  );
}
