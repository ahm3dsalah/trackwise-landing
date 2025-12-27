import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, PiggyBank, CreditCard } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
            <TrendingUp className="w-4 h-4" />
            Smart budgeting for modern life
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="gradient-hero border-0 text-base px-8 py-6 shadow-glow">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Free to get started
          </p>
        </div>
        

      </div>
    </section>
  );
};

export default Hero;