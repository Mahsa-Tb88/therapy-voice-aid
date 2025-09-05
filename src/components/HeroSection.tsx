import { Button } from "@/components/ui/button";
import { Brain, Phone, BarChart3, Clock, ArrowRight, Shield } from "lucide-react";
import { useState } from "react";
import PatientFormDialog from "./PatientFormDialog";

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Brain className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-secondary" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
          <Phone className="w-7 h-7 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-soft border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Shield className="w-4 h-4" />
            <span>AI-Powered Mental Health Platform</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Revolutionizing Mental Health Care with{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              AI-Driven Insights
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
            Empower psychiatric clinics with continuous patient monitoring, automated phone consultations, 
            and real-time mental health analytics. Accessible, scalable, and available 24/7.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Continuous Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">95%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">50%</div>
              <div className="text-sm text-muted-foreground">Cost Reduction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => setIsFormOpen(true)}
              className="animate-slide-up"
            >
              <Phone className="w-5 h-5" />
              Start Patient Screening
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Clock className="w-5 h-5" />
              Schedule Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading psychiatric clinics</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-xs font-medium">HIPAA Compliant</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="text-xs font-medium">FDA Approved AI</div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full" />
              <div className="text-xs font-medium">SOC 2 Certified</div>
            </div>
          </div>
        </div>
      </div>

      <PatientFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default HeroSection;