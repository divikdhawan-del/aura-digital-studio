import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Heart, Lightbulb, Users, Award, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every decision we make is focused on achieving measurable outcomes for your business.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our success. We build lasting partnerships, not just websites.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of trends to deliver cutting-edge solutions that give you competitive advantage.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with you throughout the process, ensuring your vision comes to life.",
  },
];

const stats = [
  { value: "150+", label: "Projects Completed", icon: Award },
  { value: "98%", label: "Client Satisfaction", icon: Heart },
  { value: "5+", label: "Years Experience", icon: TrendingUp },
  { value: "50+", label: "Happy Clients", icon: Users },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
              Building the <span className="text-gradient">Future of Web</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a passionate team of designers, developers, and strategists dedicated to 
              helping businesses thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  nexusweb was founded with a simple mission: to bridge the gap between 
                  beautiful design and high-performance web development. We noticed that 
                  many businesses struggled to find agencies that could deliver both
                  aesthetics and results.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a 
                  full-service digital agency. Today, we've helped over 150 businesses 
                  transform their online presence and achieve remarkable growth.
                </p>
                <p>
                  Our approach is different. We don't just build websites—we create digital 
                  experiences that drive conversions, build trust, and help your business 
                  stand out in a crowded market.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="aspect-square rounded-3xl border-gradient bg-card/50 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-primary-foreground">NW</span>
                  </div>
                  <p className="text-xl font-semibold">nexusweb</p>
                  <p className="text-muted-foreground">Est. 2019</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-glow-secondary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              What Drives Us <span className="text-gradient">Forward</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values shape everything we do, from how we work with clients to how we approach each project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
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
              Ready to Work With Us?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's create something amazing together. Tell us about your project 
              and discover how we can help you achieve your goals.
            </p>
            <Button asChild variant="glow" size="xl">
              <Link to="/contact">
                Start Your Project
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
