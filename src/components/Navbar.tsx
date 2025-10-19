import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1.5 md:gap-2 font-bold text-lg md:text-xl">
            <Target className="h-5 w-5 md:h-6 md:w-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Uptrack
            </span>
          </Link>
          
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <Link 
              to="/" 
              className={`text-xs sm:text-sm transition-colors hover:text-primary ${
                isActive("/") ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/dashboard" 
              className={`text-xs sm:text-sm transition-colors hover:text-primary ${
                isActive("/dashboard") ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/about" 
              className={`text-xs sm:text-sm transition-colors hover:text-primary hidden sm:inline ${
                isActive("/about") ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-xs sm:text-sm transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary font-medium" : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
            <Link to="/dashboard" className="hidden md:inline">
              <Button size="sm" className="gradient-primary">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
