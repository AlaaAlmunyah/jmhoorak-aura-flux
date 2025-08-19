import { Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const timeData = [
  { hour: "6AM", days: [20, 25, 30, 25, 40, 60, 70] },
  { hour: "9AM", days: [40, 45, 50, 45, 60, 80, 85] },
  { hour: "12PM", days: [60, 65, 70, 65, 80, 90, 95] },
  { hour: "3PM", days: [80, 85, 90, 85, 95, 100, 95] },
  { hour: "6PM", days: [70, 75, 80, 75, 85, 90, 85] },
  { hour: "9PM", days: [50, 55, 60, 55, 65, 75, 70] }
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const bestTimes = [
  { time: "2-4 PM", day: "Friday" },
  { time: "3-5 PM", day: "Saturday" },
  { time: "1-3 PM", day: "Wednesday" }
];

export function PostingTimeCard() {
  const getIntensity = (value: number) => {
    if (value >= 90) return "bg-primary";
    if (value >= 70) return "bg-primary/80";
    if (value >= 50) return "bg-primary/60";
    if (value >= 30) return "bg-primary/40";
    return "bg-primary/20";
  };

  return (
    <Card className="glass hover-lift h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-secondary">
            <Clock className="w-4 h-4 text-secondary-foreground" />
          </div>
          Posting Time Optimizer
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Heatmap */}
        <div className="mb-4">
          <div className="grid grid-cols-8 gap-1 text-xs">
            <div></div>
            {days.map((day) => (
              <div key={day} className="text-center text-muted-foreground p-1">
                {day}
              </div>
            ))}
            
            {timeData.map((row, rowIndex) => (
              <div key={rowIndex} className="contents">
                <div className="text-muted-foreground text-right pr-1 py-1">
                  {row.hour}
                </div>
                {row.days.map((value, colIndex) => (
                  <div
                    key={colIndex}
                    className={`aspect-square rounded ${getIntensity(value)} relative`}
                    title={`${row.hour} ${days[colIndex]}: ${value}% activity`}
                  >
                    {value >= 90 && (
                      <div className="absolute inset-0 rounded border-2 border-accent animate-pulse"></div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Best Times */}
        <div>
          <h4 className="text-xs font-medium text-muted-foreground mb-2">
            Optimal Posting Times
          </h4>
          <div className="space-y-1">
            {bestTimes.map((time, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <span className="text-card-foreground">{time.time}</span>
                <span className="text-primary font-medium">{time.day}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}