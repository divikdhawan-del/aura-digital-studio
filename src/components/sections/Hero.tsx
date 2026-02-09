import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-cta');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-secondary/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
            <Sparkles size={14} className="text-primary" />
            <span className="text-sm text-muted-foreground">Premium Web Development Agency</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            We Build{" "}
            <span className="text-gradient">High-Converting</span>
            <br />
            Websites for Modern Brands
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Transform your online presence with stunning design, blazing-fast performance, 
            and conversion-focused development that drives real business results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 text-base font-medium text-foreground border border-primary/40 rounded-lg bg-card/30 backdrop-blur-sm transition-all duration-300 ease-out hover:border-primary hover:text-primary hover:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)] hover:translate-y-[-2px] active:translate-y-0"
            >
              Schedule a Free Consultation
              <ArrowRight size={18} className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <Button asChild variant="glass" size="xl">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50 animate-fade-in w-full" style={{ animationDelay: '0.4s' }}>
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "5+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
