import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CategoryBadge } from '@/components/shared/CategoryBadge'
import { RiskIndicator } from '@/components/shared/RiskIndicator'
import type { Skill } from '@/types'

interface SkillCardProps {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Card className="card-glow h-full border-border/50 bg-card">
      <CardContent className="flex h-full flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-mono text-sm font-semibold leading-tight">{skill.name}</h3>
          <RiskIndicator risk={skill.risk} />
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {skill.description}
        </p>

        <div className="flex flex-wrap items-center gap-1.5">
          <CategoryBadge category={skill.category} />
          {skill.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
