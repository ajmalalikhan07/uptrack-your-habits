import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import GoalCard from "@/components/GoalCard";
import GoalForm from "@/components/GoalForm";
import ProgressChart from "@/components/ProgressChart";
import DailyInsights from "@/components/DailyInsights";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

export interface Goal {
  id: string;
  title: string;
  category: string;
  progress: number;
  completedAt?: string;
  lastUpdated: string;
}

const Dashboard = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const storedGoals = localStorage.getItem("uptrack-goals");
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
    updateStreak();
  }, []);

  const updateStreak = () => {
    const today = new Date().toDateString();
    const streakData = localStorage.getItem("uptrack-streak");
    
    if (streakData) {
      const { count, lastActive } = JSON.parse(streakData);
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      
      if (lastActive === today) {
        setStreak(count);
      } else if (lastActive === yesterday) {
        setStreak(count);
      } else {
        setStreak(0);
        localStorage.setItem("uptrack-streak", JSON.stringify({ count: 0, lastActive: today }));
      }
    }
  };

  const incrementStreak = () => {
    const today = new Date().toDateString();
    const streakData = localStorage.getItem("uptrack-streak");
    
    let newCount = 1;
    if (streakData) {
      const { count, lastActive } = JSON.parse(streakData);
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      
      if (lastActive === yesterday) {
        newCount = count + 1;
      } else if (lastActive === today) {
        newCount = count;
      }
    }
    
    localStorage.setItem("uptrack-streak", JSON.stringify({ count: newCount, lastActive: today }));
    setStreak(newCount);
    
    if (newCount % 7 === 0) {
      toast({
        title: "🎉 Streak Milestone!",
        description: `Amazing! You've maintained a ${newCount}-day streak!`,
      });
    }
  };

  const saveGoals = (newGoals: Goal[]) => {
    setGoals(newGoals);
    localStorage.setItem("uptrack-goals", JSON.stringify(newGoals));
  };

  const handleAddGoal = (goal: Omit<Goal, "id" | "lastUpdated">) => {
    const newGoal = { ...goal, id: Date.now().toString(), lastUpdated: new Date().toISOString() };
    saveGoals([...goals, newGoal]);
    setIsDialogOpen(false);
    toast({
      title: "Goal Created!",
      description: `"${goal.title}" has been added to your goals.`,
    });
  };

  const handleEditGoal = (goal: Omit<Goal, "id" | "lastUpdated">) => {
    if (editingGoal) {
      const wasCompleted = editingGoal.progress === 100;
      const isNowCompleted = goal.progress === 100;
      
      const updatedGoal = { 
        ...goal, 
        id: editingGoal.id, 
        lastUpdated: new Date().toISOString(),
        completedAt: isNowCompleted ? new Date().toISOString() : editingGoal.completedAt
      };
      
      const updatedGoals = goals.map(g => 
        g.id === editingGoal.id ? updatedGoal : g
      );
      saveGoals(updatedGoals);
      setEditingGoal(null);
      setIsDialogOpen(false);
      
      if (!wasCompleted && isNowCompleted) {
        celebrateCompletion();
        incrementStreak();
      }
    }
  };

  const celebrateCompletion = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    toast({
      title: "🎉 Goal Completed!",
      description: "Congratulations on your achievement!",
    });
  };

  const handleToggleComplete = (id: string) => {
    const goal = goals.find(g => g.id === id);
    if (!goal) return;
    
    const wasCompleted = goal.progress === 100;
    const newProgress = wasCompleted ? 0 : 100;
    
    const updatedGoals = goals.map(g => 
      g.id === id ? { 
        ...g, 
        progress: newProgress,
        completedAt: newProgress === 100 ? new Date().toISOString() : undefined,
        lastUpdated: new Date().toISOString()
      } : g
    );
    
    saveGoals(updatedGoals);
    
    if (!wasCompleted && newProgress === 100) {
      celebrateCompletion();
      incrementStreak();
    }
  };

  const handleDeleteGoal = (id: string) => {
    saveGoals(goals.filter(g => g.id !== id));
  };

  const openEditDialog = (goal: Goal) => {
    setEditingGoal(goal);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setEditingGoal(null);
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2">My Dashboard</h1>
            <p className="text-sm md:text-base text-muted-foreground">Track your goals and celebrate your progress</p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-primary w-full sm:w-auto" onClick={() => setEditingGoal(null)}>
                <Plus className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">New Goal</span>
                <span className="sm:hidden">Add Goal</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingGoal ? "Edit Goal" : "Create New Goal"}</DialogTitle>
              </DialogHeader>
              <GoalForm 
                onSubmit={editingGoal ? handleEditGoal : handleAddGoal}
                initialData={editingGoal || undefined}
                onCancel={closeDialog}
              />
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="lg:col-span-2">
            <DailyInsights 
              totalGoals={goals.length} 
              completedGoals={goals.filter(g => g.progress === 100).length}
              streak={streak}
            />
          </div>
          <div>
            <ProgressChart goals={goals} />
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 md:mb-6">Your Goals</h2>
          {goals.length === 0 ? (
            <div className="text-center py-8 md:py-12 gradient-card rounded-lg shadow-soft px-4">
              <p className="text-muted-foreground text-base md:text-lg mb-4">No goals yet. Start by creating your first goal!</p>
              <Button className="gradient-primary w-full sm:w-auto" onClick={() => setIsDialogOpen(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Create Your First Goal
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {goals.map(goal => (
                <GoalCard
                  key={goal.id}
                  goal={goal}
                  onEdit={() => openEditDialog(goal)}
                  onDelete={() => handleDeleteGoal(goal.id)}
                  onToggleComplete={() => handleToggleComplete(goal.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
