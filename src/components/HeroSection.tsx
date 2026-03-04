import { Button } from "@/components/ui/button";
import { Phone, MessageSquare } from "lucide-react";
import heroImg from "@/assets/hero-carpet.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Professional carpet cleaning in Hobart" className="w-full h-full object-cover" />
      <div className="absolute inset-0 hero-gradient opacity-80" />
    </div>
    <div className="container relative mx-auto px-4 py-20">
      <div className="max-w-2xl">
        <span className="inline-block bg-accent/20 text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm border border-accent/30">
          ⭐ #1 Rated Carpet Cleaners in Hobart
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
          Professional Cleaning service in Hobart, Tasmania
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
          Transform your home with Hobart's most trusted carpet cleaning service. Deep steam cleaning that removes stains, allergens, and odours — guaranteed results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="cta" size="lg" className="text-base px-8 py-6" asChild>
            <a href="#contact"><MessageSquare className="w-5 h-5 mr-2" /> Contact Us</a>
          </Button>
          <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
            <a href="tel:0413266112"><Phone className="w-5 h-5 mr-2" /> Call Now</a>
          </Button>
        </div>
        <div className="flex items-center gap-6 mt-8 text-primary-foreground/80 text-sm">
          <span>✓ Same Day Service</span>
          <span>✓ 100% Satisfaction</span>
          <span>✓ Eco-Friendly</span>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
