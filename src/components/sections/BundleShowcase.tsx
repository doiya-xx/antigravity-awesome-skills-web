import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Users } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BUNDLE_LABELS } from '@/data/constants'
import bundlesRaw from '@data/bundles.json'
import type { BundlesData } from '@/types'

const bundlesData = bundlesRaw as BundlesData
const bundleEntries = Object.entries(bundlesData.bundles)

export function BundleShowcase() {
  const [activeBundle, setActiveBundle] = useState(bundleEntries[0][0])
  const currentBundle = bundlesData.bundles[activeBundle]

  return (
    <section className="px-4 py-24 md:px-6" id="bundles">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Role-Based Bundles"
          subtitle="Curated skill collections for your role. Pick a bundle to see what's included."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {bundleEntries.map(([key]) => (
            <button
              key={key}
              onClick={() => setActiveBundle(key)}
              className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                activeBundle === key
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                {BUNDLE_LABELS[key] ?? key}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeBundle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {BUNDLE_LABELS[activeBundle] ?? activeBundle}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {currentBundle.description}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {currentBundle.skills.length} skills
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentBundle.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="cursor-default font-mono text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
