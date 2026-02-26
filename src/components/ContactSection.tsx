import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Quote Request Sent!", description: "We'll get back to you within 1 hour." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-6">
              Get Your Free Quote Today
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Fill out the form and we'll get back to you within 1 hour with a no-obligation quote. Or call us directly!
            </p>
            <div className="space-y-4">
              <a href="tel:0362001234" className="flex items-center gap-3 text-primary-foreground font-semibold">
                <Phone className="w-5 h-5" /> (03) 6200 1234
              </a>
              <a href="mailto:info@hobartcarpetcleaning.com.au" className="flex items-center gap-3 text-primary-foreground/90">
                <Mail className="w-5 h-5" /> info@hobartcarpetcleaning.com.au
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/90">
                <MapPin className="w-5 h-5" /> Hobart, Tasmania 7000
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 md:p-8 shadow-card-hover space-y-4">
            <Input placeholder="Your Name" required name="name" className="bg-background" />
            <Input placeholder="Phone Number" required name="phone" type="tel" className="bg-background" />
            <Input placeholder="Email Address" required name="email" type="email" className="bg-background" />
            <Textarea placeholder="Tell us about your cleaning needs (rooms, stains, etc.)" required name="message" rows={4} className="bg-background" />
            <Button variant="cta" size="lg" className="w-full" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Request Free Quote"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
