import { Swords } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const competitorData = [
  { name: "You", score: 78, color: "#8b5cf6" },
  { name: "TechGuru", score: 65, color: "#6b7280" },
  { name: "ReviewPro", score: 72, color: "#6b7280" }
];

export function CompetitorInsightsCard() {
  return (
    <Card className="glass hover-lift h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-accent">
            <Swords className="w-4 h-4 text-accent-foreground" />
          </div>
          Competitor Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-24 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={competitorData}>
              <XAxis 
                dataKey="name" 
                fontSize={10}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <Bar 
                dataKey="score" 
                radius={[4, 4, 0, 0]}
              >
                {competitorData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-2">
          {competitorData.map((competitor, index) => (
            <div key={index} className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: competitor.color }}
                ></div>
                <span className={competitor.name === "You" ? "text-primary font-medium" : "text-muted-foreground"}>
                  {competitor.name}
                </span>
              </div>
              <span className="font-medium">{competitor.score}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-4 p-2 bg-green-500/10 rounded-lg">
          <p className="text-xs text-green-400">
            +13% above average competitor performance
          </p>
        </div>
      </CardContent>
    </Card>
  );
}