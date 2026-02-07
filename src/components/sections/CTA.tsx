import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center p-8 md:p-16 rounded-3xl border-gradient bg-card/50 backdrop-blur-sm">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Online Presence?
          </h2>

          {/* Subheading */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's discuss your project and explore how we can help you achieve your business goals. 
            Get a free consultation with no strings attached.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="glow" size="xl">
              <Link to="/contact">
                Get Your Free Consultation
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="text-sm text-muted-foreground mt-8">
            ✓ No commitment required &nbsp;&nbsp;✓ Response within 24 hours &nbsp;&nbsp;✓ 100% confidential
          </p>
        </div>
      </div>
    </section>
  );
}
