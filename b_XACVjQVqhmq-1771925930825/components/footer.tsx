import { Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <span className="text-xl font-extrabold text-foreground">
              Urval Shah<span className="text-accent">.</span>
            </span>
            <span className="text-xs text-muted-foreground">
              Strategy & Operations Leader
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/urval-shah-792b13119/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all hover:bg-primary/20 hover:shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:UShah26@gsb.columbia.edu"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all hover:bg-primary/20 hover:shadow-md"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="tel:+19296690738"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all hover:bg-primary/20 hover:shadow-md"
              aria-label="Phone"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Urval Shah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
