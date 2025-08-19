import { User, Target, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const audienceData = [
  { name: "Male", value: 62, color: "#8b5cf6" },
  { name: "Female", value: 38, color: "#06b6d4" }
];

const engagementData = [
  { metric: "Views", value: 85 },
  { metric: "Likes", value: 72 },
  { metric: "Comments", value: 68 },
  { metric: "Shares", value: 45 }
];

export function CreatorPersonaSidebar() {
  return (
    <div className="w-80 bg-sidebar border-l border-sidebar-border">
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-xl font-semibold text-sidebar-foreground flex items-center gap-2">
          <User className="w-5 h-5 text-primary" />
          Creator Persona
        </h2>
        <p className="text-sm text-muted-foreground mt-1">Your content profile</p>
      </div>
      
      <div className="p-4 space-y-6">
        {/* Profile Summary */}
        <Card className="p-4 glass">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Tech Creator</h3>
                <p className="text-sm text-muted-foreground">Educational & Reviews</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Technology</Badge>
              <Badge variant="secondary">Reviews</Badge>
              <Badge variant="outline">Tutorial</Badge>
            </div>
          </div>
        </Card>

        {/* Key Metrics */}
        <Card className="p-4 glass">
          <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            Key Metrics
          </h4>
          
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Avg Engagement</span>
                <span className="text-primary font-medium">7.2%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Viral Success Rate</span>
                <span className="text-secondary font-medium">23%</span>
              </div>
              <Progress value={23} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Content Quality</span>
                <span className="text-accent font-medium">89%</span>
              </div>
              <Progress value={89} className="h-2" />
            </div>
          </div>
        </Card>

        {/* Audience Overview */}
        <Card className="p-4 glass">
          <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            Audience Split
          </h4>
          
          <div className="h-24 mb-3">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={audienceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={25}
                  outerRadius={40}
                  dataKey="value"
                >
                  {audienceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span>Male 62%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <span>Female 38%</span>
            </div>
          </div>
        </Card>

        {/* Performance Chart */}
        <Card className="p-4 glass">
          <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-primary" />
            Performance
          </h4>
          
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagementData}>
                <XAxis dataKey="metric" hide />
                <YAxis hide />
                <Bar dataKey="value" fill="#8b5cf6" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Creator Style */}
        <Card className="p-4 glass">
          <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            Style Profile
          </h4>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tone:</span>
              <span className="text-card-foreground">Professional</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Format:</span>
              <span className="text-card-foreground">Long-form</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Frequency:</span>
              <span className="text-card-foreground">3x/week</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Peak Time:</span>
              <span className="text-card-foreground">2-4 PM</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}