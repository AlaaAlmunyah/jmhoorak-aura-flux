import { Scale, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const strengths = [
  "High-quality video production",
  "Consistent posting schedule",
  "Strong audience engagement",
  "Trending topic coverage"
];

const weaknesses = [
  "Limited cross-platform presence",
  "Inconsistent thumbnail design",
  "Low share-to-view ratio",
  "Missed peak posting times"
];

export function StrengthsWeaknessesCard() {
  return (
    <Card className="glass hover-lift transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 p-4">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
            <Scale className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <span className="text-card-foreground">Strengths & Weaknesses</span>
            <p className="text-xs text-muted-foreground font-normal">Content Analysis</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        {/* Strengths */}
        <div>
          <h4 className="text-xs font-semibold text-green-400 mb-3 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Strengths
          </h4>
          <div className="space-y-2">
            {strengths.map((strength, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-card-foreground leading-relaxed">
                  {strength}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-px bg-border/50"></div>

        {/* Weaknesses */}
        <div>
          <h4 className="text-xs font-semibold text-red-400 mb-3 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" />
            Weaknesses
          </h4>
          <div className="space-y-2">
            {weaknesses.map((weakness, index) => (
              <div key={index} className="flex items-start gap-2">
                <AlertTriangle className="w-3 h-3 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-card-foreground leading-relaxed">
                  {weakness}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}