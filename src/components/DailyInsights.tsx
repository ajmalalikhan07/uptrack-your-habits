import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Award, Flame } from "lucide-react";
import { useEffect, useState } from "react";

interface DailyInsightsProps {
  totalGoals: number;
  completedGoals: number;
  streak: number;
}

const motivationalQuotes = [
  "Small progress is still progress. Keep going!",
  "The secret of getting ahead is getting started.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Don't watch the clock; do what it does. Keep going.",
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
  "Your limitation—it's only your imagination.",
  "Great things never come from comfort zones.",
];

const DailyInsights = ({ totalGoals, completedGoals, streak }: DailyInsightsProps) => {
  const [quote, setQuote] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    // Get quote based on day of year for daily rotation
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
    const index = dayOfYear % motivationalQuotes.length;
    setQuoteIndex(index);
    setQuote(motivationalQuotes[index]);
  }, []);

  const completionRate = totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;

  return (
    <Card className="p-4 md:p-6 gradient-card shadow-soft">
      <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Daily Insights</h3>
      
      <div className="space-y-3 md:space-y-4">
        <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-primary/5">
          <div className="p-1.5 md:p-2 rounded-full bg-primary/10 flex-shrink-0">
            <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          </div>
          <div>
            <p className="text-xs md:text-sm text-muted-foreground">Completion Rate</p>
            <p className="text-xl md:text-2xl font-bold text-primary">{completionRate}%</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-3">
          <div className="flex flex-col items-center gap-1.5 md:gap-2 p-2.5 md:p-3 rounded-lg bg-secondary">
            <Target className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Total</p>
              <p className="text-base md:text-lg font-semibold">{totalGoals}</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-1.5 md:gap-2 p-2.5 md:p-3 rounded-lg bg-secondary">
            <Award className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Done</p>
              <p className="text-base md:text-lg font-semibold">{completedGoals}</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1.5 md:gap-2 p-2.5 md:p-3 rounded-lg bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
            <Flame className="h-4 w-4 md:h-5 md:w-5 text-orange-500 flex-shrink-0 animate-pulse" />
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Streak</p>
              <p className="text-base md:text-lg font-semibold text-orange-500">{streak}</p>
            </div>
          </div>
        </div>

        <div className="p-3 md:p-4 rounded-lg border border-primary/20 bg-primary/5">
          <p className="text-xs md:text-sm font-medium text-primary mb-1">💡 Daily Motivation</p>
          <p className="text-xs md:text-sm italic text-foreground leading-relaxed">{quote}</p>
        </div>
      </div>
    </Card>
  );
};

export default DailyInsights;
