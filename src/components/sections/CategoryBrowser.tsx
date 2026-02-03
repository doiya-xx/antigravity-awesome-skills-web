import { useState } from 'react'
import { Search } from 'lucide-react'
import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { SkillGrid } from '@/components/sections/SkillGrid'
import { CATEGORIES } from '@/data/constants'
import { skills } from '@/data/catalog'
import { useSearch } from '@/hooks/use-search'
import { cn } from '@/lib/utils'

export function CategoryBrowser() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const filtered = useSearch(skills, query, activeCategory)

  const categories = [
    { id: 'all', label: 'All', color: '#a855f7' },
    ...CATEGORIES,
  ]

  return (
    <section className="px-4 py-24 md:px-6" id="skills">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Browse Skills"
          subtitle="Explore 626+ agentic skills across 9 categories. Search by name, description, or tags."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 space-y-4"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search skills..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id)
                }}
                className={cn(
                  'rounded-full px-3 py-1.5 text-xs font-medium transition-all',
                  activeCategory === cat.id
                    ? 'text-white shadow-md'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                )}
                style={
                  activeCategory === cat.id
                    ? { backgroundColor: cat.color }
                    : undefined
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <SkillGrid skills={filtered} />
      </div>
    </section>
  )
}
