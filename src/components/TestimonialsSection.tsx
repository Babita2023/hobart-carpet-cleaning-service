import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Sarah M.", location: "Sandy Bay", text: "Absolutely amazing results! My carpets look brand new. The team was professional, on time, and very thorough. Highly recommend!" },
  { name: "James T.", location: "Glenorchy", text: "Used them for end of lease cleaning and got my full bond back. Fantastic service at a great price. Will definitely use again." },
  { name: "Linda K.", location: "Kingston", text: "They removed pet stains I thought were permanent. The carpets smell fresh and look incredible. Best carpet cleaners in Hobart!" },
  { name: "Mark D.", location: "Hobart CBD", text: "Professional, efficient, and reasonably priced. Our office carpets have never looked better. Excellent commercial cleaning service." },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">What Our Customers Say</h2>
        <p className="text-muted-foreground text-lg">Trusted by hundreds of Hobart families and businesses.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t) => (
          <Card key={t.name} className="border-0 shadow-card">
            <CardContent className="p-6">
              <Stars />
              <p className="text-foreground/90 mb-4 italic">"{t.text}"</p>
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
