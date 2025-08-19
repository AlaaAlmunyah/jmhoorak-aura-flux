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
    <Card className="glass hover-lift h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 p-6">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold flex items-center gap-3">
          <div className="p-3 rounded-xl bg-orange-500/20 border border-orange-500/30">
            <Video className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <span className="text-card-foreground">Content Format Suggestions</span>
            <p className="text-xs text-muted-foreground font-normal mt-1">Format Optimization</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {formatSuggestions.map((format, index) => {
          const IconComponent = format.icon;
          return (
            <div key={index} className="p-4 rounded-lg bg-card-accent transition-all duration-200 hover:bg-card-accent/80">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <IconComponent className="w-5 h-5 text-orange-400" />
                  <span className="text-sm font-semibold text-card-foreground">{format.type}</span>
                </div>
                {format.recommended && (
                  <Badge variant="secondary" className="text-xs font-medium">
                    Recommended
                  </Badge>
                )}
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Predicted Reach</span>
                  <span className="font-semibold text-orange-400">{format.reach}%</span>
                </div>
                <Progress value={format.reach} className="h-2" />
                <p className="text-sm text-muted-foreground">
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