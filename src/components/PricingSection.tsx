import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

const packages = [
  { title: "1 Room", price: "$40", features: ["Steam cleaning", "Stain treatment", "Deodorising", "Up to 12m²"] },
  { title: "3 Rooms", price: "$125", popular: true, features: ["Steam cleaning", "Stain treatment", "Deodorising", "Up to 36m²", "Hallway included"] },
  { title: "Whole House", price: "$250- $300", features: ["3 rooms carpet", 
      "Rug cleaning", 
      "1 sofa cleaning", 
      "Stain treatment", 
      "Deodorising", 
      "Hallway & stairs", 
      "Spot treatment for small spills", 
      "Eco-friendly cleaning solutions"] },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Simple, Honest Pricing</h2>
        <p className="text-muted-foreground text-lg">No hidden fees. Prices include GST.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {packages.map((p) => (
          <Card key={p.title} className={`border-0 shadow-card relative ${p.popular ? "ring-2 ring-primary scale-105" : ""}`}>
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 cta-gradient text-accent-foreground text-xs font-bold px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-lg">{p.title}</CardTitle>
              <div className="text-4xl font-heading font-extrabold text-primary mt-2">{p.price}</div>
            </CardHeader>
            <CardContent className="space-y-3">
              {p.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {f}
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant={p.popular ? "cta" : "default"} className="w-full" asChild>
                <a href="#contact">Book Now</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
