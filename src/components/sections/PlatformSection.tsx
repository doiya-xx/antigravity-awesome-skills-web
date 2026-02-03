import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { PlatformIcon } from '@/components/shared/PlatformIcon'
import { Card, CardContent } from '@/components/ui/card'
import { PLATFORMS } from '@/data/constants'

export function PlatformSection() {
  return (
    <section className="px-4 py-24 md:px-6" id="platforms">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="One Format, Every Platform"
          subtitle="Skills are markdown files (SKILL.md) that follow a universal format compatible across all major AI coding assistants."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORMS.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <a href={platform.url} target="_blank" rel="noopener noreferrer">
                <Card className="card-glow h-full border-border/50 bg-card transition-colors hover:bg-card/80">
                  <CardContent className="flex items-center gap-4 p-5">
                    <PlatformIcon icon={platform.icon} color={platform.color} />
                    <div>
                      <div className="font-medium">{platform.name}</div>
                      <div className="text-xs text-muted-foreground">{platform.type}</div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
