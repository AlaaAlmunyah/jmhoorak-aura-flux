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
    <Card className="glass hover-lift transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 p-3 w-64">
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-semibold flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-red-500/20 border border-red-500/30">
            <AlertTriangle className="w-3 h-3 text-red-400" />
          </div>
          <div>
            <span className="text-card-foreground">Risk Warnings</span>
            <p className="text-[10px] text-muted-foreground font-normal">Alerts</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {/* Critical Alert Banner */}
        {risks.some(r => r.severity === "high") && (
          <div className="p-1.5 bg-red-500/10 border border-red-500/20 rounded text-center">
            <p className="text-[10px] text-red-400 font-semibold">
              ⚠️ Critical issues detected
            </p>
          </div>
        )}

        {/* Risk List */}
        <div className="space-y-2">
          {risks.slice(0, 2).map((risk, index) => (
            <div key={index} className="p-2 rounded bg-card-accent space-y-1">
              <div className="flex items-start gap-2">
                <span className="text-xs">{getSeverityIcon(risk.severity)}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 mb-0.5">
                    <h4 className="text-[10px] font-semibold text-card-foreground">
                      {risk.type}
                    </h4>
                    <Badge 
                      variant="outline" 
                      className={`text-[8px] px-1 py-0 ${getSeverityColor(risk.severity)}`}
                    >
                      {risk.severity}
                    </Badge>
                  </div>
                  <p className="text-[9px] text-muted-foreground mb-1">
                    {risk.description}
                  </p>
                  <p className="text-[8px] text-orange-400 font-medium">
                    💡 {risk.suggestion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}