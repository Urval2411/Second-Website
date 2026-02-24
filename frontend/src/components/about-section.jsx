import { Briefcase, GraduationCap, MapPin, Zap } from "lucide-react"

const highlights = [
  {
    icon: Briefcase,
    label: "7+ Years Experience",
    description: "Management consulting & investment banking strategy",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: GraduationCap,
    label: "Columbia MBA",
    description: "Strategy, Operations and Analytics, Dean's List",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Zap,
    label: "Top 5% Performer",
    description: "Consistently top rated at Oliver Wyman & Nomura",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MapPin,
    label: "New York, NY",
    description: "STEM MBA, 3-year OPT eligible",
    color: "bg-accent/10 text-accent",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-bold text-accent">01</span>
          <h2 className="text-3xl font-extrabold text-foreground">About Me</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Bio text */}
          <div className="flex flex-col gap-6 lg:col-span-3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a strategy and operations professional with a track record of delivering
              measurable impact across industries. Currently pursuing my MBA at Columbia Business
              School with a focus on Strategy, Operations, and Analytics, I bring a unique
              blend of consulting rigor and financial acumen.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              At <span className="font-semibold text-primary">Oliver Wyman</span>, I was
              consistently rated among the top 5% of 400+ consultants, earning a fast-track
              promotion to Senior Consultant. I have led organization-wide transformations,
              including crafting a 5-year turnaround blueprint for India&apos;s largest
              full-service airline that achieved a breakeven turnaround after over two decades
              of losses.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              At <span className="font-semibold text-primary">Nomura</span>, I collaborated
              with the Head of Investment Banking to manage a $1BN+ P&L book, driving $100M+
              net profit growth in 2 years. I also conducted due diligence on 15+ boutique
              investment banks for inorganic M&A opportunities.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Beyond work, I am passionate about technology and AI &mdash; serving as VP of the
              AI Club and Management Consulting Association at Columbia. I enjoy theater,
              road trips across countries, and have even directed election campaigns.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{item.label}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
