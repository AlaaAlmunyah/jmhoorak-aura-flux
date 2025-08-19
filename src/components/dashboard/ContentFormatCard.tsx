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
    <Card className="glass hover-lift h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Video className="w-4 h-4 text-primary-foreground" />
          </div>
          Content Format Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {formatSuggestions.map((format, index) => {
          const IconComponent = format.icon;
          return (
            <div key={index} className="p-3 rounded-lg bg-card-accent">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <IconComponent className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{format.type}</span>
                </div>
                {format.recommended && (
                  <Badge variant="secondary" className="text-xs">
                    Recommended
                  </Badge>
                )}
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Predicted Reach</span>
                  <span className="font-medium">{format.reach}%</span>
                </div>
                <Progress value={format.reach} className="h-1" />
                <p className="text-xs text-muted-foreground">
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