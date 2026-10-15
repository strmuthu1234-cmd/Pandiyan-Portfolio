import Section from './Section.jsx'
import { experience } from '../data/portfolioData.js'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="03 — Experience" title="Where I’ve worked">
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={job.role + job.start} className="relative">
            <span
              className={`absolute -left-[31px] top-2 h-3 w-3 rounded-full sm:-left-[39px] ${
                job.current ? 'bg-ok shadow-[0_0_12px_#22C55E]' : 'bg-accent'
              }`}
            />
            <div className="glass glass-hover p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-accent">{job.company}</p>
                </div>
                <span className="chip">{job.start} – {job.end}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
