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
    <Card className="glass hover-lift transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 p-3 w-56">
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-semibold flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-green-500/20 border border-green-500/30">
            <Rocket className="w-3 h-3 text-green-400" />
          </div>
          <div>
            <span className="text-card-foreground">Trends</span>
            <p className="text-[10px] text-muted-foreground font-normal">Market</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          {trendingTags.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-1.5 rounded bg-card-accent">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px] font-medium px-1.5 py-0.5">
                  {item.tag}
                </Badge>
                {item.trend === "up" ? (
                  <TrendingUp className="w-2 h-2 text-green-400" />
                ) : (
                  <TrendingDown className="w-2 h-2 text-red-400" />
                )}
              </div>
              <span 
                className={`text-[10px] font-bold ${
                  item.trend === "up" ? "text-green-400" : "text-red-400"
                }`}
              >
                {item.growth > 0 ? "+" : ""}{item.growth}%
              </span>
            </div>
          ))}
        </div>

        <div>
          <h4 className="text-[10px] font-semibold text-card-foreground mb-1">
            Rising Topics
          </h4>
          <div className="flex flex-wrap gap-1">
            <Badge variant="secondary" className="text-[8px] px-1.5 py-0.5">ChatGPT</Badge>
            <Badge variant="secondary" className="text-[8px] px-1.5 py-0.5">ML</Badge>
            <Badge variant="secondary" className="text-[8px] px-1.5 py-0.5">Auto</Badge>
            <Badge variant="secondary" className="text-[8px] px-1.5 py-0.5">SaaS</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}