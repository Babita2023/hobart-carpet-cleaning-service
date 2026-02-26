import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";

const images = [
  { src: ba1, alt: "Carpet cleaning before and after - deep stain removal" },
  { src: ba2, alt: "Pet stain carpet cleaning before and after" },
  { src: ba3, alt: "Upholstery cleaning before and after results" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 section-gradient">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Before & After Results</h2>
        <p className="text-muted-foreground text-lg">See the difference our professional cleaning makes.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((img) => (
          <div key={img.alt} className="rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300">
            <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
