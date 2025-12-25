import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const OrderSection = () => {
  const handleGoogleFormClick = () => {
    // Replace with actual Google Form URL
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSct7CJ6xevjhVSwHe_ZI3-Ecamsi7NoANmnGs2JkKmNZ2T7RQ/viewform?usp=publish-editor', '_blank');
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Ready to Order?
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Fill out our order form and we'll get back to you with all the details. 
            Each piece is handcrafted just for you.
          </p>

          <motion.button
            onClick={handleGoogleFormClick}
            className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-body font-medium text-lg overflow-hidden transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--rose-dark)) 100%)',
              color: 'hsl(var(--primary-foreground))',
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 50px hsl(var(--primary) / 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            
            <span className="relative z-10">Order Now 💖</span>
            <ExternalLink className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* Trust indicators */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Handcrafted with care
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Custom designs available
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Fast response
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderSection;
