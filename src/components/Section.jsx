import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
    </div>
  )
}

export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <motion.section
      id={id}
      className="container-x py-16 sm:py-20"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
      {children}
    </motion.section>
  )
}
