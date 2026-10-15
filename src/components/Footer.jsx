import { FiArrowUp } from 'react-icons/fi'
import { profile } from '../data/portfolioData.js'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-line">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, Vite &amp; Tailwind CSS.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a>
          <a href="#home" className="btn-ghost btn-sm" aria-label="Back to top"><FiArrowUp /> Back to top</a>
        </div>
      </div>
    </footer>
  )
}
