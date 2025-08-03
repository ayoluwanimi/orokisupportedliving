import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">O</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Oroki</h1>
              <p className="text-sm text-muted-foreground">Supported Living</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#impact" className="text-foreground hover:text-primary transition-colors">Impact</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">Get Involved</Button>
            <Button size="sm">Contact Us</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;