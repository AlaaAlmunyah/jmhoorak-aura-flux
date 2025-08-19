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

      {/* Dashboard Cards - Masonry Layout */}
      <div className="columns-2 gap-8 max-w-6xl mx-auto space-y-0">
        <div className="break-inside-avoid mb-8">
          <ViralPotentialCard />
        </div>
        <div className="break-inside-avoid mb-8">
          <AudienceOverviewCard />
        </div>
        <div className="break-inside-avoid mb-8">
          <EngagementBreakdownCard />
        </div>
        <div className="break-inside-avoid mb-8">
          <StrengthsWeaknessesCard />
        </div>
        <div className="break-inside-avoid mb-8">
          <TrendRadarCard />
        </div>
        <div className="break-inside-avoid mb-8">
          <CompetitorInsightsCard />
        </div>
        <div className="break-inside-avoid mb-8">
          <PostingTimeCard />
        </div>
        <div className="break-inside-avoid mb-8">
          <RiskWarningsCard />
        </div>
        <div className="break-inside-avoid mb-8">
          <ContentHealthCard />
        </div>
        <div className="break-inside-avoid mb-8">
          <ContentFormatCard />
        </div>
      </div>
    </div>
  );
}