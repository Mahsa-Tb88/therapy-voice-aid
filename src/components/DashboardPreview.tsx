import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { TrendingUp, TrendingDown, Activity, Users, Phone, Calendar } from "lucide-react";
import dashboardScreen from "@/assets/dashboard-screen.jpg";

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
              src={dashboardScreen} 
              alt="PsycheScreen dashboard showing mental health analytics" 
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

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Mood Trends */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-primary" />
                <span>Mental Health Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Area type="monotone" dataKey="depression" stackId="1" stroke="hsl(var(--destructive))" fill="hsl(var(--destructive))" fillOpacity={0.3} />
                  <Area type="monotone" dataKey="anxiety" stackId="2" stroke="hsl(var(--warning))" fill="hsl(var(--warning))" fillOpacity={0.3} />
                  <Area type="monotone" dataKey="happiness" stackId="3" stroke="hsl(var(--success))" fill="hsl(var(--success))" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Medication Adherence */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-secondary" />
                <span>Medication Adherence</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={medicationData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {medicationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center space-x-6 mt-4">
                {medicationData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-muted-foreground">{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly AI Calls Chart */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-accent" />
              <span>Weekly AI Call Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={callData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="calls" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="screenings" fill="hsl(var(--secondary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DashboardPreview;