import { Rocket, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const trendingTags = [
  { tag: "AI Tools", growth: 45, trend: "up" },
  { tag: "Tech Reviews", growth: 23, trend: "up" },
  { tag: "Productivity", growth: -8, trend: "down" }
];

export function TrendRadarCard() {
  return (
    <Card className="glass hover-lift transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 p-4">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
            <Rocket className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <span className="text-card-foreground">Trend Radar</span>
            <p className="text-xs text-muted-foreground font-normal">Market Intelligence</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {trendingTags.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-card-accent">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs font-medium">
                  {item.tag}
                </Badge>
                {item.trend === "up" ? (
                  <TrendingUp className="w-3 h-3 text-green-400" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-red-400" />
                )}
              </div>
              <span 
                className={`text-xs font-bold ${
                  item.trend === "up" ? "text-green-400" : "text-red-400"
                }`}
              >
                {item.growth > 0 ? "+" : ""}{item.growth}%
              </span>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-border/50"></div>

        <div>
          <h4 className="text-xs font-semibold text-card-foreground mb-2">
            Rising Topics in Your Niche
          </h4>
          <div className="flex flex-wrap gap-1">
            <Badge variant="secondary" className="text-xs">ChatGPT</Badge>
            <Badge variant="secondary" className="text-xs">Machine Learning</Badge>
            <Badge variant="secondary" className="text-xs">Automation</Badge>
            <Badge variant="secondary" className="text-xs">SaaS Tools</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}