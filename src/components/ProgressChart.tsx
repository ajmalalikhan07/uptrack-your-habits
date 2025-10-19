import { Card } from "@/components/ui/card";
import { Goal } from "@/pages/Dashboard";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface ProgressChartProps {
  goals: Goal[];
}

const ProgressChart = ({ goals }: ProgressChartProps) => {
  const completedGoals = goals.filter(g => g.progress === 100).length;
  const inProgressGoals = goals.filter(g => g.progress > 0 && g.progress < 100).length;
  const notStartedGoals = goals.filter(g => g.progress === 0).length;

  const data = [
    { name: "Completed", value: completedGoals, color: "hsl(217, 91%, 60%)" },
    { name: "In Progress", value: inProgressGoals, color: "hsl(220, 90%, 70%)" },
    { name: "Not Started", value: notStartedGoals, color: "hsl(210, 40%, 96%)" },
  ].filter(item => item.value > 0);

  if (goals.length === 0) {
    return (
      <Card className="p-4 md:p-6 gradient-card shadow-soft h-full">
        <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Progress Overview</h3>
        <div className="flex items-center justify-center h-32 md:h-48 text-sm md:text-base text-muted-foreground">
          No goals to display
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4 md:p-6 gradient-card shadow-soft h-full">
      <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Progress Overview</h3>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend 
            wrapperStyle={{ fontSize: '12px' }}
            iconSize={10}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ProgressChart;
