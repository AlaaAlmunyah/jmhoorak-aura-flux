import { HistorySidebar } from "@/components/HistorySidebar";
import { CreatorPersonaSidebar } from "@/components/CreatorPersonaSidebar";
import { DashboardGrid } from "@/components/DashboardGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex w-full">
      {/* Left Sidebar - History */}
      <HistorySidebar />
      
      {/* Main Dashboard */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
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
      
      {/* Right Sidebar - Creator Persona */}
      <CreatorPersonaSidebar />
    </div>
  );
};

export default Index;