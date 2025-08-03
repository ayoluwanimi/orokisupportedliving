import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to learn more about our services or need support? We're here to help you take the next step towards independence.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <Card className="border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">Call us for immediate support</p>
                      <p className="text-primary font-medium">+44 (0) 123 456 7890</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">Send us a message anytime</p>
                      <p className="text-primary font-medium">info@orokisupport.co.uk</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-accent/20">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Office</h4>
                      <p className="text-muted-foreground">Visit us during business hours</p>
                      <p className="text-primary font-medium">123 Community Street<br />London, UK SW1A 1AA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card className="border-accent/20">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Phone Number" type="tel" />
              <Textarea 
                placeholder="Tell us how we can help you..." 
                className="min-h-32"
              />
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;