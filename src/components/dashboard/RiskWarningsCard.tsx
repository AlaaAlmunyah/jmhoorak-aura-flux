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
    <Card className="glass hover-lift h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 p-6">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold flex items-center gap-3">
          <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30">
            <AlertTriangle className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <span className="text-card-foreground">Risk / Weakness Warnings</span>
            <p className="text-xs text-muted-foreground font-normal mt-1">Content Alerts</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Critical Alert Banner */}
        {risks.some(r => r.severity === "high") && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-sm text-red-400 font-semibold">
              ⚠️ Critical issues detected - immediate attention required
            </p>
          </div>
        )}

        {/* Risk List */}
        <div className="space-y-4">
          {risks.map((risk, index) => (
            <div key={index} className="p-4 rounded-lg bg-card-accent space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-lg">{getSeverityIcon(risk.severity)}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-sm font-semibold text-card-foreground">
                      {risk.type}
                    </h4>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getSeverityColor(risk.severity)}`}
                    >
                      {risk.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {risk.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <Button size="sm" variant="outline" className="h-7 px-3 text-xs">
                      <Zap className="w-3 h-3 mr-1" />
                      AI Suggestion
                    </Button>
                    <span className="text-xs text-orange-400 font-medium">
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