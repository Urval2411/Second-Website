"use client"

import { ArrowDown, Linkedin, Mail, Phone } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Colored background shapes */}
      <div className="absolute top-[-10%] right-[-5%] h-[700px] w-[700px] rounded-full bg-primary/[0.07] blur-3xl" />
      <div className="absolute bottom-[-15%] left-[-10%] h-[500px] w-[500px] rounded-full bg-accent/[0.08] blur-3xl" />
      <div className="absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-2xl" />

      <div
        className={`relative mx-auto max-w-6xl px-6 py-32 transition-all duration-1000 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-8">
          {/* Decorative tag line */}
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-accent" />
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Strategy & Operations
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <span className="text-balance">
              Urval{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Shah
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            MBA Candidate at{" "}
            <span className="font-semibold text-primary">Columbia Business School</span>{" "}
            with 7+ years of experience in management consulting, investment banking strategy,
            and product management.
          </p>

          {/* Company pills */}
          <div className="flex flex-wrap gap-3">
            {[
              "Oliver Wyman",
              "Nomura",
              "Columbia Business School",
              "BITS Pilani",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 font-mono text-xs font-medium text-primary"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
            >
              Get in Touch
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/urval-shah-792b13119/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary/20 bg-card px-7 py-3.5 text-sm font-bold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              LinkedIn
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="tel:+19296690738"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary/20 bg-card px-7 py-3.5 text-sm font-bold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <Phone className="h-4 w-4" />
              {'(929) 669-0738'}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <a href="#about" aria-label="Scroll down" className="flex flex-col items-center gap-2 text-primary/60 transition-colors hover:text-primary">
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
