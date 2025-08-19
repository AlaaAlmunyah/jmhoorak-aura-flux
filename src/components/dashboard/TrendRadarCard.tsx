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
    <Card className="glass hover-lift h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-secondary">
            <Rocket className="w-4 h-4 text-secondary-foreground" />
          </div>
          Trend Radar
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {trendingTags.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {item.tag}
                </Badge>
                {item.trend === "up" ? (
                  <TrendingUp className="w-3 h-3 text-green-400" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-red-400" />
                )}
              </div>
              <span 
                className={`text-xs font-medium ${
                  item.trend === "up" ? "text-green-400" : "text-red-400"
                }`}
              >
                {item.growth > 0 ? "+" : ""}{item.growth}%
              </span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border">
          <h4 className="text-xs font-medium text-muted-foreground mb-2">
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