import { cn } from '@/lib/utils'

const riskConfig: Record<string, { color: string; label: string }> = {
  none: { color: 'bg-green-500', label: 'Safe' },
  safe: { color: 'bg-green-500', label: 'Safe' },
  critical: { color: 'bg-red-500', label: 'Critical' },
  offensive: { color: 'bg-red-600', label: 'Offensive' },
  unknown: { color: 'bg-zinc-500', label: 'Unknown' },
}

interface RiskIndicatorProps {
  risk: string
  className?: string
}

export function RiskIndicator({ risk, className }: RiskIndicatorProps) {
  const config = riskConfig[risk] ?? riskConfig.unknown
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <span className={cn('inline-block h-2 w-2 rounded-full', config.color)} />
      <span className="text-xs text-muted-foreground">{config.label}</span>
    </div>
  )
}
