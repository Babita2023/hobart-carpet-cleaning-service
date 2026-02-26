import { CheckCircle, Leaf, Clock, DollarSign, ThumbsUp, Truck } from "lucide-react";

const reasons = [
  { icon: CheckCircle, title: "Guaranteed Results", desc: "100% satisfaction or we re-clean for free." },
  { icon: Leaf, title: "Eco-Friendly Products", desc: "Safe for kids, pets, and the environment." },
  { icon: Clock, title: "Fast Drying Times", desc: "Carpets dry in just 2-4 hours." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden fees — upfront honest quotes." },
  { icon: ThumbsUp, title: "5-Star Rated", desc: "Hundreds of happy customers across Hobart." },
  { icon: Truck, title: "Same Day Service", desc: "Book today, we clean today." },
];

const WhyChooseUs = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Why Choose Us?</h2>
        <p className="text-muted-foreground text-lg">Hobart's most trusted carpet cleaning professionals.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <r.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
