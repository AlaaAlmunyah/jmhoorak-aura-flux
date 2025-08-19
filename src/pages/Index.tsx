import { HistorySidebar } from "@/components/HistorySidebar";
import { CreatorPersonaSidebar } from "@/components/CreatorPersonaSidebar";
import { DashboardGrid } from "@/components/DashboardGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex w-full">
      {/* Left Sidebar - History (15% width) */}
      <div className="w-[15%] min-w-[200px]">
        <HistorySidebar />
      </div>
      
      {/* Main Dashboard (65% width) */}
      <main className="w-[65%] p-8 overflow-y-auto">
        <div className="max-w-none mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-glow">
              JMHOORAK Creator AI Insights
            </h1>
            <p className="text-muted-foreground mt-2">
              Advanced analytics for content creators powered by artificial intelligence
            </p>
          </header>
          
          <DashboardGrid />
        </div>
      </main>
      
      {/* Right Sidebar - Creator Persona (18% width) */}
      <div className="w-[18%] min-w-[240px]">
        <CreatorPersonaSidebar />
      </div>
    </div>
  );
};

export default Index;