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
    <Card className="glass hover-lift transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 p-3 w-52">
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-semibold flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-orange-500/20 border border-orange-500/30">
            <Swords className="w-3 h-3 text-orange-400" />
          </div>
          <div>
            <span className="text-card-foreground">Competitors</span>
            <p className="text-[10px] text-muted-foreground font-normal">Position</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="h-20">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={competitorData} layout="vertical">
              <XAxis type="number" hide />
              <YAxis 
                type="category" 
                dataKey="name" 
                width={50} 
                fontSize={8}
                axisLine={false}
                tickLine={false}
              />
              <Bar dataKey="score" radius={[0, 2, 2, 0]}>
                {competitorData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-1">
          {competitorData.map((competitor, index) => (
            <div key={index} className="flex justify-between text-[10px]">
              <span className={competitor.name === "You" ? "font-semibold text-orange-400" : "text-muted-foreground"}>
                {competitor.name}
              </span>
              <span className="font-medium">{competitor.score}</span>
            </div>
          ))}
        </div>

        <div className="p-2 bg-card-accent rounded text-[10px] text-center">
          <span className="text-green-400 font-medium">Above average performance</span>
        </div>
      </CardContent>
    </Card>
  );
}