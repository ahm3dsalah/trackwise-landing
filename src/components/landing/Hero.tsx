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
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Take control of your{" "}
            <span className="text-gradient">finances</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Organize your budget, track all your bank accounts, and visualize your cash flow in one beautiful dashboard. Start making smarter financial decisions today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="gradient-hero border-0 text-base px-8 py-6 shadow-glow">
              Register Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Free to get started
          </p>
        </div>
        
        {/* Floating stats cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl p-6 shadow-card animate-fade-up border border-border" style={{ animationDelay: "0.5s" }}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <PiggyBank className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-display font-bold text-foreground">$2.4M+</p>
            <p className="text-sm text-muted-foreground">Savings tracked</p>
          </div>
          
          <div className="bg-card rounded-2xl p-6 shadow-card animate-fade-up border border-border" style={{ animationDelay: "0.6s" }}>
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6 text-accent" />
            </div>
            <p className="text-3xl font-display font-bold text-foreground">15K+</p>
            <p className="text-sm text-muted-foreground">Active users</p>
          </div>
          
          <div className="bg-card rounded-2xl p-6 shadow-card animate-fade-up border border-border" style={{ animationDelay: "0.7s" }}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <p className="text-3xl font-display font-bold text-foreground">98%</p>
            <p className="text-sm text-muted-foreground">User satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;