const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Capsule Filling Process</h3>
            <p className="text-sm text-muted-foreground">
              An educational resource for understanding pharmaceutical capsule filling processes and equipment.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/types" className="hover:text-primary transition-colors">Capsule Types</a></li>
              <li><a href="/process" className="hover:text-primary transition-colors">Filling Process</a></li>
              <li><a href="/equipment" className="hover:text-primary transition-colors">Equipment</a></li>
              <li><a href="/advantages" className="hover:text-primary transition-colors">Advantages</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Educational Project</h3>
            <p className="text-sm text-muted-foreground">
              This is an educational mini-project for B. Pharmacy students to learn about capsule manufacturing processes.
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Capsule Filling Process. Educational purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
