import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { profile, stats, terminalSkills } from '../data/portfolioData.js'

const lines = ['> whoami', `${profile.name}\n${profile.role}`, '> skills', terminalSkills.join('\n')]

function useTyping(target, { speed = 22, pause = 300 } = {}) {
  const [typed, setTyped] = useState([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setTyped(target)
      setDone(true)
      return
    }
    let cancelled = false
    let timer
    let line = 0
    let chars = 0
    const tick = () => {
      if (cancelled) return
      if (line >= target.length) return setDone(true)
      chars += 1
      const l = line
      const text = target[l].slice(0, chars)
      setTyped((prev) => {
        const next = prev.slice(0, l)
        next[l] = text
        return next
      })
      if (chars >= target[line].length) {
        line += 1
        chars = 0
        timer = setTimeout(tick, pause)
      } else timer = setTimeout(tick, speed)
    }
    timer = setTimeout(tick, 500)
    return () => {
      cancelled = true
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { typed, done }
}

function Terminal() {
  const { typed, done } = useTyping(lines)
  return (
    <div className="glass glow-border overflow-hidden shadow-glow" aria-label="Developer terminal">
      <div className="flex items-center gap-2 border-b border-line bg-surface2/80 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
        <span className="h-3 w-3 rounded-full bg-ok/70" />
        <span className="ml-3 truncate font-mono text-xs text-muted">muthupandi@control-center ~</span>
      </div>
      <div className="min-h-[18rem] space-y-3 p-5 font-mono text-sm leading-relaxed">
        {typed.map((t, i) => (
          <pre key={i} className={`whitespace-pre-wrap font-mono ${t.startsWith('>') ? 'text-accent' : 'text-ink'}`}>
            {t}
            {!done && i === typed.length - 1 && <span className="animate-blink text-accent">▍</span>}
          </pre>
        ))}
        {done && (
          <p className="text-accent">
            &gt; <span className="animate-blink">▍</span>
          </p>
        )}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="container-x relative pb-16 pt-12 sm:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]" />
      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="chip mb-5 gap-2">
            <span className="h-2 w-2 rounded-full bg-ok" /> Open to full-stack roles
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I’m <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-2 text-2xl font-semibold text-ink/90 sm:text-3xl">{profile.role}</p>
          <p className="mt-5 max-w-xl text-lg text-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href={profile.resume} download="Muthupandi_P_Resume.pdf" className="btn-ghost">Download Resume</a>
            <a href="#contact" className="btn-ghost">Contact Me</a>
          </div>

          <div className="mt-6 flex items-center gap-3 text-muted">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-accent"><FaGithub size={22} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-accent"><FaLinkedin size={22} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-accent"><FiMail size={22} /></a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="glass px-4 py-3">
                <dt className="sr-only">{s.label}</dt>
                <dd className="gradient-text text-2xl font-bold">{s.value}</dd>
                <p className="mt-0.5 text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </dl>
        </motion.div>

        <Terminal />
      </div>
    </section>
  )
}
