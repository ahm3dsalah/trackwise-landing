const steps = [
  {
    number: "01",
    title: "Connect Your Accounts",
    description: "Add your bank accounts and log balances to get a complete view of your finances in one place."
  },
  {
    number: "02",
    title: "Set Your Budget",
    description: "Define categories for income, expenses, bills, savings, and investments with flexible periods.",
  },
  {
    number: "03",
    title: "Track & Optimize",
    description: "Monitor your cash flow, analyze spending patterns, and make smarter financial decisions.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Get started in minutes
          </h2>
          <p className="text-muted-foreground text-lg">
            Three simple steps to take control of your financial life.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex items-start gap-8 mb-12 last:mb-0"
            >
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center shadow-glow">
                <span className="text-2xl font-display font-bold text-primary-foreground">
                  {step.number}
                </span>
              </div>
              
              <div className="flex-1 pt-3">
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="w-px h-12 bg-border ml-10 mt-6" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;