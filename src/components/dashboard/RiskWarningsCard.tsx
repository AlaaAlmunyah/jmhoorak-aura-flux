import { AlertTriangle, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const risks = [
  {
    type: "Content Fatigue",
    severity: "high",
    description: "Audience engagement dropping 15% over 30 days",
    suggestion: "Diversify content formats"
  },
  {
    type: "Trend Lag",
    severity: "medium", 
    description: "Missing trending topics by 2-3 days average",
    suggestion: "Enable trend alerts"
  },
  {
    type: "Peak Hour Miss",
    severity: "low",
    description: "Only 40% of posts during optimal times",
    suggestion: "Use scheduling tools"
  }
];

export function RiskWarningsCard() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-red-400 bg-red-500/10 border-red-500/20";
      case "medium": return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";
      case "low": return "text-blue-400 bg-blue-500/10 border-blue-500/20";
      default: return "text-muted-foreground";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high": return "🔴";
      case "medium": return "🟡"; 
      case "low": return "🔵";
      default: return "⚪";
    }
  };

  return (
    <Card className="glass hover-lift transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 p-4">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <div className="p-2 rounded-lg bg-red-500/20 border border-red-500/30">
            <AlertTriangle className="w-4 h-4 text-red-400" />
          </div>
          <div>
            <span className="text-card-foreground">Risk / Weakness Warnings</span>
            <p className="text-xs text-muted-foreground font-normal">Content Alerts</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Critical Alert Banner */}
        {risks.some(r => r.severity === "high") && (
          <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-xs text-red-400 font-semibold">
              ⚠️ Critical issues detected - immediate attention required
            </p>
          </div>
        )}

        {/* Risk List */}
        <div className="space-y-3">
          {risks.map((risk, index) => (
            <div key={index} className="p-3 rounded-lg bg-card-accent space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-sm">{getSeverityIcon(risk.severity)}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-xs font-semibold text-card-foreground">
                      {risk.type}
                    </h4>
                    <Badge 
                      variant="outline" 
                      className={`text-[10px] ${getSeverityColor(risk.severity)}`}
                    >
                      {risk.severity}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {risk.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="h-6 px-2 text-[10px]">
                      <Zap className="w-2 h-2 mr-1" />
                      AI Suggestion
                    </Button>
                    <span className="text-[10px] text-orange-400 font-medium">
                      {risk.suggestion}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}