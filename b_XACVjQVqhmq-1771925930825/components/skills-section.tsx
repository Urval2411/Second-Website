import { BarChart3, Code, Database, LineChart, Lightbulb, TrendingUp } from "lucide-react"

const skillCategories = [
  {
    icon: BarChart3,
    title: "Data & Analytics",
    color: "bg-primary/10 text-primary",
    skills: [
      "Predictive Analytics",
      "Lasso Regression",
      "Random Forest",
      "XGBoost",
      "Neural Networks",
      "SQL",
      "PowerBI",
    ],
  },
  {
    icon: Code,
    title: "Programming & Tools",
    color: "bg-accent/10 text-accent",
    skills: ["Python", "MS Office", "SAP", "Excel Modeling"],
  },
  {
    icon: TrendingUp,
    title: "Finance",
    color: "bg-primary/10 text-primary",
    skills: ["Bloomberg", "Capital IQ", "CFA Level 1", "Financial Modeling", "Budgeting"],
  },
  {
    icon: Database,
    title: "Market Intelligence",
    color: "bg-accent/10 text-accent",
    skills: ["Pitchbook", "CrunchBase", "Thomson Reuters"],
  },
  {
    icon: Lightbulb,
    title: "Product & CRM",
    color: "bg-primary/10 text-primary",
    skills: ["Salesforce", "HubSpot", "Linear", "Miro", "Asana"],
  },
  {
    icon: LineChart,
    title: "Strategy & Consulting",
    color: "bg-accent/10 text-accent",
    skills: [
      "Organization Transformation",
      "Due Diligence",
      "GTM Strategy",
      "P&L Management",
      "M&A",
      "Risk Management",
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-28">
      {/* Soft colored background */}
      <div className="absolute inset-0 bg-accent/[0.03]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-bold text-accent">04</span>
          <h2 className="text-3xl font-extrabold text-foreground">Skills & Tools</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${category.color}`}>
                  <category.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-sm font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:bg-primary/[0.06] group-hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div className="mt-12 rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h3 className="mb-5 text-sm font-bold tracking-wide text-muted-foreground uppercase">
            Beyond Work
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-primary/[0.04] p-5">
              <span className="text-sm font-bold text-primary">Theater</span>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Scripted and acted in 10+ dramas
              </p>
            </div>
            <div className="rounded-xl bg-accent/[0.05] p-5">
              <span className="text-sm font-bold text-accent">Road Trips</span>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                7+ long road trips across different countries
              </p>
            </div>
            <div className="rounded-xl bg-primary/[0.04] p-5">
              <span className="text-sm font-bold text-primary">Electoral Campaigns</span>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Directed and managed election campaigns, delivering victories with record margins
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
