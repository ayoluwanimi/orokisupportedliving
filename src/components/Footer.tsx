const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">O</span>
              </div>
              <div>
                <h3 className="font-bold">Oroki</h3>
                <p className="text-sm opacity-90">Supported Living</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Empowering independence and building community through compassionate supported living services.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Independent Living</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Personal Care</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Community Integration</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Life Skills</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">Our Mission</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Our Team</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">News</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>+44 (0) 123 456 7890</li>
              <li>info@orokisupport.co.uk</li>
              <li>123 Community Street<br />London, UK SW1A 1AA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-90">© 2024 Oroki Supported Living. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="text-sm opacity-90 hover:opacity-100 transition-opacity">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;