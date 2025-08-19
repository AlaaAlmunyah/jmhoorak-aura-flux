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
    <Card className="glass hover-lift h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 p-6">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold flex items-center gap-3">
          <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
            <Flame className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <span className="text-card-foreground">Viral Potential Score</span>
            <p className="text-xs text-muted-foreground font-normal mt-1">Performance Analysis</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center flex-1 space-y-6">
        <div className="w-28 h-28">
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
        <div className="text-center space-y-2">
          <p className="text-xl font-bold" style={{ color: getScoreColor(viralScore) }}>
            {getScoreLabel(viralScore)}
          </p>
          <div className="w-full h-px bg-border/50"></div>
          <p className="text-sm text-muted-foreground">
            Based on engagement patterns
          </p>
        </div>
      </CardContent>
    </Card>
  );
}