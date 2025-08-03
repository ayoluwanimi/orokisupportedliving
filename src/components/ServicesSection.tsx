import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Home, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Independent Living Support",
    description: "Personalized assistance with daily living skills, household management, and maintaining independence in your own home."
  },
  {
    icon: Heart,
    title: "Personal Care Services",
    description: "Compassionate support with personal care needs while maintaining dignity and promoting self-reliance."
  },
  {
    icon: Users,
    title: "Community Integration",
    description: "Building connections and participation in community activities, employment opportunities, and social networks."
  },
  {
    icon: Zap,
    title: "Life Skills Development",
    description: "Training and support to develop essential life skills including budgeting, cooking, transportation, and communication."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Support Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive, person-centered services designed to help individuals live independently with the support they need to thrive.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-accent/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;