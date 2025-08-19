import { Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export function ViralPotentialCard() {
  const viralScore = 78;
  
  const getScoreColor = (score: number) => {
    if (score >= 70) return "#10b981"; // green
    if (score >= 40) return "#f59e0b"; // yellow  
    return "#ef4444"; // red
  };

  const getScoreLabel = (score: number) => {
    if (score >= 70) return "Strong";
    if (score >= 40) return "Average";
    return "Weak";
  };

  return (
    <Card className="glass hover-lift transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 p-4">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
            <Flame className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <span className="text-card-foreground">Viral Potential Score</span>
            <p className="text-xs text-muted-foreground font-normal">Performance Analysis</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center space-y-4">
        <div className="w-24 h-24">
          <CircularProgressbar
            value={viralScore}
            text={`${viralScore}%`}
            styles={buildStyles({
              textColor: '#fff',
              pathColor: getScoreColor(viralScore),
              trailColor: 'hsl(var(--muted))',
              textSize: '16px',
              pathTransitionDuration: 1.5
            })}
          />
        </div>
        <div className="text-center space-y-1">
          <p className="text-lg font-bold" style={{ color: getScoreColor(viralScore) }}>
            {getScoreLabel(viralScore)}
          </p>
          <div className="w-full h-px bg-border/50"></div>
          <p className="text-xs text-muted-foreground">
            Based on engagement patterns
          </p>
        </div>
      </CardContent>
    </Card>
  );
}