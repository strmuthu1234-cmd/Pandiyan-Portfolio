import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks, profile } from '../data/portfolioData.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link of the section currently in view.
  useEffect(() => {
    const els = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const link = (id) =>
    `rounded-lg px-3 py-2 text-sm transition ${active === id ? 'text-accent' : 'text-muted hover:text-ink'}`

  return (
    <header
      className={`sticky top-0 z-40 border-b transition duration-300 ${
        scrolled || open ? 'border-line bg-bg/85 backdrop-blur-lg' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4" aria-label="Main">
        <a href="#home" className="text-lg font-bold tracking-tight">
          <span className="gradient-text">Muthupandi</span>
          <span className="text-ink">.P</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={link(l.id)} aria-current={active === l.id ? 'true' : undefined}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost btn-sm">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost btn-sm">LinkedIn</a>
          <a href={profile.resume} download="Muthupandi_P_Resume.pdf" className="btn-primary btn-sm">Download Resume</a>
        </div>

        <button
          type="button"
          className="btn-ghost btn-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line lg:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={`block ${link(l.id)}`} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-3 flex flex-wrap gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost btn-sm">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost btn-sm">LinkedIn</a>
              <a href={profile.resume} download="Muthupandi_P_Resume.pdf" className="btn-primary btn-sm">Download Resume</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
