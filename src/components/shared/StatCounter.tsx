import { useAnimatedCounter } from '@/hooks/use-animated-counter'

interface StatCounterProps {
  end: number
  suffix?: string
  label: string
}

export function StatCounter({ end, suffix = '', label }: StatCounterProps) {
  const { ref, value } = useAnimatedCounter(end)
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-primary md:text-5xl">
        {value}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
