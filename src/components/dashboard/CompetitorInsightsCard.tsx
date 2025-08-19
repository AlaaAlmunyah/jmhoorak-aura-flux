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
    <Card className="glass hover-lift h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 p-6">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold flex items-center gap-3">
          <div className="p-3 rounded-xl bg-orange-500/20 border border-orange-500/30">
            <Swords className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <span className="text-card-foreground">Competitor Insights</span>
            <p className="text-xs text-muted-foreground font-normal mt-1">Market Position</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={competitorData}>
              <XAxis 
                dataKey="name" 
                fontSize={12}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <Bar 
                dataKey="score" 
                radius={[6, 6, 0, 0]}
              >
                {competitorData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="w-full h-px bg-border/50"></div>
        
        <div className="space-y-3">
          {competitorData.map((competitor, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: competitor.color }}
                ></div>
                <span className={competitor.name === "You" ? "text-primary font-semibold" : "text-muted-foreground"}>
                  {competitor.name}
                </span>
              </div>
              <span className="font-semibold">{competitor.score}</span>
            </div>
          ))}
        </div>
        
        <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
          <p className="text-sm text-green-400 font-medium">
            📈 +13% above average competitor performance
          </p>
        </div>
      </CardContent>
    </Card>
  );
}