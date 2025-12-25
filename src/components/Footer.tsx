import { motion } from 'framer-motion';
import { Heart, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50 relative overflow-hidden">
      {/* Decorative sparkles */}
      <motion.div
        className="absolute top-10 left-1/4 w-2 h-2 bg-primary rounded-full"
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-20 right-1/3 w-1.5 h-1.5 bg-gold rounded-full"
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-2 h-2 bg-rose-light rounded-full"
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-2">
            MIRAVA GEMS
          </h2>
          <p className="font-body text-lg text-primary mb-6">
            By Alfiya Kamal
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="font-body text-muted-foreground text-lg mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Made with love for beautiful moments 💕
        </motion.p>

        {/* Social links */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="https://www.instagram.com/mirava_gems/"
            className="p-3 bg-card rounded-full shadow-soft hover:shadow-glow transition-all duration-300 text-muted-foreground hover:text-primary"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="mailto:abhishekbittu2021@gmail.com"
            className="p-3 bg-card rounded-full shadow-soft hover:shadow-glow transition-all duration-300 text-muted-foreground hover:text-primary"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-8" />

        {/* Copyright */}
        <motion.p
          className="font-body text-sm text-muted-foreground flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          © {new Date().getFullYear()} MIRAVA GEMS. Crafted with 
          <Heart className="w-4 h-4 text-primary inline-block animate-pulse" />
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
