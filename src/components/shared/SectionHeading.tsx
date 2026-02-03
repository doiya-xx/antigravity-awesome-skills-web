import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  id?: string
}

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h2 id={id} className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  )
}
