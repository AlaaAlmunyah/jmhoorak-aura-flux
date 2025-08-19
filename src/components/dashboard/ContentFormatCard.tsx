import { Video, Play, Image } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const formatSuggestions = [
  {
    type: "Shorts/Reels",
    icon: Play,
    reach: 85,
    recommended: true,
    description: "High engagement potential"
  },
  {
    type: "Long-form",
    icon: Video,
    reach: 68,
    recommended: false,
    description: "Steady growth expected"
  },
  {
    type: "Carousel",
    icon: Image,
    reach: 45,
    recommended: false,
    description: "Good for tutorials"
  }
];

export function ContentFormatCard() {
  return (
    <Card className="glass hover-lift transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 p-3 w-52">
      <CardHeader className="pb-2">
        <CardTitle className="text-xs font-semibold flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-orange-500/20 border border-orange-500/30">
            <Video className="w-3 h-3 text-orange-400" />
          </div>
          <div>
            <span className="text-card-foreground">Format Tips</span>
            <p className="text-[10px] text-muted-foreground font-normal">Optimization</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {formatSuggestions.slice(0, 2).map((format, index) => {
          const IconComponent = format.icon;
          return (
            <div key={index} className="p-2 rounded bg-card-accent">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <IconComponent className="w-3 h-3 text-orange-400" />
                  <span className="text-[10px] font-semibold text-card-foreground">{format.type}</span>
                </div>
                {format.recommended && (
                  <Badge variant="secondary" className="text-[8px] font-medium px-1 py-0">
                    ⭐
                  </Badge>
                )}
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span className="text-muted-foreground">Reach</span>
                  <span className="font-semibold text-orange-400">{format.reach}%</span>
                </div>
                <Progress value={format.reach} className="h-1" />
                <p className="text-[9px] text-muted-foreground">
                  {format.description}
                </p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}