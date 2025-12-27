import { 
  Wallet, 
  PieChart, 
  Building2
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Budget Planning",
    description: "Categorize income, expenses, bills, savings, and investments with smart tracking.",
  },
  {
    icon: Building2,
    title: "Bank Account Tracking",
    description: "Connect and monitor all your bank accounts in one unified dashboard.",
  },
  {
    icon: PieChart,
    title: "Visual Analytics",
    description: "Beautiful charts showing cash flow, allocation summaries, and spending patterns.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Everything you need to manage your money
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful features designed to give you complete control over your finances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;