import { Link } from "react-router-dom";
import { Palette, Code, Rocket, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description: "Beautiful, user-centric designs that capture your brand essence and engage visitors from the first click.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom-built, scalable web applications using modern technologies that perform flawlessly.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "High-converting landing pages designed to turn visitors into customers and maximize ROI.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your existing website for better user experience, SEO rankings, and conversions.",
  },
];

export function Services() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Dominate Online</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to launch, we provide end-to-end web solutions that help your business stand out and succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl border-gradient bg-card hover:bg-card/80 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={24} className="text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="glass" size="lg">
            <Link to="/services">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
