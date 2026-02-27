import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-14">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Hobart Premium Carpet Cleaning</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Professional carpet cleaning services for homes and businesses across Greater Hobart, Tasmania. Fully insured, eco-friendly, and satisfaction guaranteed.
          </p>
        </div>
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
          <div className="space-y-2">
            {["About", "Services", "Gallery", "Testimonials", "Pricing", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <a href="tel:0413466112" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground">
              <Phone className="w-4 h-4" /> +61 413 466 112
            </a>
            <a href="mailto:bikashchamp9817@gmail.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground">
              <Mail className="w-4 h-4" /> bikashchamp9817@gmail.com
            </a>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <MapPin className="w-4 h-4" /> Hobart, Tasmania 7000
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Hobart Premium Carpet Cleaning. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
