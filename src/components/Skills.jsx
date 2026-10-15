import Section from './Section.jsx'
import { skillGroups } from '../data/portfolioData.js'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="02 — Skills" title="Tools I work with" subtitle="Grouped by what I use them for.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.title} className="glass glass-hover p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="rounded-lg border border-line bg-surface2/70 px-3 py-1.5 text-sm transition hover:border-accent/40">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
