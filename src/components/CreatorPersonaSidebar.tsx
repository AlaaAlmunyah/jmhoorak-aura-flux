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
    <div className="h-full bg-sidebar border-l border-sidebar-border">
      <div className="p-4 border-b border-sidebar-border">
        <h2 className="text-lg font-semibold text-sidebar-foreground flex items-center gap-2">
          <User className="w-4 h-4 text-primary" />
          Persona
        </h2>
      </div>
      
      <div className="p-3 space-y-4">
        {/* Profile Summary */}
        <Card className="p-3 glass">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-card-foreground">Tech Creator</h3>
                <p className="text-xs text-muted-foreground">Educational</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1">
              <Badge variant="secondary" className="text-xs">Tech</Badge>
              <Badge variant="outline" className="text-xs">Reviews</Badge>
            </div>
          </div>
        </Card>

        {/* Key Metrics */}
        <Card className="p-3 glass">
          <h4 className="font-semibold text-sm text-card-foreground mb-3 flex items-center gap-2">
            <Target className="w-3 h-3 text-primary" />
            Metrics
          </h4>
          
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Engagement</span>
                <span className="text-primary font-medium">7.2%</span>
              </div>
              <Progress value={72} className="h-1" />
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Viral Rate</span>
                <span className="text-secondary font-medium">23%</span>
              </div>
              <Progress value={23} className="h-1" />
            </div>
          </div>
        </Card>

        {/* Audience Overview */}
        <Card className="p-3 glass">
          <h4 className="font-semibold text-sm text-card-foreground mb-3 flex items-center gap-2">
            <Users className="w-3 h-3 text-primary" />
            Audience
          </h4>
          
          <div className="h-16 mb-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={audienceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={20}
                  outerRadius={28}
                  dataKey="value"
                >
                  {audienceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex justify-between text-xs">
            <span>M: 62%</span>
            <span>F: 38%</span>
          </div>
        </Card>

        {/* Performance Chart */}
        <Card className="p-3 glass">
          <h4 className="font-semibold text-sm text-card-foreground mb-3 flex items-center gap-2">
            <BarChart3 className="w-3 h-3 text-primary" />
            Performance
          </h4>
          
          <div className="h-16">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={engagementData}>
                <XAxis dataKey="metric" hide />
                <YAxis hide />
                <Bar dataKey="value" fill="#8b5cf6" radius={[1, 1, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Creator Style */}
        <Card className="p-3 glass">
          <h4 className="font-semibold text-sm text-card-foreground mb-3 flex items-center gap-2">
            <TrendingUp className="w-3 h-3 text-primary" />
            Style
          </h4>
          
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tone:</span>
              <span className="text-card-foreground">Pro</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Format:</span>
              <span className="text-card-foreground">Long</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Peak:</span>
              <span className="text-card-foreground">2-4 PM</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}