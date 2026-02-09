import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.steinhq.com/v1/storages/69886853affba40a6249d032/Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            {
              Name: formData.name,
              Email: formData.email,
              Phone: formData.phone,
              Description: formData.description,
              SubmittedAt: new Date().toISOString(),
            },
          ]),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", description: "" });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
              Tell Us About <span className="text-gradient">Your Project</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your online presence? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div className="order-2 lg:order-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 bg-card border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-card border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 bg-card border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Project Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Tell us about your project, goals, and timeline..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="glow"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Request a Quote
                      <Send size={20} />
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>

            {/* Info */}
            <div className="order-1 lg:order-2">
              <div className="p-8 rounded-2xl border-gradient bg-card/50">
                <h2 className="text-2xl font-bold mb-6">Why Work With Us?</h2>

                <ul className="space-y-4 mb-8">
                  {[
                    "Free initial consultation",
                    "Response within 24 hours",
                    "No obligation quote",
                    "Transparent pricing",
                    "Dedicated project manager",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-border pt-8 space-y-4">
                  <h3 className="font-semibold mb-4">Contact Information</h3>
                  
                  <a 
                    href="mailto:divikdhawan@gmail.com" 
                    className="flex items-center gap-4 text-muted-foreground transition-colors duration-200 hover:text-primary group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center transition-all duration-200 group-hover:bg-primary/20 group-hover:scale-105">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <span>divikdhawan@gmail.com</span>
                  </a>
                  
                  <a 
                    href="tel:+917297889356" 
                    className="flex items-center gap-4 text-muted-foreground transition-colors duration-200 hover:text-primary group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center transition-all duration-200 group-hover:bg-primary/20 group-hover:scale-105">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <span>+91 7297889356</span>
                  </a>
                  
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <span>Jaipur, Rajasthan, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
