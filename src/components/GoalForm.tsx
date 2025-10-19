import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Goal } from "@/pages/Dashboard";

interface GoalFormProps {
  onSubmit: (goal: Omit<Goal, "id" | "lastUpdated" | "completedAt">) => void;
  initialData?: Goal;
  onCancel: () => void;
}

const GoalForm = ({ onSubmit, initialData, onCancel }: GoalFormProps) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [category, setCategory] = useState(initialData?.category || "");
  const [progress, setProgress] = useState(initialData?.progress || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && category) {
      onSubmit({ title, category, progress });
      setTitle("");
      setCategory("");
      setProgress(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-sm md:text-base">Goal Title</Label>
        <Input
          id="title"
          placeholder="e.g., Complete React Course"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="text-sm md:text-base"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category" className="text-sm md:text-base">Category</Label>
        <Select value={category} onValueChange={setCategory} required>
          <SelectTrigger className="text-sm md:text-base">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="personal">Personal</SelectItem>
            <SelectItem value="work">Work</SelectItem>
            <SelectItem value="health">Health</SelectItem>
            <SelectItem value="learning">Learning</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label className="text-sm md:text-base">Progress</Label>
          <span className="text-sm font-medium">{progress}%</span>
        </div>
        <Slider
          value={[progress]}
          onValueChange={(value) => setProgress(value[0])}
          max={100}
          step={5}
          className="py-4 touch-manipulation"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button type="submit" className="gradient-primary flex-1 text-sm md:text-base">
          {initialData ? "Update Goal" : "Create Goal"}
        </Button>
        <Button type="button" variant="outline" onClick={onCancel} className="text-sm md:text-base">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default GoalForm;
