import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Calendar, Award } from "lucide-react";
import Navbar from "@/components/Navbar";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Track Your Goals,
              <span className="block bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Achieve Your Dreams
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Uptrack helps students and professionals stay organized, track goals, 
              and visualize daily progress through a clean and engaging interface.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Link to="/dashboard">
                <Button size="lg" className="gradient-primary text-lg px-8">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need to Succeed
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 gradient-card shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Goal Tracking</h3>
              <p className="text-muted-foreground">
                Set, manage, and track your personal and professional goals in one place.
              </p>
            </Card>
            
            <Card className="p-6 gradient-card shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Progress Analytics</h3>
              <p className="text-muted-foreground">
                Visualize your progress with intuitive charts and statistics.
              </p>
            </Card>
            
            <Card className="p-6 gradient-card shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1">
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Daily Insights</h3>
              <p className="text-muted-foreground">
                Get motivated with daily productivity stats and inspirational quotes.
              </p>
            </Card>
            
            <Card className="p-6 gradient-card shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Achievement System</h3>
              <p className="text-muted-foreground">
                Celebrate your wins with our milestone tracking system.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold">Ready to Transform Your Life?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of users taking small, consistent steps toward success.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="gradient-primary text-lg px-8">
                Start Tracking Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Uptrack. Built for resume showcase and personal learning.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
