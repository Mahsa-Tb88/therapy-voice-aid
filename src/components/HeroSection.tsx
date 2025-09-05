import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Brain } from "lucide-react";
import { useState } from "react";
import PatientFormDialog from "./PatientFormDialog";

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Brain className="w-8 h-8 text-primary" />
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            PsycheScreen:<br />
            <span className="text-primary">AI-Powered Mental Health Support</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            PsycheScreen is an innovative platform enhancing mental health support. 
            We leverage AI to improve access and effectiveness.
          </p>

          {/* CTA Button */}
          <Button 
            variant="default" 
            size="lg"
            onClick={() => setIsFormOpen(true)}
            className="mb-16"
          >
            <Phone className="w-5 h-5 mr-2" />
            Start Patient Screening
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          {/* Author */}
          <p className="text-sm text-muted-foreground">by Reza Sharifi</p>
        </div>
      </div>

      <PatientFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default HeroSection;