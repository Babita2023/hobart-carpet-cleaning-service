import { MapPin } from "lucide-react";

const areas = ["Hobart CBD", "Sandy Bay", "Glenorchy", "Kingston", "Moonah", "New Town", "Bellerive", "Howrah"];

const ServiceAreas = () => (
  <section className="py-20 section-gradient">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Service Areas</h2>
        <p className="text-muted-foreground text-lg">Proudly serving all of Greater Hobart, Tasmania.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {areas.map((a) => (
          <div key={a} className="flex items-center gap-2 bg-card shadow-card rounded-full px-5 py-2.5">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{a}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceAreas;
