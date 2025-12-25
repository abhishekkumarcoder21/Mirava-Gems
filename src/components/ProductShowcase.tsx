import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Rose Petal Ring',
    description: 'Delicate rose gold elegance',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Pearl Drop Earrings',
    description: 'Timeless beauty for her',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Crystal Heart Pendant',
    description: 'Love captured in crystal',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Charm Bracelet',
    description: 'Memories on your wrist',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Infinity Band',
    description: 'Forever and always',
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Gemstone Studs',
    description: 'Everyday sparkle',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
  },
];

const ProductShowcase = () => {
  const handleOrderClick = (productName: string) => {
    const message = encodeURIComponent(`Hi MIRAVA GEMS 💕\nI'm interested in the "${productName}". Please share details and pricing!`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Our Collection
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Each piece is handcrafted with love, designed to make her feel special
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Product image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick actions */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <motion.button
                    className="p-3 bg-card rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleOrderClick(product.name)}
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    className="p-3 bg-card rounded-full shadow-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Product info */}
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {product.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-20 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
