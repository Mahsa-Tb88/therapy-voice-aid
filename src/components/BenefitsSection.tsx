import { MessageCircle, Activity, DollarSign, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: MessageCircle,
      title: "AI-Driven Interactions",
      description: "Engage with an AI agent in regular, empathetic conversations.",
    },
    {
      icon: Activity,
      title: "Proactive Monitoring",
      description: "Receive real-time insights into mental well-being trends.",
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Optimize therapist time and session frequency, reducing costs.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Get support whenever you need it, day or night.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            PsycheScreen: Accessible and Effective Support
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="border-card-border bg-primary-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;