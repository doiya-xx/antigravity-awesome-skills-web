import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SkillCard } from '@/components/shared/SkillCard'
import type { Skill } from '@/types'

const PAGE_SIZE = 24

interface SkillGridProps {
  skills: Skill[]
}

export function SkillGrid({ skills }: SkillGridProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const visible = skills.slice(0, visibleCount)
  const hasMore = visibleCount < skills.length

  return (
    <div>
      {skills.length === 0 ? (
        <div className="py-16 text-center text-muted-foreground">
          No skills match your search.
        </div>
      ) : (
        <>
          <div className="mb-4 text-sm text-muted-foreground">
            Showing {visible.length} of {skills.length} skills
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((skill, i) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.02, 0.3), duration: 0.3 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </div>
          {hasMore && (
            <div className="mt-8 text-center">
              <Button
                variant="outline"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              >
                Load More ({skills.length - visibleCount} remaining)
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
