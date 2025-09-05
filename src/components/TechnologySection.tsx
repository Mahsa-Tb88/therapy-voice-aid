import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Mic, Cloud, Smartphone, Database, Lock, Cpu, Waves, ArrowRight, Code } from "lucide-react";

const technologies = [
  {
    icon: Brain,
    title: "Natural Language Processing",
    description: "Advanced NLP models analyze speech patterns, emotional markers, and cognitive indicators for comprehensive assessment.",
    tech: "GPT-4, BERT, Custom Models"
  },
  {
    icon: Mic,
    title: "Voice Biomarker Analysis",
    description: "Cutting-edge audio processing detects subtle changes in voice that correlate with mental health conditions.",
    tech: "Deep Learning Audio Analysis"
  },
  {
    icon: Cloud,
    title: "Scalable Cloud Infrastructure",
    description: "Enterprise-grade cloud architecture ensures reliable, secure, and scalable service delivery worldwide.",
    tech: "AWS, Kubernetes, Microservices"
  },
  {
    icon: Database,
    title: "Secure Data Management",
    description: "HIPAA-compliant data storage with advanced encryption and access controls for complete patient privacy.",
    tech: "End-to-end Encryption, Zero Trust"
  }
];

const integrations = [
  { name: "Epic EHR", logo: "🏥" },
  { name: "Cerner", logo: "📋" },
  { name: "Allscripts", logo: "💊" },
  { name: "athenahealth", logo: "🔬" },
  { name: "NextGen", logo: "📱" },
  { name: "eClinicalWorks", logo: "💻" }
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-soft border border-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cpu className="w-4 h-4" />
            <span>Advanced Technology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Powered by{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Cutting-Edge AI
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Our platform leverages the latest advances in artificial intelligence, speech analysis, 
            and cloud computing to deliver unprecedented insights into mental health.
          </p>
        </div>

        {/* Technology Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card border-card-border">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-accent-soft border border-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {tech.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {tech.description}
                      </p>
                      <div className="inline-flex items-center space-x-2 bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm">
                        <Code className="w-3 h-3" />
                        <span>{tech.tech}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Architecture Diagram */}
        <Card className="mb-16 shadow-strong bg-gradient-card">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                AI-Powered Assessment Pipeline
              </h3>
              <p className="text-muted-foreground">
                From patient contact to clinical insights in real-time
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-soft border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Patient Contact</h4>
                <p className="text-sm text-muted-foreground">Automated AI calls initiated based on clinical protocols</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-soft border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Voice Analysis</h4>
                <p className="text-sm text-muted-foreground">Real-time speech and emotion processing during conversation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-soft border border-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">AI Assessment</h4>
                <p className="text-sm text-muted-foreground">Advanced algorithms analyze patterns and generate insights</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-success-soft border border-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-success" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Clinical Reports</h4>
                <p className="text-sm text-muted-foreground">Comprehensive reports delivered to healthcare providers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* EHR Integrations */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Seamless EHR Integration
          </h3>
          <p className="text-muted-foreground mb-8">
            Connect with your existing healthcare systems for streamlined workflow
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            {integrations.map((integration, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-2">{integration.logo}</div>
                  <div className="text-sm font-medium text-foreground">{integration.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button variant="hero" size="lg">
            <Lock className="w-5 h-5" />
            View All Integrations
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;