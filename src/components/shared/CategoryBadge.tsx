import { Badge } from '@/components/ui/badge'
import { CATEGORIES } from '@/data/constants'

interface CategoryBadgeProps {
  category: string
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const meta = CATEGORIES.find((c) => c.id === category)
  const color = meta?.color ?? '#71717a'
  return (
    <Badge
      variant="outline"
      className="border-transparent text-xs"
      style={{ backgroundColor: `${color}20`, color }}
    >
      {meta?.label ?? category}
    </Badge>
  )
}
