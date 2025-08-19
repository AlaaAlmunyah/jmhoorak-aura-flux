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
    <Card className="glass hover-lift transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 p-3 w-fit">
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-semibold flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-blue-500/20 border border-blue-500/30">
            <Flame className="w-3 h-3 text-blue-400" />
          </div>
          <div>
            <span className="text-card-foreground">Viral Score</span>
            <p className="text-[10px] text-muted-foreground font-normal">Performance</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-2">
        <div className="w-16 h-16">
          <CircularProgressbar
            value={viralScore}
            text={`${viralScore}%`}
            styles={buildStyles({
              textColor: '#fff',
              pathColor: getScoreColor(viralScore),
              trailColor: 'hsl(var(--muted))',
              textSize: '20px',
              pathTransitionDuration: 1.5
            })}
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-bold" style={{ color: getScoreColor(viralScore) }}>
            {getScoreLabel(viralScore)}
          </p>
          <p className="text-[10px] text-muted-foreground">
            Engagement patterns
          </p>
        </div>
      </CardContent>
    </Card>
  );
}