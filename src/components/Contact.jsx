import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import Section from './Section.jsx'
import { profile } from '../data/portfolioData.js'

const WEB3FORMS_ACCESS_KEY = 'e3d72fb8-d78b-4556-b2a1-46b88a2d5926'
const empty = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState({ state: 'idle' }) // idle | sending | sent | error

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const mailto = () =>
    `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || 'Portfolio enquiry')}&body=${encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    )}`

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'sending' })
    try {
      const formData = new FormData()
      formData.append('access_key', WEB3FORMS_ACCESS_KEY)
      formData.append('from_name', form.name)
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('subject', form.subject)
      formData.append('message', form.message)

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.message || `HTTP ${res.status}`)
      setStatus({ state: 'sent' })
      setForm(empty)
    } catch {
      setStatus({ state: 'error' })
    }
  }

  return (
    <Section id="contact" eyebrow="05 — Contact" title="Let’s work together" subtitle="Send a message, or reach out directly.">
      <div className="grid gap-6 lg:grid-cols-5">
        <form
          name="contact"
          method="POST"
          onSubmit={onSubmit}
          className="glass glow-border space-y-5 p-6 sm:p-8 lg:col-span-3"
        >
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="label">Full Name</label>
              <input id="name" name="name" required className="input" value={form.name} onChange={update} placeholder="Your name" autoComplete="name" />
            </div>
            <div>
              <label htmlFor="email" className="label">Email</label>
              <input id="email" name="email" type="email" required className="input" value={form.email} onChange={update} placeholder="you@example.com" autoComplete="email" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="label">Subject</label>
            <input id="subject" name="subject" required className="input" value={form.subject} onChange={update} placeholder="What is this about?" />
          </div>
          <div>
            <label htmlFor="message" className="label">Message</label>
            <textarea id="message" name="message" required rows={5} className="input" value={form.message} onChange={update} placeholder="Your message" />
          </div>

          <button type="submit" className="btn-primary" disabled={status.state === 'sending'}>
            {status.state === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          <div role="status" aria-live="polite" className="text-sm">
            {status.state === 'sent' && <p className="text-ok">Message sent. Thanks — I’ll get back to you soon.</p>}
            {status.state === 'error' && (
              <p className="text-red-300">
                The message could not be sent from this site.{' '}
                <a href={mailto()} className="underline hover:text-accent">Send it by email instead</a> (opens your email app).
              </p>
            )}
          </div>
        </form>

        <div className="space-y-5 lg:col-span-2">
          <div className="glass space-y-4 p-6 text-sm">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 transition hover:text-accent"><FiMail className="text-accent" /> {profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 transition hover:text-accent"><FiPhone className="text-accent" /> {profile.phone}</a>
            <p className="flex items-center gap-3"><FiMapPin className="text-accent" /> {profile.location}</p>
          </div>
          <div className="glass p-6 text-sm">
            <p className="mb-3 font-semibold">Elsewhere</p>
            <div className="flex flex-wrap gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost btn-sm"><FaGithub /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost btn-sm"><FaLinkedin /> LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
