import { Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const genderData = [
  { name: "Male", value: 62, color: "#8b5cf6" },
  { name: "Female", value: 38, color: "#06b6d4" }
];

const ageData = [
  { age: "18-24", value: 25 },
  { age: "25-34", value: 45 },
  { age: "35-44", value: 20 },
  { age: "45+", value: 10 }
];

const locations = [
  { country: "USA", percentage: 42 },
  { country: "UK", percentage: 18 },
  { country: "Canada", percentage: 15 }
];

export function AudienceOverviewCard() {
  return (
    <Card className="glass hover-lift transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 p-4">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
            <Users className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <span className="text-card-foreground">Audience Overview</span>
            <p className="text-xs text-muted-foreground font-normal">Demographics & Reach</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Gender Split */}
        <div>
          <h4 className="text-xs font-medium text-card-foreground mb-2">Gender Distribution</h4>
          <div className="flex items-center gap-3">
            <div className="w-16 h-16">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={18}
                    outerRadius={28}
                    dataKey="value"
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-xs space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Male</span>
                <span className="font-semibold">62%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span>Female</span>
                <span className="font-semibold">38%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border/50"></div>

        {/* Age Distribution */}
        <div>
          <h4 className="text-xs font-medium text-card-foreground mb-2">Age Groups</h4>
          <div className="h-16">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData} layout="horizontal">
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="age" width={35} fontSize={10} />
                <Bar dataKey="value" fill="#8b5cf6" radius={[0, 2, 2, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="w-full h-px bg-border/50"></div>

        {/* Top Locations */}
        <div>
          <h4 className="text-xs font-medium text-card-foreground mb-2">Top Locations</h4>
          <div className="space-y-1">
            {locations.map((loc, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{loc.country}</span>
                <span className="text-primary font-semibold">{loc.percentage}%</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}