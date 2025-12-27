import { Building, TrendingUp, MoreVertical, Plus } from "lucide-react";

const AppPreview = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            See Trackwise in action
          </h2>
          <p className="text-muted-foreground text-lg">
            Get a glimpse of how our app helps you manage your finances effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Bank Dashboard Preview */}
          <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden animate-fade-up">
            <div className="bg-muted/50 px-6 py-4 border-b border-border">
              <h3 className="font-display font-semibold text-foreground">Bank Dashboard</h3>
              <p className="text-sm text-muted-foreground">Track all your accounts in one place</p>
            </div>
            
            <div className="p-6 space-y-4">
              {/* Total Balance Card */}
              <div className="bg-primary rounded-xl p-4 text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-80">Total Balance</p>
                    <p className="text-xs opacity-60">3 accounts</p>
                    <p className="text-2xl font-bold mt-1">€13,000.00</p>
                  </div>
                  <div className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    +35.4%
                  </div>
                </div>
              </div>

              {/* Bank Account Cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "N26", balance: "€500.00", change: "-50.0%", negative: true },
                  { name: "Sparkasse", balance: "€5,000.00", change: "+212.5%", negative: false },
                  { name: "CommerzBank", balance: "€7,500.00", change: "+7.1%", negative: false },
                ].map((account) => (
                  <div key={account.name} className="bg-muted/30 rounded-lg p-3 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-muted flex items-center justify-center">
                          <Building className="w-3 h-3 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-foreground">{account.name}</p>
                          <p className="text-[10px] text-muted-foreground">Bank Account</p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Plus className="w-3 h-3 text-muted-foreground" />
                        <MoreVertical className="w-3 h-3 text-muted-foreground" />
                      </div>
                    </div>
                    <p className="text-sm font-bold text-foreground">{account.balance}</p>
                    <p className={`text-[10px] ${account.negative ? 'text-red-500' : 'text-green-500'}`}>
                      {account.change} from last reading
                    </p>
                    {/* Mini chart placeholder */}
                    <div className="mt-2 h-8 bg-gradient-to-r from-primary/5 to-primary/20 rounded flex items-end">
                      <svg className="w-full h-6" viewBox="0 0 100 24">
                        <path
                          d="M0,20 Q20,15 35,18 T60,12 T100,8"
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="1.5"
                          className="opacity-60"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Budget Planner Preview */}
          <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-muted/50 px-6 py-4 border-b border-border">
              <h3 className="font-display font-semibold text-foreground">Budget Planner</h3>
              <p className="text-sm text-muted-foreground">Plan and track your monthly budget</p>
            </div>
            
            <div className="p-6 space-y-4">
              {/* Month Header */}
              <div className="text-center">
                <p className="text-lg font-display font-semibold text-foreground">November 2025</p>
              </div>

              {/* Budget Categories */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Income", amount: "$5,090.00" },
                  { label: "Expenses", amount: "$400.00" },
                  { label: "Bills", amount: "$1,200.00" },
                  { label: "Savings", amount: "$500.00" },
                  { label: "Investing", amount: "$1,500.00" },
                  { label: "Debt", amount: "$1,600.00" },
                ].map((cat) => (
                  <div key={cat.label} className="bg-primary/10 rounded-lg p-3 text-center">
                    <p className="text-[10px] uppercase text-muted-foreground font-medium">{cat.label}</p>
                    <p className="text-sm font-bold text-primary">{cat.amount}</p>
                  </div>
                ))}
              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-2 gap-3">
                {/* Cash Flow Chart */}
                <div className="bg-muted/30 rounded-lg p-3 border border-border">
                  <p className="text-xs font-medium text-foreground mb-2 text-center">Cash Flow</p>
                  <div className="space-y-1">
                    {["Income", "Expenses", "Bills", "Savings"].map((item, i) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="text-[8px] text-muted-foreground w-12 truncate">{item}</span>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary/60 rounded-full"
                            style={{ width: `${[90, 30, 50, 25][i]}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Allocation Summary */}
                <div className="bg-muted/30 rounded-lg p-3 border border-border">
                  <p className="text-xs font-medium text-foreground mb-2 text-center">Allocation</p>
                  <div className="flex items-center justify-center">
                    <div className="relative w-16 h-16">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="12" fill="none" stroke="hsl(var(--muted))" strokeWidth="4" />
                        <circle cx="16" cy="16" r="12" fill="none" stroke="hsl(var(--primary))" strokeWidth="4" strokeDasharray="30 75" />
                        <circle cx="16" cy="16" r="12" fill="none" stroke="hsl(var(--primary)/0.7)" strokeWidth="4" strokeDasharray="20 75" strokeDashoffset="-30" />
                        <circle cx="16" cy="16" r="12" fill="none" stroke="hsl(var(--primary)/0.5)" strokeWidth="4" strokeDasharray="15 75" strokeDashoffset="-50" />
                      </svg>
                    </div>
                    <div className="ml-3 space-y-1">
                      {["Expenses", "Bills", "Savings"].map((item) => (
                        <div key={item} className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-primary/60" />
                          <span className="text-[8px] text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Amount Left */}
              <div className="text-center bg-muted/30 rounded-lg p-3 border border-border">
                <p className="text-xs text-muted-foreground">Amount Left to Spend</p>
                <p className="text-xl font-bold text-foreground">$-10.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
