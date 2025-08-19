import { ViralPotentialCard } from "@/components/dashboard/ViralPotentialCard";
import { AudienceOverviewCard } from "@/components/dashboard/AudienceOverviewCard";
import { EngagementBreakdownCard } from "@/components/dashboard/EngagementBreakdownCard";
import { StrengthsWeaknessesCard } from "@/components/dashboard/StrengthsWeaknessesCard";
import { TrendRadarCard } from "@/components/dashboard/TrendRadarCard";
import { CompetitorInsightsCard } from "@/components/dashboard/CompetitorInsightsCard";
import { PostingTimeCard } from "@/components/dashboard/PostingTimeCard";
import { RiskWarningsCard } from "@/components/dashboard/RiskWarningsCard";
import { ContentHealthCard } from "@/components/dashboard/ContentHealthCard";
import { ContentFormatCard } from "@/components/dashboard/ContentFormatCard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

export function DashboardGrid() {
  return (
    <div className="space-y-8">
      {/* Idea Input Section */}
      <div className="w-full">
        <div className="relative">
          <Textarea
            placeholder="Enter your content idea or topic to get AI-powered insights and recommendations..."
            className="w-full h-20 text-base bg-card/50 border-border/50 rounded-xl resize-none pr-32 focus:bg-card/80 transition-colors"
          />
          <Button 
            className="absolute right-3 top-3 bg-gradient-primary hover:opacity-90 transition-opacity"
            size="sm"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Analyze Idea
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Get instant analysis of viral potential, audience fit, and optimization suggestions
        </p>
      </div>

      {/* Dashboard Cards - 2 Column Grid */}
      <div className="grid grid-cols-2 gap-5 w-full">
        <ViralPotentialCard />
        <AudienceOverviewCard />
        
        <EngagementBreakdownCard />
        <StrengthsWeaknessesCard />
        
        <TrendRadarCard />
        <CompetitorInsightsCard />
        
        <PostingTimeCard />
        <RiskWarningsCard />
        
        <ContentHealthCard />
        <ContentFormatCard />
      </div>
    </div>
  );
}