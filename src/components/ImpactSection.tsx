import { Card, CardContent } from "@/components/ui/card";
import livingSpace from "@/assets/living-space.jpg";

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={livingSpace} 
              alt="Modern accessible living space" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Creating Real Impact
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our person-centered approach has transformed hundreds of lives, helping individuals achieve their goals and live independently with confidence and dignity.
            </p>
            
            <div className="space-y-6">
              <Card className="border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Independent Living Achievement</span>
                    <span className="text-sm text-primary font-semibold">95%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Community Integration Success</span>
                    <span className="text-sm text-primary font-semibold">88%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '88%'}}></div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Quality of Life Improvement</span>
                    <span className="text-sm text-primary font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;