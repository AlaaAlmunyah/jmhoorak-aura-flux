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
    <Card className="glass hover-lift transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 p-4">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-semibold flex items-center gap-2">
          <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
            <BarChart3 className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <span className="text-card-foreground">Engagement Breakdown</span>
            <p className="text-xs text-muted-foreground font-normal">Performance Metrics</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={engagementData}>
              <XAxis 
                dataKey="metric" 
                fontSize={10}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="value" 
                radius={[4, 4, 0, 0]}
                fill="#3b82f6"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="w-full h-px bg-border/50"></div>
        
        <div className="grid grid-cols-2 gap-3">
          {engagementData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="flex-1">
                <p className="text-xs font-medium">{item.value.toLocaleString()}</p>
                <p className="text-[10px] text-muted-foreground">{item.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}