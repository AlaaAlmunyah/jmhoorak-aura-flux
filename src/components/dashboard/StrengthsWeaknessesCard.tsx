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
    <Card className="glass hover-lift h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-accent">
            <Scale className="w-4 h-4 text-accent-foreground" />
          </div>
          Strengths & Weaknesses
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 h-full">
        {/* Strengths */}
        <div>
          <h4 className="text-xs font-medium text-green-400 mb-3 flex items-center gap-1">
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

        {/* Weaknesses */}
        <div>
          <h4 className="text-xs font-medium text-red-400 mb-3 flex items-center gap-1">
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