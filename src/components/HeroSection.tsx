import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'MIRAVA GEMS';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 100 100" className="text-primary">
          <polygon
            points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-10 w-16 h-16 opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 100 100" className="text-gold">
          <polygon
            points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40"
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Brand name with typing effect */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-wider text-foreground mb-6 relative">
          <span className="text-glow">{displayText}</span>
          <motion.span
            className="inline-block w-1 h-12 sm:h-16 md:h-20 bg-primary ml-2 align-middle"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          Handcrafted gifts made with love 💕
        </motion.p>

        {/* Owner credit */}
        <motion.p
          className="font-body text-sm sm:text-base text-muted-foreground/70 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          By Alfiya Kamal
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <p className="text-xs text-muted-foreground mt-3">Scroll to explore</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
