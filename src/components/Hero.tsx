import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Empowering Independence, 
            <span className="block text-accent-foreground">Building Community</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Supporting individuals to live independently with dignity, choice, and the care they deserve in their own homes and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Learn About Our Services
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              Get Support Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;