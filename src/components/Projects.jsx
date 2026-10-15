import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink, FiX } from 'react-icons/fi'
import Section from './Section.jsx'
import { profile, projects } from '../data/portfolioData.js'

function ProjectCard({ project, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="glass glass-hover group flex h-full w-full flex-col overflow-hidden text-left"
      aria-haspopup="dialog"
    >
      <div className="relative flex h-36 items-center justify-center overflow-hidden border-b border-line bg-gradient-to-br from-blue/20 via-surface2 to-violet/20">
        <span className="font-mono text-4xl font-bold text-white/10">{'</>'}</span>
        {project.featured && (
          <span className="absolute left-3 top-3 rounded-full border border-accent/40 bg-bg/70 px-2.5 py-0.5 text-[11px] font-medium text-accent">
            Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold transition group-hover:text-accent">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{project.short}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
        <span className="mt-4 text-sm font-medium text-accent">View details →</span>
      </div>
    </button>
  )
}

function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const previous = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      previous?.focus?.()
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        className="glass glow-border max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-surface p-6 sm:p-8"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id="project-title" className="text-2xl font-bold">{project.title}</h3>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close project details" className="btn-ghost btn-sm shrink-0">
            <FiX size={16} />
          </button>
        </div>
        <p className="mt-3 text-muted">{project.short}</p>

        <h4 className="mb-2 mt-6 font-mono text-xs uppercase tracking-widest text-accent">My role</h4>
        <p className="text-sm">{project.role}</p>

        <h4 className="mb-2 mt-6 font-mono text-xs uppercase tracking-widest text-accent">Key features</h4>
        <ul className="space-y-2 text-sm text-muted">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
              {f}
            </li>
          ))}
        </ul>

        <h4 className="mb-2 mt-6 font-mono text-xs uppercase tracking-widest text-accent">Tech stack</h4>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
              <FiExternalLink size={16} /> Live website
            </a>
          )}
          <a href={project.github || profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
            <FaGithub size={16} /> {project.github ? 'GitHub repo' : 'GitHub profile'}
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <Section id="projects" eyebrow="04 — Projects" title="Featured work" subtitle="Click a project to see its role, features and stack.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setSelected} />
        ))}
      </div>
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </Section>
  )
}
