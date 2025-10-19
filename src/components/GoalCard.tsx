import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Edit2, Trash2, CheckCircle2, Circle } from "lucide-react";
import { Goal } from "@/pages/Dashboard";

interface GoalCardProps {
  goal: Goal;
  onEdit: () => void;
  onDelete: () => void;
  onToggleComplete: () => void;
}

const GoalCard = ({ goal, onEdit, onDelete, onToggleComplete }: GoalCardProps) => {
  const isCompleted = goal.progress === 100;
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      personal: "bg-blue-500",
      work: "bg-purple-500",
      health: "bg-green-500",
      learning: "bg-orange-500",
      finance: "bg-yellow-500",
    };
    return colors[category.toLowerCase()] || "bg-primary";
  };

  return (
    <Card className="p-4 md:p-6 gradient-card shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1 touch-manipulation">
      <div className="flex justify-between items-start mb-3 md:mb-4">
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex items-center gap-2 mb-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleComplete}
              className="h-6 w-6 md:h-7 md:w-7 p-0 hover:bg-transparent flex-shrink-0"
            >
              {isCompleted ? (
                <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              ) : (
                <Circle className="h-5 w-5 md:h-6 md:w-6 text-muted-foreground" />
              )}
            </Button>
            <span className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full flex-shrink-0 ${getCategoryColor(goal.category)}`}></span>
            <span className="text-xs uppercase tracking-wide text-muted-foreground font-medium truncate">
              {goal.category}
            </span>
          </div>
          <h3 className={`text-lg md:text-xl font-semibold mb-1 break-words transition-all ${
            isCompleted ? 'line-through opacity-60' : ''
          }`}>
            {goal.title}
          </h3>
        </div>
        <div className="flex gap-0.5 md:gap-1 flex-shrink-0">
          <Button variant="ghost" size="icon" onClick={onEdit} className="h-8 w-8 md:h-9 md:w-9 touch-manipulation">
            <Edit2 className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onDelete} className="h-8 w-8 md:h-9 md:w-9 text-destructive hover:text-destructive touch-manipulation">
            <Trash2 className="h-3.5 w-3.5 md:h-4 md:w-4" />
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs md:text-sm">
          <span className="text-muted-foreground">Progress</span>
          <span className="font-semibold text-primary">{goal.progress}%</span>
        </div>
        <Progress value={goal.progress} className="h-2" />
      </div>
    </Card>
  );
};

export default GoalCard;
