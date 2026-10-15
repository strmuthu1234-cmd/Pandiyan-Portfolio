import Section from './Section.jsx'
import { education, highlights, profile } from '../data/portfolioData.js'

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="Engineer with a backend-first mindset">
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="glass glow-border p-6 sm:p-8 lg:col-span-3">
          <p className="text-lg leading-relaxed text-ink/90">{profile.summary}</p>
          <h3 className="mb-3 mt-8 font-mono text-xs uppercase tracking-widest text-accent">Education</h3>
          <ul className="space-y-3 text-sm">
            {education.map((e) => (
              <li key={e.title}>
                <p className="font-medium">{e.title}</p>
                <p className="text-muted">{e.place} · {e.period}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 lg:col-span-2">
          {highlights.map((h) => (
            <div key={h.title} className="glass glass-hover p-5">
              <h3 className="font-semibold text-accent">{h.title}</h3>
              <p className="mt-1 text-sm text-muted">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
