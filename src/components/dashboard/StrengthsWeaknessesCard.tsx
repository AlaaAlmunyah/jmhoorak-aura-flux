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
    <Card className="glass hover-lift transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 p-3 w-60">
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-semibold flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-green-500/20 border border-green-500/30">
            <Scale className="w-3 h-3 text-green-400" />
          </div>
          <div>
            <span className="text-card-foreground">Strengths & Weaknesses</span>
            <p className="text-[10px] text-muted-foreground font-normal">Analysis</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        {/* Strengths */}
        <div>
          <h4 className="text-[10px] font-semibold text-green-400 mb-2 flex items-center gap-1">
            <CheckCircle className="w-2 h-2" />
            Strengths
          </h4>
          <div className="space-y-1">
            {strengths.slice(0, 3).map((strength, index) => (
              <div key={index} className="flex items-start gap-1">
                <CheckCircle className="w-2 h-2 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-[10px] text-card-foreground leading-relaxed">
                  {strength}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Weaknesses */}
        <div>
          <h4 className="text-[10px] font-semibold text-red-400 mb-2 flex items-center gap-1">
            <AlertTriangle className="w-2 h-2" />
            Weaknesses
          </h4>
          <div className="space-y-1">
            {weaknesses.slice(0, 3).map((weakness, index) => (
              <div key={index} className="flex items-start gap-1">
                <AlertTriangle className="w-2 h-2 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-[10px] text-card-foreground leading-relaxed">
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