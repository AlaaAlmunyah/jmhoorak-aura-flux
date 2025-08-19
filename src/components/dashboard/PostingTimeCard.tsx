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
    if (value >= 90) return "bg-orange-400";
    if (value >= 70) return "bg-orange-400/80";
    if (value >= 50) return "bg-orange-400/60";
    if (value >= 30) return "bg-orange-400/40";
    return "bg-orange-400/20";
  };

  return (
    <Card className="glass hover-lift transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 p-3 w-64">
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-semibold flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-orange-500/20 border border-orange-500/30">
            <Clock className="w-3 h-3 text-orange-400" />
          </div>
          <div>
            <span className="text-card-foreground">Best Times</span>
            <p className="text-[10px] text-muted-foreground font-normal">Activity</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Mini Heatmap */}
        <div>
          <div className="grid grid-cols-8 gap-0.5 text-[8px]">
            <div></div>
            {days.map((day) => (
              <div key={day} className="text-center text-muted-foreground font-medium">
                {day.slice(0, 1)}
              </div>
            ))}
            
            {timeData.slice(0, 3).map((row, rowIndex) => (
              <div key={rowIndex} className="contents">
                <div className="text-muted-foreground text-right text-[8px] font-medium">
                  {row.hour}
                </div>
                {row.days.map((value, colIndex) => (
                  <div
                    key={colIndex}
                    className={`aspect-square rounded-sm ${getIntensity(value)}`}
                    title={`${row.hour} ${days[colIndex]}: ${value}% activity`}
                  >
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Best Times */}
        <div>
          <h4 className="text-[10px] font-semibold text-card-foreground mb-1">
            Optimal Times
          </h4>
          <div className="space-y-1">
            {bestTimes.slice(0, 2).map((time, index) => (
              <div key={index} className="flex items-center justify-between p-1.5 rounded bg-card-accent">
                <span className="text-[10px] text-card-foreground font-medium">{time.time}</span>
                <span className="text-[10px] text-orange-400 font-semibold">{time.day}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}