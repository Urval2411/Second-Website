import { Navbar } from "./components/navbar.jsx"
import { HeroSection } from "./components/hero-section.jsx"
import { AboutSection } from "./components/about-section.jsx"
import { ExperienceSection } from "./components/experience-section.jsx"
import { EducationSection } from "./components/education-section.jsx"
import { SkillsSection } from "./components/skills-section.jsx"
import { ContactSection } from "./components/contact-section.jsx"
import { Footer } from "./components/footer.jsx"

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
