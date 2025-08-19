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

export function DashboardGrid() {
  return (
    <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Row 1: Performance Overview */}
      <ViralPotentialCard />
      <AudienceOverviewCard />
      
      {/* Row 2: Engagement Analysis */}
      <EngagementBreakdownCard />
      <StrengthsWeaknessesCard />
      
      {/* Row 3: Market Intelligence */}
      <TrendRadarCard />
      <CompetitorInsightsCard />
      
      {/* Row 4: Optimization Tools */}
      <PostingTimeCard />
      <RiskWarningsCard />
      
      {/* Row 5: Content Strategy */}
      <ContentHealthCard />
      <ContentFormatCard />
    </div>
  );
}