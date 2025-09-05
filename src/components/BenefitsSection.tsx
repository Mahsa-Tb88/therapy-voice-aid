import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, Clock, BarChart3, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "50% Cost Reduction",
    description: "Significantly lower costs compared to traditional therapy sessions while maintaining quality care.",
    metric: "$150",
    metricLabel: "vs $300 traditional"
  },
  {
    icon: Users,
    title: "Improved Accessibility",
    description: "Reach patients in remote areas or those with mobility limitations through phone-based assessments.",
    metric: "95%",
    metricLabel: "patient satisfaction"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Continuous monitoring and crisis intervention capabilities with immediate response systems.",
    metric: "2.3h",
    metricLabel: "avg response time"
  },
  {
    icon: BarChart3,
    title: "Scalable Solutions",
    description: "Handle thousands of patients simultaneously with consistent quality and personalized care.",
    metric: "10x",
    metricLabel: "capacity increase"
  }
];

const keyFeatures = [
  "Evidence-based assessment protocols",
  "Real-time emotion and speech analysis",
  "Automated clinical documentation",
  "Integration with existing EHR systems",
  "HIPAA-compliant data security",
  "Multilingual support capabilities"
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success-soft border border-success/20 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>Proven Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Why Choose{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              PsycheScreen?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Transform your psychiatric practice with AI-powered solutions that improve patient outcomes, 
            reduce costs, and scale your care delivery.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-card border-card-border">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary-soft border border-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-foreground">
                          {benefit.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">
                            {benefit.metric}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {benefit.metricLabel}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features List & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Advanced Clinical Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success-soft border border-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-hero rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Join leading psychiatric clinics already using PsycheScreen to deliver 
              better patient outcomes at scale.
            </p>
            <div className="space-y-4">
              <Button variant="outline" size="lg" className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Shield className="w-5 h-5" />
                Schedule Demo
                <ArrowRight className="w-5 h-5" />
              </Button>
              <p className="text-xs text-primary-foreground/60">
                30-day free trial • No setup fees • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;