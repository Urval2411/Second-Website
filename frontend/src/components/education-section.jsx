import { Award, BookOpen, Users } from "lucide-react"

const education = [
  {
    school: "Columbia Business School",
    degree: "MBA, Strategy, Operations and Analytics",
    period: "Present - 2026",
    location: "New York, NY",
    honors: "Dean's List",
    activities: [
      "Peer Advisor",
      "VP - AI Club",
      "VP - Management Consulting Association",
      "Technology Club",
      "TA: Capital Markets & Investments",
      "TA: Harnessing Consulting Skills",
    ],
  },
  {
    school: "Birla Institute of Technology and Science (BITS Pilani)",
    degree: "Bachelor of Mechanical Engineering; Minor in Finance",
    period: "2015 - 2019",
    location: "Goa, India",
    honors: "GPA: 8.9/10 (Top 5%); Merit scholarship with 80% tuition fee waiver",
    activities: [
      "Chief Coordinator, Entrepreneurship Cell",
      "Fund Manager, Wall Street Club",
    ],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-bold text-accent">03</span>
          <h2 className="text-3xl font-extrabold text-foreground">Education</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((edu, i) => (
            <div
              key={edu.school}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* Decorative top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${i === 0 ? 'bg-primary' : 'bg-accent'}`} />

              <div className="relative pt-2">
                <div className="mb-4 flex items-center gap-2">
                  <BookOpen className={`h-5 w-5 ${i === 0 ? 'text-primary' : 'text-accent'}`} />
                  <span className="font-mono text-xs font-semibold text-accent">{edu.period}</span>
                </div>

                <h3 className="text-lg font-extrabold text-foreground">{edu.school}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{edu.degree}</p>
                <p className="mt-1 text-xs text-muted-foreground">{edu.location}</p>

                {/* Honors */}
                <div className="mt-5 flex items-start gap-2 rounded-xl bg-accent/[0.06] p-3.5">
                  <Award className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-sm font-semibold text-foreground">{edu.honors}</span>
                </div>

                {/* Activities */}
                <div className="mt-5">
                  <div className="mb-2.5 flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                      Activities & Leadership
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.activities.map((act) => (
                      <span
                        key={act}
                        className="rounded-full bg-primary/[0.06] px-3 py-1 text-xs font-medium text-primary"
                      >
                        {act}
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
