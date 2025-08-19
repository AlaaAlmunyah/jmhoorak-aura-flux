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
    <Card className="glass hover-lift h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-accent">
            <AlertTriangle className="w-4 h-4 text-accent-foreground" />
          </div>
          Risk / Weakness Warnings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Critical Alert Banner */}
        {risks.some(r => r.severity === "high") && (
          <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-xs text-red-400 font-medium">
              ⚠️ Critical issues detected - immediate attention required
            </p>
          </div>
        )}

        {/* Risk List */}
        <div className="space-y-2">
          {risks.map((risk, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-sm">{getSeverityIcon(risk.severity)}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-xs font-medium text-card-foreground">
                      {risk.type}
                    </h4>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getSeverityColor(risk.severity)}`}
                    >
                      {risk.severity}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    {risk.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="h-6 px-2 text-xs">
                      <Zap className="w-3 h-3 mr-1" />
                      AI Suggestion
                    </Button>
                    <span className="text-xs text-primary">
                      {risk.suggestion}
                    </span>
                  </div>
                </div>
              </div>
              {index < risks.length - 1 && (
                <div className="border-t border-border/50"></div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}