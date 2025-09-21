import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { TrendingUp, TrendingDown, Activity, Users, Phone, Calendar } from "lucide-react";
import userDashboardScreen from "@/assets/user-dashboard-screen.jpg";

// Sample data for charts
const moodData = [
  { date: 'Jan', depression: 65, anxiety: 45, happiness: 35 },
  { date: 'Feb', depression: 58, anxiety: 38, happiness: 42 },
  { date: 'Mar', depression: 52, anxiety: 32, happiness: 48 },
  { date: 'Apr', depression: 45, anxiety: 28, happiness: 55 },
  { date: 'May', depression: 38, anxiety: 22, happiness: 62 },
  { date: 'Jun', depression: 32, anxiety: 18, happiness: 68 },
];

const medicationData = [
  { name: 'Adherent', value: 78, color: 'hsl(var(--success))' },
  { name: 'Missed', value: 15, color: 'hsl(var(--warning))' },
  { name: 'Stopped', value: 7, color: 'hsl(var(--destructive))' },
];

const callData = [
  { day: 'Mon', calls: 24, screenings: 18 },
  { day: 'Tue', calls: 31, screenings: 22 },
  { day: 'Wed', calls: 28, screenings: 20 },
  { day: 'Thu', calls: 35, screenings: 26 },
  { day: 'Fri', calls: 29, screenings: 21 },
  { day: 'Sat', calls: 18, screenings: 12 },
  { day: 'Sun', calls: 15, screenings: 9 },
];

const DashboardPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary-soft border border-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Activity className="w-4 h-4" />
            <span>Real-Time Analytics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Mental Health{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Real-time visualization of patient mental health trends, medication adherence, 
            and treatment progress with actionable insights for clinical teams.
          </p>
        </div>

        {/* Dashboard Preview Image */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <img 
              src={userDashboardScreen} 
              alt="PsycheScreen user dashboard showing patient profile and information" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-card shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Patients</p>
                  <p className="text-2xl font-bold text-foreground">1,247</p>
                  <div className="flex items-center text-success text-xs mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12% this month
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">AI Calls Today</p>
                  <p className="text-2xl font-bold text-foreground">156</p>
                  <div className="flex items-center text-success text-xs mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +8% from yesterday
                  </div>
                </div>
                <div className="w-12 h-12 bg-secondary-soft rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Improvement Rate</p>
                  <p className="text-2xl font-bold text-foreground">73%</p>
                  <div className="flex items-center text-success text-xs mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +5% this quarter
                  </div>
                </div>
                <div className="w-12 h-12 bg-accent-soft rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg Response Time</p>
                  <p className="text-2xl font-bold text-foreground">2.3h</p>
                  <div className="flex items-center text-success text-xs mt-1">
                    <TrendingDown className="w-3 h-3 mr-1" />
                    -15% faster
                  </div>
                </div>
                <div className="w-12 h-12 bg-success-soft rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alternative Sections Grid */}
        <div className="space-y-12">
          
          {/* Patient Success Stories */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Patient Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Sarah M., 28</p>
                      <p className="text-foreground text-sm">"The AI screening calls helped me identify my anxiety patterns. I've seen a 60% improvement in my daily mood scores."</p>
                      <div className="flex items-center text-success text-xs mt-2">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        60% improvement
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-soft rounded-full flex items-center justify-center flex-shrink-0">
                      <Activity className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Michael R., 45</p>
                      <p className="text-foreground text-sm">"Regular check-ins helped me stay on track with my treatment. My medication adherence improved from 60% to 95%."</p>
                      <div className="flex items-center text-success text-xs mt-2">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        95% adherence
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-soft rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Jessica L., 32</p>
                      <p className="text-foreground text-sm">"The 24/7 availability gave me peace of mind. I could get support whenever I needed it most."</p>
                      <div className="flex items-center text-success text-xs mt-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        24/7 support
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Schedule Appointment</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-secondary-soft rounded-full flex items-center justify-center mx-auto mb-3">
                    <Activity className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">View Reports</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent-soft rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Contact Patient</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-success-soft rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-success" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Add Patient</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How PsycheScreen Works */}
          <div>
            <h3 className="text-3xl font-bold text-foreground text-center mb-12">How PsycheScreen Works</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Steps Column */}
              <div className="space-y-8">
                
                {/* Step 1 */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-glow">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Proactive AI Calls</h4>
                    <p className="text-muted-foreground">AI conducts empathetic conversations with patients.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-glow">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Real-Time Analysis</h4>
                    <p className="text-muted-foreground">AI extracts emotional and psychological markers during calls.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-glow">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Therapist Reports</h4>
                    <p className="text-muted-foreground">Comprehensive reports enhance clinical decision-making.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-success rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-glow">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Patient Engagement</h4>
                    <p className="text-muted-foreground">Ensures continuous support and monitoring 24/7.</p>
                  </div>
                </div>

              </div>

              {/* Image Column */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-full max-w-md">
                    <img 
                      src="/src/assets/healthcare-professional.jpg" 
                      alt="Healthcare professional analyzing patient data on computer dashboard" 
                      className="w-full h-auto rounded-2xl shadow-elegant"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;