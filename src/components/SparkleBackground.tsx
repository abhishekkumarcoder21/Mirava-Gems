import { useEffect, useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const SparkleBackground = memo(() => {
  const [particles, setParticles] = useState<Particle[]>([]);

  const generateParticles = useCallback(() => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 25 : 50;
    
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  useEffect(() => {
    setParticles(generateParticles());
  }, [generateParticles]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      {/* Bokeh effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-gentle-pulse" />
      <div className="absolute top-2/3 right-1/4 w-96 h-96 rounded-full bg-rose-light/10 blur-3xl animate-gentle-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-gold-light/10 blur-3xl animate-gentle-pulse" style={{ animationDelay: '3s' }} />
      
      {/* Sparkle particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, particle.opacity, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glitter sparkles */}
      {particles.slice(0, 15).map((particle) => (
        <motion.div
          key={`glitter-${particle.id}`}
          className="absolute"
          style={{
            left: `${(particle.x + 30) % 100}%`,
            top: `${(particle.y + 20) % 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration * 0.6,
            delay: particle.delay + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width={particle.size * 2}
            height={particle.size * 2}
            viewBox="0 0 24 24"
            fill="none"
            className="text-gold"
          >
            <path
              d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
});

SparkleBackground.displayName = 'SparkleBackground';

export default SparkleBackground;
