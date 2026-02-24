import { useState } from "react"
import { Send, CheckCircle, Linkedin, Mail, Phone, Download } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    contact: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  const API = import.meta.env.VITE_API_URL ?? ""

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(null)

    try {
      const res = await fetch(`${API}/api/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          phone: formState.contact,
          message: formState.message,
        }),
      })

      if (!res.ok) throw new Error("Failed to send message")

      setSubmitted(true)
      setFormState({ name: "", contact: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-mono text-sm font-bold text-accent">05</span>
          <h2 className="text-3xl font-extrabold text-foreground">Get in Touch</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left - Info */}
          <div className="flex flex-col gap-8 lg:col-span-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether you have a question, want to discuss a potential opportunity, or just
              want to say hi &mdash; I&apos;d love to hear from you.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:UShah26@gsb.columbia.edu"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                    Email
                  </p>
                  <p className="text-sm font-medium text-foreground">UShah26@gsb.columbia.edu</p>
                </div>
              </a>

              <a
                href="tel:+19296690738"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                    Phone
                  </p>
                  <p className="text-sm font-medium text-foreground">{'(929) 669-0738'}</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/urval-shah-792b13119/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
                    LinkedIn
                  </p>
                  <p className="text-sm font-medium text-foreground">Urval Shah</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground">
                    Thank you for reaching out. I&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold tracking-wide text-muted-foreground uppercase"
                    >
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      placeholder="John Doe"
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact"
                      className="text-xs font-bold tracking-wide text-muted-foreground uppercase"
                    >
                      Contact Number / Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact"
                      type="text"
                      required
                      value={formState.contact}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, contact: e.target.value }))
                      }
                      placeholder="+1 (555) 000-0000 or email@example.com"
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold tracking-wide text-muted-foreground uppercase"
                    >
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      placeholder="Hi Urval, I'd like to connect about..."
                      className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {error && (
                    <p className="text-sm font-medium text-destructive">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50"
                  >
                    {sending ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Admin: export all submitted messages as Excel */}
      <div className="mx-auto mt-6 max-w-6xl px-6 flex justify-end">
        <a
          href={`${API}/api/messages/export`}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
          title="Download all received messages as Excel"
        >
          <Download className="h-3 w-3" />
          Export Messages (.xlsx)
        </a>
      </div>
    </section>
  )
}
