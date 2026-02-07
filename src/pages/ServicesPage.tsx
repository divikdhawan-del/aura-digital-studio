import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Code, 
  Rocket, 
  Zap, 
  Search, 
  Smartphone,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description: "We create visually stunning, user-centric designs that capture your brand's essence and keep visitors engaged.",
    features: [
      "Custom UI/UX design tailored to your brand",
      "Wireframing and prototyping",
      "Responsive design for all devices",
      "Design system creation",
      "User research and testing"
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom-built web applications using cutting-edge technologies that perform flawlessly and scale seamlessly.",
    features: [
      "Modern React & Next.js development",
      "Backend API development",
      "Database architecture",
      "Third-party integrations",
      "Code quality & testing"
    ],
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "High-converting landing pages designed to turn visitors into customers and maximize your marketing ROI.",
    features: [
      "Conversion-optimized design",
      "A/B testing setup",
      "Analytics integration",
      "Fast loading speeds",
      "Clear call-to-actions"
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your existing website for better user experience, improved SEO rankings, and higher conversions.",
    features: [
      "Core Web Vitals optimization",
      "Image and asset optimization",
      "Code splitting & lazy loading",
      "CDN setup & configuration",
      "Performance monitoring"
    ],
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Boost your search engine visibility and drive organic traffic with our comprehensive SEO strategies.",
    features: [
      "Technical SEO audits",
      "On-page optimization",
      "Schema markup implementation",
      "Site structure optimization",
      "SEO-friendly content strategy"
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Development",
    description: "Ensure your website delivers an exceptional experience across all devices with mobile-first approach.",
    features: [
      "Progressive Web Apps (PWA)",
      "Touch-friendly interfaces",
      "Offline capabilities",
      "App-like experience",
      "Cross-platform consistency"
    ],
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
              Comprehensive <span className="text-gradient">Web Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From stunning designs to powerful development, we offer everything you need to 
              establish a dominant online presence and achieve your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                    <service.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="glow">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>

                {/* Visual Card */}
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-2xl border-gradient bg-card/50 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <service.icon size={80} className="text-primary/30 mx-auto mb-4" />
                      <div className="text-xl font-semibold text-muted-foreground">{service.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-3xl border-gradient bg-card/50">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss your project and find the perfect solution together. 
              Our team is ready to help you achieve your goals.
            </p>
            <Button asChild variant="glow" size="xl">
              <Link to="/contact">
                Schedule a Free Consultation
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
