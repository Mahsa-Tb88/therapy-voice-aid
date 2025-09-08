import { Card, CardContent } from "@/components/ui/card";
import doctorImage from "@/assets/doctor-1.jpg";
import teamImage from "@/assets/healthcare-team.jpg";

const TeamSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform is designed by mental health experts and trusted by psychiatric clinics worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Doctor Portrait */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img 
                src={doctorImage} 
                alt="Professional psychiatrist using PsycheScreen platform" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Expert Clinical Support</h3>
                <p className="text-muted-foreground">
                  Our platform is built with input from leading psychiatrists and mental health professionals.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Team Photo */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <img 
                src={teamImage} 
                alt="Healthcare team using advanced mental health technology" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Collaborative Care</h3>
                <p className="text-muted-foreground">
                  Empowering healthcare teams with AI-driven insights for better patient outcomes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;