import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTABanner = () => (
  <section className="py-14 cta-gradient">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-accent-foreground mb-4">
        Ready for Spotless Carpets?
      </h2>
      <p className="text-accent-foreground/90 mb-6 text-lg">Book today and get 10% off your first clean!</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="hero" size="lg" className="text-base" asChild>
          <a href="#contact">Get a Free Quote</a>
        </Button>
        <Button variant="outline" size="lg" className="text-base border-accent-foreground/30 text-accent-foreground bg-accent-foreground/40 hover:bg-accent-foreground/10" asChild>
          <a href="tel:0362001234"><Phone className="w-5 h-5 mr-2" /> Call +61 413 466 112</a>
        </Button>
      </div>
    </div>
  </section>
);

export default CTABanner;
