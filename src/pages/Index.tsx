import SparkleBackground from '@/components/SparkleBackground';
import CustomCursor from '@/components/CustomCursor';
import HeroSection from '@/components/HeroSection';
import GiftBox from '@/components/GiftBox';
import ProductShowcase from '@/components/ProductShowcase';
import WhyMirava from '@/components/WhyMirava';
import OrderSection from '@/components/OrderSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import SoundToggle from '@/components/SoundToggle';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background effects */}
      <SparkleBackground />
      
      {/* Custom cursor (desktop only) */}
      <CustomCursor />
      
      {/* Sound toggle */}
      <SoundToggle />
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <GiftBox />
        <ProductShowcase />
        <WhyMirava />
        <OrderSection />
        <Footer />
      </div>

      {/* WhatsApp floating button */}
      <WhatsAppButton />
    </main>
  );
};

export default Index;
