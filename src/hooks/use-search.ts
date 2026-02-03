import { useMemo } from 'react'
import type { Skill } from '@/types'

export function useSearch(skills: Skill[], query: string, category: string) {
  return useMemo(() => {
    let filtered = skills

    if (category && category !== 'all') {
      filtered = filtered.filter((s) => s.category === category)
    }

    if (query.trim()) {
      const q = query.toLowerCase().trim()
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.tags.some((t) => t.toLowerCase().includes(q))
      )
    }

    return filtered
  }, [skills, query, category])
}
