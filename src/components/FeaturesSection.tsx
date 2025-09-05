import { Card, CardContent } from "@/components/ui/card";
import { Phone, Brain, BarChart3, Clock, Shield, Users, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "AI-Powered Phone Calls",
    description: "Automated, empathetic conversations that gather comprehensive mental health data through natural speech analysis.",
    color: "primary"
  },
  {
    icon: Brain,
    title: "Advanced Speech Analysis",
    description: "Real-time emotion and sentiment detection using cutting-edge natural language processing and voice biomarkers.",
    color: "secondary"
  },
  {
    icon: BarChart3,
    title: "Comprehensive Analytics",
    description: "Visual dashboards displaying depression levels, mood patterns, medication adherence, and treatment progress.",
    color: "accent"
  },
  {
    icon: Clock,
    title: "24/7 Continuous Support",
    description: "Round-the-clock patient monitoring and crisis intervention capabilities with instant alert systems.",
    color: "success"
  },
  {
    icon: Shield,
    title: "HIPAA Compliant Security",
    description: "Enterprise-grade encryption and privacy protection ensuring complete patient data confidentiality.",
    color: "warning"
  },
  {
    icon: Users,
    title: "Clinical Decision Support",
    description: "Automated reports and insights that enhance therapist decision-making and treatment personalization.",
    color: "primary"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-soft border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Advanced Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Transforming Mental Healthcare with{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Intelligent Technology
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Our AI-driven platform combines advanced speech analysis, continuous monitoring, 
            and clinical insights to revolutionize patient care delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-card-border bg-card"
              >
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-xl bg-${feature.color}-soft border border-${feature.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 text-${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional highlight */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-card border-primary/20 shadow-glow">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Empowering Better Mental Health Outcomes
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                By combining AI technology with human compassion, we're making mental healthcare 
                more accessible, affordable, and effective for millions of patients worldwide.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;