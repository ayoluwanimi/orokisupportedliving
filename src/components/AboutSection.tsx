import { Card, CardContent } from "@/components/ui/card";
import supportHands from "@/assets/support-hands.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Supporting Lives, Building Futures
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Oroki Supported Living, we believe every person deserves the opportunity to live independently with dignity and choice. Our person-centered approach ensures that each individual receives the support they need to thrive in their own home and community.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over a decade of experience, we provide comprehensive supported living services that promote independence, build life skills, and create lasting connections within the community.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-accent/20">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Individuals Supported</div>
                </CardContent>
              </Card>
              <Card className="border-accent/20">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={supportHands} 
              alt="Supportive hands representing care and community" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;