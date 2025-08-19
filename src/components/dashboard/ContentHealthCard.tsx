import { Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const contentHealthData = [
  { name: "Educational", value: 45, color: "#10b981" },
  { name: "Entertainment", value: 30, color: "#8b5cf6" },
  { name: "Engagement", value: 25, color: "#06b6d4" }
];

const healthInsights = [
  {
    category: "Education",
    percentage: 45,
    status: "balanced",
    note: "Good mix of tutorials and how-to content"
  },
  {
    category: "Entertainment",
    percentage: 30,
    status: "low",
    note: "Consider adding more engaging content"
  },
  {
    category: "Engagement",
    percentage: 25,
    status: "optimal",
    note: "Strong community interaction"
  }
];

export function ContentHealthCard() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal": return "text-green-400";
      case "balanced": return "text-blue-400";
      case "low": return "text-yellow-400";
      default: return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "optimal": return "✅";
      case "balanced": return "⚖️";
      case "low": return "⚠️";
      default: return "ℹ️";
    }
  };

  return (
    <Card className="glass hover-lift h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Lightbulb className="w-4 h-4 text-primary-foreground" />
          </div>
          Content Health Meter
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Donut Chart */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={contentHealthData}
                  cx="50%"
                  cy="50%"
                  innerRadius={25}
                  outerRadius={35}
                  dataKey="value"
                >
                  {contentHealthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="flex-1 space-y-1">
            {contentHealthData.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-xs">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-muted-foreground">{item.name}</span>
                <span className="font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Health Insights */}
        <div className="space-y-2">
          <h4 className="text-xs font-medium text-muted-foreground mb-2">
            Content Balance Analysis
          </h4>
          {healthInsights.map((insight, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm">{getStatusIcon(insight.status)}</span>
                  <span className="text-xs font-medium">{insight.category}</span>
                </div>
                <span className={`text-xs font-medium ${getStatusColor(insight.status)}`}>
                  {insight.percentage}%
                </span>
              </div>
              <p className="text-xs text-muted-foreground pl-6">
                {insight.note}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}