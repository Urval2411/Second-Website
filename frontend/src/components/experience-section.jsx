const experiences = [
  {
    company: "CIVIC (In-semester Internship)",
    roles: [{ title: "Product & Strategy", period: "2025" }],
    location: "New York, NY",
    highlight: "AI-powered startup transforming government workflows",
    bullets: [
      "Collaborated with engineering to launch 5+ features, enhancing user engagement by 25% and saving 100+ workhours per week",
      "Designed long-term product strategy by performing 200+ customer interviews and market research, targeting #1 market position in 5 years",
    ],
    tags: ["Product Strategy", "AI", "GovTech"],
  },
  {
    company: "Oliver Wyman",
    roles: [
      { title: "Senior Consultant", period: "2025" },
      { title: "Consultant", period: "2024" },
      { title: "Associate Consultant", period: "2022 - 2023" },
    ],
    location: "New Delhi, India & Riyadh, KSA",
    highlight:
      "Consistently rated among top 5% out of 400+ consultants; fast-track promotion to Senior Consultant",
    bullets: [
      "Led 100+ hours of C-suite brainstorming and cross-functional collaboration, identifying 25+ initiatives achieving a 15% market share gain",
      "Crafted the organization-wide 'Path to Profitability' initiative, resulting in a breakeven turnaround after two decades of losses",
      "Coordinated an agile squad of 30 members on 200+ pre-merger tasks, completing integration of 4 airlines 27 days ahead of schedule",
      "Presented comprehensive market due diligence helping the CEO secure $500M investment",
      "Led MVP launch for first financial services transaction on India's Open Network, boosting daily transaction volume by 6x in 1 month",
      "Identified high-impact optimization levers for Saudi Arabia's sports arenas, improving occupancy by 20% and profitability by 10%",
    ],
    tags: ["Strategy", "Transformation", "Due Diligence", "GTM", "Operations"],
  },
  {
    company: "Nomura",
    roles: [
      { title: "Strategy Associate", period: "2022" },
      { title: "Strategy Analyst", period: "2019 - 2022" },
    ],
    location: "Mumbai, India & London, UK",
    highlight:
      "Top rated member of Global Wholesale Strategy Team with focus on Investment Banking strategy",
    bullets: [
      "Collaborated with Head of Investment Banking to manage $1BN+ P&L book, driving $100M+ net profit growth in 2 years",
      "Conducted due diligence on 15+ boutique IBs for inorganic M&A, successfully persuading acquisition of Greentech",
      "Developed real-time performance dashboard using SAP, Excel, and PowerBI, saving 50+ executive hours monthly",
      "Optimized stress testing models in line with Basel regulation, identifying avenues for 15% reduction in risk-weighted assets",
    ],
    tags: ["Investment Banking", "P&L Management", "M&A", "Risk Management"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28">
      {/* Soft colored background band */}
      <div className="absolute inset-0 bg-primary/[0.03]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-bold text-accent">02</span>
          <h2 className="text-3xl font-extrabold text-foreground">Experience</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-12">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-0 w-0.5 rounded-full bg-primary/15 md:left-48" />

          {experiences.map((exp, expIdx) => (
            <div key={exp.company} className="group relative flex flex-col gap-6 md:flex-row">
              {/* Timeline dot */}
              <div className={`absolute left-0 top-1.5 z-10 h-3.5 w-3.5 -translate-x-[6px] rounded-full border-[3px] md:left-48 ${
                expIdx === 0 ? "border-accent bg-accent/20" : "border-primary bg-primary/20"
              }`} />

              {/* Date column */}
              <div className="pl-6 md:w-48 md:pr-8 md:pl-0 md:text-right">
                <div className="flex flex-col gap-1">
                  {exp.roles.map((role) => (
                    <div key={role.title} className="flex flex-col md:items-end">
                      <span className="font-mono text-xs font-semibold text-accent">{role.period}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pl-6 md:pl-10">
                <div className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-extrabold text-foreground">{exp.company}</h3>
                      <div className="mt-1 flex flex-col gap-0.5">
                        {exp.roles.map((role) => (
                          <span key={role.title} className="text-sm text-muted-foreground">
                            {role.title}{" "}
                            <span className="font-mono text-xs font-semibold text-accent">
                              ({role.period})
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="rounded-full bg-primary/[0.07] px-3 py-1.5 text-xs font-medium text-primary">
                      {exp.location}
                    </span>
                  </div>

                  <div className="mb-4 rounded-xl bg-accent/[0.06] px-4 py-2.5">
                    <p className="text-sm font-semibold text-accent">
                      {exp.highlight}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/[0.07] px-3 py-1 font-mono text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
