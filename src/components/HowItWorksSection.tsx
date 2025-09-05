import { Phone, Brain, FileText, Users } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Proactive AI Calls",
      description: "AI conducts empathetic conversations with patients.",
      icon: Phone,
    },
    {
      number: "2", 
      title: "Real-Time Analysis",
      description: "AI extracts emotional and psychological markers during calls.",
      icon: Brain,
    },
    {
      number: "3",
      title: "Therapist Reports", 
      description: "Comprehensive reports enhance clinical decision-making.",
      icon: FileText,
    },
    {
      number: "4",
      title: "Patient Engagement",
      description: "Ensures continuous support and monitoring 24/7.",
      icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            How PsycheScreen Works
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div key={step.number} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <IconComponent className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;