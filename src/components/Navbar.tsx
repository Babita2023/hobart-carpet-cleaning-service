import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
     <div className="container mx-auto flex items-center justify-between h-16 px-4">
  
  <a href="#" className="flex items-center gap-3">
    
    {/* Logo */}
    <img 
      src="/Hobart1.png" 
      alt="Hobart Premium Cleaning Logo"
      className="w-10 h-10 object-contain"
    />

    {/* Business Name */}
    <span className="font-heading text-lg font-bold text-primary leading-tight">
      Hobart Premium <br className="hidden sm:inline" /> Cleaning
    </span>

  </a>

  <div className="hidden lg:flex items-center gap-6">
    {navLinks.map((l) => (
      <a
        key={l.href}
        href={l.href}
        className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
      >
        {l.label}
      </a>
    ))}
  </div>

        
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:413 466 112" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" /> 413 466 112
          </a>
          <Button variant="cta" size="sm" asChild>
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-card border-b border-border px-4 pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-foreground/80 hover:text-primary">
              {l.label}
            </a>
          ))}
          <a href="tel:+61413466112" className="flex items-center gap-2 py-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" /> +61 413 466 112
          </a>
          <Button variant="cta" size="sm" className="mt-2 w-full" asChild>
            <a href="#contact">Contact us</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
