import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Brain, Users, Clock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AICallSection = () => {
  const callFeatures = [
    {
      icon: Brain,
      title: "AI-Driven Interactions",
      description: "Engage with an AI agent in regular, empathetic conversations."
    },
    {
      icon: Clock,
      title: "Proactive Monitoring", 
      description: "Receive real-time insights into mental well-being trends."
    },
    {
      icon: Users,
      title: "Cost Reduction",
      description: "Optimize therapist time and session frequency, reducing costs."
    },
    {
      icon: Phone,
      title: "24/7 Availability",
      description: "Get support whenever you need it, day or night."
    }
  ];

  const callProcess = [
    {
      step: "1",
      title: "Patient Registration",
      description: "Patient fills out initial form with contact information",
      icon: MessageCircle
    },
    {
      step: "2", 
      title: "AI Outreach",
      description: "AI agent automatically calls patient at scheduled time",
      icon: Phone
    },
    {
      step: "3",
      title: "Empathetic Conversation",
      description: "AI conducts natural conversation about mental health status",
      icon: Brain
    },
    {
      step: "4",
      title: "Data Analysis",
      description: "Insights are processed and sent to healthcare providers",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Phone className="w-4 h-4 mr-2" />
            AI-Powered Outreach
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            PsycheScreen: <span className="text-primary">Accessible and Effective Support</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI agent proactively reaches out to patients, conducting empathetic conversations 
            to gather crucial mental health insights for healthcare providers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Features */}
          <div className="space-y-6">
            {callFeatures.map((feature, index) => (
              <Card key={index} className="border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right side - Call Interface Mockup */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary animate-pulse" />
                </div>
                <CardTitle className="text-xl">AI Agent Calling...</CardTitle>
                <p className="text-muted-foreground">Sarah M. - Weekly Check-in</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-background/60 rounded-lg p-4 border">
                  <p className="text-sm text-muted-foreground mb-2">AI Agent:</p>
                  <p className="text-foreground">"Hi Sarah, this is your PsycheScreen wellness check. How have you been feeling this week?"</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2">Patient Response:</p>
                  <p className="text-foreground">"I've been feeling a bit anxious lately, especially about work..."</p>
                </div>
                <div className="flex items-center justify-center space-x-4 pt-4">
                  <div className="flex items-center space-x-2 text-success">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Recording</span>
                  </div>
                  <div className="flex items-center space-x-2 text-primary">
                    <Brain className="w-4 h-4" />
                    <span className="text-sm">AI Analysis Active</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process Flow */}
        <div className="bg-background rounded-xl p-8 border">
          <h3 className="text-2xl font-bold text-center mb-8">How AI Calls Work</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {callProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICallSection;