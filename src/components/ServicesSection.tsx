import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Droplets, Sofa, Home, PawPrint, Building2 } from "lucide-react";

const services = [
  { icon: Droplets, title: "Carpet Steam Cleaning", desc: "Hot water extraction that removes deep-seated dirt, allergens, and bacteria from your carpets." },
  { icon: Sofa, title: "Upholstery Cleaning", desc: "Refresh your sofas, chairs, and fabric furniture with our professional upholstery cleaning." },
  { icon: Home, title: "End of Lease Cleaning", desc: "Get your full bond back with our thorough end-of-lease carpet cleaning service." },
  { icon: PawPrint, title: "Pet Stain Removal", desc: "Specialist pet odour and stain removal that eliminates the toughest marks and smells." },
  { icon: Building2, title: "Commercial Cleaning", desc: "Keep your workplace spotless with scheduled commercial carpet cleaning programs." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 section-gradient">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Our Carpet Cleaning Services</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Comprehensive cleaning solutions for homes and businesses across Hobart.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s) => (
          <Card key={s.title} className="shadow-card hover:shadow-card-hover transition-shadow duration-300 border-0 bg-card">
            <CardHeader className="items-center text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <CardTitle className="text-lg">{s.title}</CardTitle>
              <CardDescription className="text-sm">{s.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
