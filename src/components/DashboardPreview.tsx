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

          {/* Recent Activity Feed */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Recent Activity</h3>
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-gradient-card rounded-lg">
                    <div className="w-10 h-10 bg-primary-soft rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">AI Call completed with Sarah M.</p>
                      <p className="text-xs text-muted-foreground">Depression screening - Low risk detected</p>
                    </div>
                    <span className="text-xs text-muted-foreground">2 min ago</span>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-gradient-card rounded-lg">
                    <div className="w-10 h-10 bg-secondary-soft rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Follow-up scheduled for Michael R.</p>
                      <p className="text-xs text-muted-foreground">Next appointment: Tomorrow 2:00 PM</p>
                    </div>
                    <span className="text-xs text-muted-foreground">15 min ago</span>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-gradient-card rounded-lg">
                    <div className="w-10 h-10 bg-accent-soft rounded-full flex items-center justify-center">
                      <Activity className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Weekly report generated</p>
                      <p className="text-xs text-muted-foreground">156 calls completed, 89% satisfaction rate</p>
                    </div>
                    <span className="text-xs text-muted-foreground">1 hour ago</span>
                  </div>

                  <div className="flex items-center space-x-4 p-3 bg-gradient-card rounded-lg">
                    <div className="w-10 h-10 bg-success-soft rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-success" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">New patient registered</p>
                      <p className="text-xs text-muted-foreground">Jessica L. added to monitoring program</p>
                    </div>
                    <span className="text-xs text-muted-foreground">3 hours ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Features Highlight */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Key Platform Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">AI-Powered Calls</h4>
                  <p className="text-sm text-muted-foreground">Automated screening calls that adapt to patient responses and detect mental health patterns.</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary-soft rounded-full flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Real-time Monitoring</h4>
                  <p className="text-sm text-muted-foreground">Continuous tracking of patient mental health metrics with instant alerts for healthcare providers.</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-soft">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-accent-soft rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Care Team Integration</h4>
                  <p className="text-sm text-muted-foreground">Seamless collaboration between AI system and healthcare professionals for comprehensive care.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Upcoming Appointments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-foreground">Today's Schedule</h4>
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-foreground">Sarah M.</p>
                        <p className="text-xs text-muted-foreground">Follow-up Call</p>
                      </div>
                      <span className="text-xs text-muted-foreground">10:00 AM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-foreground">Michael R.</p>
                        <p className="text-xs text-muted-foreground">Screening Call</p>
                      </div>
                      <span className="text-xs text-muted-foreground">2:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                      <div>
                        <p className="text-sm font-medium text-foreground">Jessica L.</p>
                        <p className="text-xs text-muted-foreground">Initial Assessment</p>
                      </div>
                      <span className="text-xs text-muted-foreground">4:30 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-foreground">This Week</h4>
                    <Activity className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Monday</span>
                      <span className="text-sm font-medium text-foreground">8 appointments</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Tuesday</span>
                      <span className="text-sm font-medium text-foreground">12 appointments</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Wednesday</span>
                      <span className="text-sm font-medium text-foreground">6 appointments</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Thursday</span>
                      <span className="text-sm font-medium text-foreground">9 appointments</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Friday</span>
                      <span className="text-sm font-medium text-foreground">7 appointments</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* AI Call Summaries */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Recent AI Call Summaries</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-soft rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Sarah M.</p>
                        <p className="text-xs text-muted-foreground">Depression Screening</p>
                      </div>
                    </div>
                    <span className="text-xs text-success bg-success-soft px-2 py-1 rounded-full">Low Risk</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Patient reported improved mood and better sleep patterns. Medication adherence at 95%. Recommended continued monitoring.</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Duration: 8 min</span>
                    <span>Confidence: 92%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-warning-soft rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-warning" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Michael R.</p>
                        <p className="text-xs text-muted-foreground">Anxiety Assessment</p>
                      </div>
                    </div>
                    <span className="text-xs text-warning bg-warning-soft px-2 py-1 rounded-full">Moderate Risk</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Elevated anxiety levels detected. Work-related stress factors identified. Scheduled follow-up with care team within 24 hours.</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Duration: 12 min</span>
                    <span>Confidence: 87%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-success-soft rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-success" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Jessica L.</p>
                        <p className="text-xs text-muted-foreground">Wellness Check</p>
                      </div>
                    </div>
                    <span className="text-xs text-success bg-success-soft px-2 py-1 rounded-full">Excellent</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Significant progress reported. Coping strategies working well. Patient feels supported and motivated to continue treatment plan.</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Duration: 6 min</span>
                    <span>Confidence: 94%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-secondary-soft rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">David K.</p>
                        <p className="text-xs text-muted-foreground">Medication Review</p>
                      </div>
                    </div>
                    <span className="text-xs text-primary bg-primary-soft px-2 py-1 rounded-full">Stable</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Current medication regimen effective. Minor side effects reported but manageable. Next review scheduled for 2 weeks.</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Duration: 10 min</span>
                    <span>Confidence: 89%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;