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
    <Card className="glass hover-lift h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 p-6">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold flex items-center gap-3">
          <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/30">
            <Rocket className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <span className="text-card-foreground">Trend Radar</span>
            <p className="text-xs text-muted-foreground font-normal mt-1">Market Intelligence</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {trendingTags.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-card-accent">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-sm font-medium">
                  {item.tag}
                </Badge>
                {item.trend === "up" ? (
                  <TrendingUp className="w-4 h-4 text-green-400" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-400" />
                )}
              </div>
              <span 
                className={`text-sm font-bold ${
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
          <h4 className="text-sm font-semibold text-card-foreground mb-3">
            Rising Topics in Your Niche
          </h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="text-sm">ChatGPT</Badge>
            <Badge variant="secondary" className="text-sm">Machine Learning</Badge>
            <Badge variant="secondary" className="text-sm">Automation</Badge>
            <Badge variant="secondary" className="text-sm">SaaS Tools</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}