import { motion } from 'framer-motion';
import { Heart, Gift, Sparkles, Star } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Handmade with Love',
    description: 'Every piece is crafted by hand with care and attention to detail',
  },
  {
    icon: Gift,
    title: 'Perfect Gifts for Girls',
    description: 'Curated collections designed to bring joy and surprise',
  },
  {
    icon: Sparkles,
    title: 'Unique Designs',
    description: 'One-of-a-kind pieces that stand out from the ordinary',
  },
  {
    icon: Star,
    title: 'Crafted for Special Moments',
    description: 'Making every celebration and memory even more beautiful',
  },
];

const WhyMirava = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Why Choose MIRAVA GEMS
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            More than jewelry — it's a feeling, a memory, a treasure
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex items-start gap-5 p-6 bg-card rounded-2xl shadow-card card-hover group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <motion.div
                className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-rose-light/30 flex items-center justify-center group-hover:from-primary group-hover:to-rose-dark transition-all duration-500"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </motion.div>

              {/* Content */}
              <div>
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial / Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto p-8 bg-card rounded-3xl shadow-card relative">
            {/* Quote marks */}
            <span className="absolute top-4 left-6 text-6xl text-primary/20 font-display">"</span>
            <span className="absolute bottom-4 right-6 text-6xl text-primary/20 font-display">"</span>
            
            <p className="font-display text-xl sm:text-2xl text-foreground italic leading-relaxed">
              Every gift from MIRAVA GEMS carries a piece of my heart. 
              I believe in creating moments of joy and surprise through 
              beautiful, handcrafted treasures.
            </p>
            <div className="mt-6">
              <p className="font-body font-medium text-primary">— Alfiya Kamal</p>
              <p className="font-body text-sm text-muted-foreground">Founder, MIRAVA GEMS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMirava;
