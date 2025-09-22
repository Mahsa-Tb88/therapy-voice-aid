import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Brain, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import aiCallPhone from "@/assets/ai-call-phone.jpg";
import aiCallDriving from "@/assets/ai-call-driving.jpg";
import aiCallBed from "@/assets/ai-call-bed.jpg";
import aiCallWalking from "@/assets/ai-call-walking.jpg";
import step1Registration from "@/assets/step-1-registration.jpg";
import step2Outreach from "@/assets/step-2-outreach.jpg";
import step3Conversation from "@/assets/step-3-conversation.jpg";
import step4Analysis from "@/assets/step-4-analysis.jpg";

const AICallSection = () => {
  const callProcess = [
    {
      step: "1",
      title: "Patient Registration",
      description: "Patient fills out initial form with contact information and preferences for communication",
      icon: MessageCircle,
      // Add image here: image: step1Registration, alt: "Description"
    },
    {
      step: "2", 
      title: "AI Outreach",
      description: "AI agent automatically calls patient at scheduled time with personalized approach",
      icon: Phone,
      image: step2Outreach,
      alt: "Smartphone showing incoming call from PsycheScreen AI Agent"
    },
    {
      step: "3",
      title: "Empathetic Conversation",
      description: "AI conducts natural, supportive conversation about mental health status and concerns",
      icon: Brain,
      // Add image here: image: step3Conversation, alt: "Description"
    },
    {
      step: "4",
      title: "Data Analysis",
      description: "Insights are processed and comprehensive reports sent to healthcare providers",
      icon: CheckCircle,
      image: step4Analysis,
      alt: "Healthcare professional reviewing AI-generated patient insights on computer"
    }
  ];

  return (
    <section className="py-20 bg-background">
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
          {/* Left side - Photo Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={aiCallPhone} 
              alt="User receiving AI agent call on smartphone" 
              className="rounded-lg shadow-lg w-full aspect-square object-cover"
            />
            <img 
              src={aiCallDriving} 
              alt="Person safely talking with AI agent while driving" 
              className="rounded-lg shadow-lg w-full aspect-square object-cover"
            />
            <img 
              src={aiCallBed} 
              alt="Person lying on bed talking with AI agent" 
              className="rounded-lg shadow-lg w-full aspect-square object-cover"
            />
            <img 
              src={aiCallWalking} 
              alt="Woman walking outdoors talking with AI agent" 
              className="rounded-lg shadow-lg w-full aspect-square object-cover"
            />
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
        <div className="bg-secondary/10 rounded-xl p-8 border">
          <h3 className="text-2xl font-bold text-center mb-8">How AI Calls Work</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {callProcess.map((step, index) => (
              <Card key={index} className="text-center border-0 bg-background/50 hover:bg-background/80 transition-colors">
                <CardContent className="p-6">
                  {/* Optional Image */}
                  {step.image && (
                    <img 
                      src={step.image} 
                      alt={step.alt}
                      className="w-full aspect-video object-cover rounded-lg shadow-md mb-4"
                    />
                  )}
                  
                  {/* Icon and Step Number */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-3">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICallSection;