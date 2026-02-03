import { Terminal, Monitor, Rocket, Github, type LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Terminal,
  Monitor,
  Rocket,
  Github,
}

interface PlatformIconProps {
  icon: string
  color: string
  size?: number
}

export function PlatformIcon({ icon, color, size = 40 }: PlatformIconProps) {
  const Icon = iconMap[icon] ?? Terminal
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: `${color}20`,
      }}
    >
      <Icon className="h-5 w-5" style={{ color }} />
    </div>
  )
}
