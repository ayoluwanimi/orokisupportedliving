import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import heroImage from "@/assets/hero-image.jpg";
import careSupport from "@/assets/care-support.jpg";
import communityGroup from "@/assets/community-group.jpg";
import skillsTraining from "@/assets/skills-training.jpg";

const heroSlides = [
  {
    image: heroImage,
    title: "Empowering Independence,",
    subtitle: "Building Community",
    description: "Supporting individuals to live independently with dignity, choice, and the care they deserve in their own homes and communities."
  },
  {
    image: careSupport,
    title: "Person-Centered",
    subtitle: "Support Services",
    description: "Our dedicated team provides individualized support that adapts to your unique needs, goals, and aspirations."
  },
  {
    image: communityGroup,
    title: "Building Stronger",
    subtitle: "Communities Together",
    description: "Creating inclusive environments where everyone can participate, contribute, and thrive in their local community."
  },
  {
    image: skillsTraining,
    title: "Developing Life",
    subtitle: "Skills & Independence",
    description: "Empowering individuals through skill development, training, and support to achieve greater independence."
  }
];

const Hero = () => {
  return (
    <section className="relative min-h-[80vh]">
      <Carousel className="h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative min-h-[80vh] flex items-center">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                  <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                      <span className="block text-accent-foreground">{slide.subtitle}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                      {slide.description}
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
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  );
};

export default Hero;