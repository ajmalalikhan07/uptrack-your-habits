import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Target, Users, Zap, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">About Uptrack</h1>
            <p className="text-xl text-muted-foreground">
              Empowering individuals to take small, consistent steps toward success
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Uptrack was born from a simple belief: achieving big dreams starts with tracking small wins. 
              We understand that students and professionals face countless tasks, deadlines, and aspirations 
              that can feel overwhelming.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              That's why we created Uptrack—a clean, intuitive platform that transforms goal-setting from 
              a chore into an engaging daily practice. By visualizing your progress and celebrating every 
              milestone, we help you build the momentum needed to achieve lasting success.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 gradient-card shadow-soft">
              <Target className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Clear Focus</h3>
              <p className="text-muted-foreground">
                Break down ambitious goals into manageable tasks and track your progress with clarity.
              </p>
            </Card>

            <Card className="p-6 gradient-card shadow-soft">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Stay Motivated</h3>
              <p className="text-muted-foreground">
                Daily insights and visual progress tracking keep you inspired and accountable.
              </p>
            </Card>

            <Card className="p-6 gradient-card shadow-soft">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Built for You</h3>
              <p className="text-muted-foreground">
                Designed specifically for students and professionals who value their time.
              </p>
            </Card>

            <Card className="p-6 gradient-card shadow-soft">
              <Heart className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Simple & Clean</h3>
              <p className="text-muted-foreground">
                No clutter, no complexity—just a beautiful interface that gets out of your way.
              </p>
            </Card>
          </section>

          <section className="gradient-card rounded-lg p-8 shadow-soft">
            <h2 className="text-3xl font-bold mb-6">Why Uptrack?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">→</span>
                <span>Track multiple goals across different life categories</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">→</span>
                <span>Visualize your progress with intuitive charts and percentages</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">→</span>
                <span>Get daily motivation with inspirational insights</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">→</span>
                <span>Works entirely in your browser—no signup required to start</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">→</span>
                <span>Responsive design that works perfectly on all devices</span>
              </p>
            </div>
          </section>

          <section className="text-center gradient-hero rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join us in making goal achievement a daily habit, not just a yearly resolution.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
