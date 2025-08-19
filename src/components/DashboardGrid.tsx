import { ViralPotentialCard } from "@/components/dashboard/ViralPotentialCard";
import { AudienceOverviewCard } from "@/components/dashboard/AudienceOverviewCard";
import { EngagementBreakdownCard } from "@/components/dashboard/EngagementBreakdownCard";
import { StrengthsWeaknessesCard } from "@/components/dashboard/StrengthsWeaknessesCard";
import { TrendRadarCard } from "@/components/dashboard/TrendRadarCard";
import { CompetitorInsightsCard } from "@/components/dashboard/CompetitorInsightsCard";
import { PostingTimeCard } from "@/components/dashboard/PostingTimeCard";
import { RiskWarningsCard } from "@/components/dashboard/RiskWarningsCard";
import { ContentHealthCard } from "@/components/dashboard/ContentHealthCard";

export function DashboardGrid() {
  return (
    <div className="grid grid-cols-3 gap-8 auto-rows-fr">
      {/* Row 1: Performance Metrics */}
      <ViralPotentialCard />
      <AudienceOverviewCard />
      <EngagementBreakdownCard />
      
      {/* Row 2: Analysis & Insights */}
      <StrengthsWeaknessesCard />
      <TrendRadarCard />
      <CompetitorInsightsCard />
      
      {/* Row 3: Optimization & Health */}
      <PostingTimeCard />
      <RiskWarningsCard />
      <ContentHealthCard />
    </div>
  );
}