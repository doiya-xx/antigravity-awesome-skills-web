import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StatCounter } from '@/components/shared/StatCounter'
import { STATS } from '@/data/constants'

export function HeroSection() {
  return (
    <section className="hero-gradient relative flex min-h-screen flex-col items-center justify-center px-4 pt-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto max-w-4xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary"
        >
          <Sparkles className="h-4 w-4" />
          Open Source Skill Collection
        </motion.div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-foreground">Antigravity</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Awesome Skills
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
          A curated collection of agentic skills for Claude Code, Gemini CLI, Codex CLI,
          Cursor, GitHub Copilot, and more. One format, every platform.
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <StatCounter end={STATS.skills} suffix="+" label="Skills" />
          <StatCounter end={STATS.categories} label="Categories" />
          <StatCounter end={STATS.platforms} label="Platforms" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#skills">Browse Skills</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#install">Quick Install</a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8"
      >
        <a href="#platforms" className="text-muted-foreground transition-colors hover:text-foreground">
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
