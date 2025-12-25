import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles } from 'lucide-react';
import heroJewelry from '@/assets/hero-jewelry.jpg';

interface GiftBoxProps {
  onReveal?: () => void;
}

const GiftBox = ({ onReveal }: GiftBoxProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [showRing, setShowRing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    if (isOpened) return;
    setIsOpened(true);
    
    // Play sound if available
    try {
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2997/2997-preview.mp3');
      audio.volume = 0.2;
      audio.play().catch(() => {});
    } catch {}

    setTimeout(() => {
      setShowRing(true);
      onReveal?.();
      // Play reveal chime
      try {
        const chime = new Audio('https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3');
        chime.volume = 0.15;
        chime.play().catch(() => {});
      } catch {}
    }, 800);
  };

  const handleOrderClick = () => {
    const message = encodeURIComponent("Hi MIRAVA GEMS 💕\nI'd like to place an order. Please share designs & prices.");
    window.open(`https://docs.google.com/forms/d/e/1FAIpQLSct7CJ6xevjhVSwHe_ZI3-Ecamsi7NoANmnGs2JkKmNZ2T7RQ/viewform?usp=publish-editor`, '_blank');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative" ref={containerRef}>
      {/* Section title */}
      <motion.h2
        className="font-display text-3xl sm:text-4xl md:text-5xl text-center mb-12 text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        A Special Gift Awaits
      </motion.h2>

      <div className="relative">
        <AnimatePresence mode="wait">
          {!isOpened ? (
            <motion.div
              key="closed"
              className="relative cursor-pointer"
              onClick={handleOpen}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {/* Sparkles around box */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${20 + Math.sin(i * 0.8) * 40}%`,
                    left: `${20 + Math.cos(i * 0.8) * 40}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles className="w-4 h-4 text-gold" />
                </motion.div>
              ))}

              {/* Gift box */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
                {/* Box base */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-56 h-40 sm:h-48 bg-gradient-to-br from-rose-light to-primary rounded-lg shadow-glow" />
                
                {/* Box lid */}
                <motion.div
                  className="absolute top-12 sm:top-8 left-1/2 -translate-x-1/2 w-52 sm:w-60 h-16 sm:h-20 bg-gradient-to-br from-primary to-rose-dark rounded-lg shadow-lg origin-bottom"
                  animate={{ rotateX: 0 }}
                >
                  {/* Lid top highlight */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-lg" />
                </motion.div>

                {/* Ribbon vertical */}
                <motion.div
                  className="absolute top-8 sm:top-4 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-full"
                  animate={{ rotateZ: [-2, 2, -2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-full h-full bg-gradient-to-b from-gold-light via-gold to-gold-light rounded-sm shadow-sm" />
                </motion.div>

                {/* Ribbon horizontal */}
                <div className="absolute top-20 sm:top-16 left-1/2 -translate-x-1/2 w-52 sm:w-60 h-8 sm:h-10 bg-gradient-to-r from-gold-light via-gold to-gold-light rounded-sm shadow-sm" />

                {/* Bow */}
                <motion.div
                  className="absolute top-8 sm:top-4 left-1/2 -translate-x-1/2"
                  animate={{ scale: [1, 1.05, 1], rotateZ: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="relative w-24 sm:w-28 h-16 sm:h-20">
                    {/* Left loop */}
                    <div className="absolute left-0 top-2 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-gold-light to-gold rounded-full transform -rotate-45" />
                    {/* Right loop */}
                    <div className="absolute right-0 top-2 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-gold to-gold-light rounded-full transform rotate-45" />
                    {/* Center knot */}
                    <div className="absolute left-1/2 top-4 sm:top-5 -translate-x-1/2 w-6 h-6 bg-gold rounded-full shadow-md" />
                    {/* Ribbon tails */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-8 sm:top-10 w-4 h-8 sm:h-10 bg-gradient-to-b from-gold to-gold-light rounded-b-full" />
                  </div>
                </motion.div>

                {/* Gift icon in center */}
                <Gift className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-white/80" />
              </div>

              {/* Text */}
              <motion.div
                className="text-center mt-8"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <p className="font-display text-xl sm:text-2xl text-foreground mb-2">
                  This gift is for you 💝
                </p>
                <p className="font-body text-muted-foreground">
                  Tap to open
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Explosion sparkles */}
              {showRing && [...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                  animate={{
                    x: Math.cos(i * 18 * Math.PI / 180) * (100 + Math.random() * 100),
                    y: Math.sin(i * 18 * Math.PI / 180) * (100 + Math.random() * 100),
                    opacity: 0,
                    scale: 1,
                  }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                >
                  <Sparkles className="w-4 h-4 text-gold" />
                </motion.div>
              ))}

              {/* Ring reveal */}
              {showRing && (
                <motion.div
                  className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto"
                  initial={{ opacity: 0, scale: 0, rotateY: -180 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, type: 'spring' }}
                >
                  {/* Ring glow */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-primary/20 blur-xl"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>

                  {/* Actual ring image */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="relative">
                      <motion.img
                        src={heroJewelry}
                        alt="Beautiful handcrafted ring"
                        className="w-56 h-56 sm:w-72 sm:h-72 object-cover rounded-full shadow-glow"
                        animate={{ 
                          boxShadow: [
                            '0 0 30px hsl(var(--primary) / 0.3)',
                            '0 0 60px hsl(var(--primary) / 0.5)',
                            '0 0 30px hsl(var(--primary) / 0.3)',
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      {/* Shimmer overlay */}
                      <motion.div
                        className="absolute inset-0 rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-200%', '200%'] }}
                          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Floating sparkles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        top: `${30 + Math.random() * 40}%`,
                        left: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 1, 0.3],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                      }}
                    >
                      <Sparkles className="w-3 h-3 text-gold" />
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Reveal text */}
              {showRing && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <p className="font-display text-2xl sm:text-3xl text-foreground mb-6">
                    A little sparkle, just for you ✨
                  </p>
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-primary to-rose-dark text-primary-foreground font-body font-medium rounded-full shadow-glow hover:shadow-xl transition-all duration-300"
                    onClick={handleOrderClick}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 40px hsl(var(--primary) / 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Order this gift 💖
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GiftBox;
