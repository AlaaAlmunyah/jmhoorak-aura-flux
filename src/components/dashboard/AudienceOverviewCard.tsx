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
    <Card className="glass hover-lift transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 p-3 w-64">
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-semibold flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-purple-500/20 border border-purple-500/30">
            <Users className="w-3 h-3 text-purple-400" />
          </div>
          <div>
            <span className="text-card-foreground">Audience</span>
            <p className="text-[10px] text-muted-foreground font-normal">Demographics</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Gender Split */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-12">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={16}
                  outerRadius={24}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="text-[10px] space-y-0.5">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <span>Male 62%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
              <span>Female 38%</span>
            </div>
          </div>
        </div>

        {/* Age Distribution */}
        <div>
          <h4 className="text-[10px] font-medium text-card-foreground mb-1">Age Groups</h4>
          <div className="h-12">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData} layout="horizontal">
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="age" width={25} fontSize={8} />
                <Bar dataKey="value" fill="#8b5cf6" radius={[0, 1, 1, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Locations */}
        <div>
          <h4 className="text-[10px] font-medium text-card-foreground mb-1">Top Locations</h4>
          <div className="space-y-0.5">
            {locations.map((loc, index) => (
              <div key={index} className="flex items-center justify-between text-[10px]">
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