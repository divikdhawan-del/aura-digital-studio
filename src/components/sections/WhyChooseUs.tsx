import { CheckCircle2, Timer, TrendingUp, Shield, Headphones, Award } from "lucide-react";

const reasons = [
  {
    icon: Timer,
    title: "Fast Delivery",
    description: "We respect your time. Our streamlined process ensures quick turnaround without compromising quality.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Focused",
    description: "Every design decision is made with your business goals in mind, driving real, measurable results.",
  },
  {
    icon: Shield,
    title: "Scalable Solutions",
    description: "Built to grow with you. Our code is clean, maintainable, and ready for future expansion.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "We're with you every step of the way, from initial concept to post-launch optimization.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Attention to detail in every pixel. We deliver work we're proud to put our name on.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Results",
    description: "Our portfolio speaks for itself. Trusted by 150+ businesses to deliver exceptional results.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 relative bg-gradient-subtle">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            The <span className="text-gradient">DD Development</span> Advantage
          </h2>
          <p className="text-muted-foreground text-lg">
            We're not just another web agency. Here's what sets us apart from the competition.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group text-center p-6"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <reason.icon size={28} className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
