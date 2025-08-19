import { BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const engagementData = [
  { metric: "Views", value: 12500, color: "#8b5cf6" },
  { metric: "Likes", value: 890, color: "#06b6d4" },
  { metric: "Comments", value: 156, color: "#10b981" },
  { metric: "Shares", value: 89, color: "#f59e0b" }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-3 rounded-lg border border-border shadow-lg">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-sm text-primary">
          {payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export function EngagementBreakdownCard() {
  return (
    <Card className="glass hover-lift h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 p-6">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold flex items-center gap-3">
          <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
            <BarChart3 className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <span className="text-card-foreground">Engagement Breakdown</span>
            <p className="text-xs text-muted-foreground font-normal mt-1">Performance Metrics</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={engagementData}>
              <XAxis 
                dataKey="metric" 
                fontSize={12}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="value" 
                radius={[6, 6, 0, 0]}
                fill="#3b82f6"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="w-full h-px bg-border/50"></div>
        
        <div className="grid grid-cols-2 gap-4">
          {engagementData.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="flex-1">
                <p className="text-sm font-medium">{item.value.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">{item.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}