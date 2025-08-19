import { ViralPotentialCard } from "@/components/dashboard/ViralPotentialCard";
import { AudienceOverviewCard } from "@/components/dashboard/AudienceOverviewCard";
import { EngagementBreakdownCard } from "@/components/dashboard/EngagementBreakdownCard";
import { StrengthsWeaknessesCard } from "@/components/dashboard/StrengthsWeaknessesCard";
import { TrendRadarCard } from "@/components/dashboard/TrendRadarCard";
import { ContentFormatCard } from "@/components/dashboard/ContentFormatCard";
import { CompetitorInsightsCard } from "@/components/dashboard/CompetitorInsightsCard";
import { PostingTimeCard } from "@/components/dashboard/PostingTimeCard";
import { RiskWarningsCard } from "@/components/dashboard/RiskWarningsCard";
import { ContentHealthCard } from "@/components/dashboard/ContentHealthCard";

export function DashboardGrid() {
  return (
    <div className="grid grid-cols-5 gap-6 auto-rows-fr">
      {/* First Row */}
      <ViralPotentialCard />
      <AudienceOverviewCard />
      <EngagementBreakdownCard />
      <StrengthsWeaknessesCard />
      <TrendRadarCard />
      
      {/* Second Row */}
      <ContentFormatCard />
      <CompetitorInsightsCard />
      <PostingTimeCard />
      <RiskWarningsCard />
      <ContentHealthCard />
    </div>
  );
}