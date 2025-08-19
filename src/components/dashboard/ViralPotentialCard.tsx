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
    <Card className="glass hover-lift h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-accent">
            <Flame className="w-4 h-4 text-accent-foreground" />
          </div>
          Viral Potential Score
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center flex-1">
        <div className="w-24 h-24 mb-4">
          <CircularProgressbar
            value={viralScore}
            text={`${viralScore}%`}
            styles={buildStyles({
              textColor: '#fff',
              pathColor: getScoreColor(viralScore),
              trailColor: 'hsl(var(--muted))',
              textSize: '18px'
            })}
          />
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold" style={{ color: getScoreColor(viralScore) }}>
            {getScoreLabel(viralScore)}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Based on engagement patterns
          </p>
        </div>
      </CardContent>
    </Card>
  );
}