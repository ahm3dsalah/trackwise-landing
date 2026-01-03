import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-hero flex items-center justify-center">
            <Wallet className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-display font-bold text-foreground">Trackwise</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/#features"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link 
            to="/#app-preview"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Preview
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://track.trackwise.me/login" target="_self">
            <Button variant="ghost" className="text-sm">
              Login
            </Button>
          </a>
          <a href="https://track.trackwise.me/register" target="_self">
            <Button className="text-sm gradient-hero border-0">
              Register Now
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;