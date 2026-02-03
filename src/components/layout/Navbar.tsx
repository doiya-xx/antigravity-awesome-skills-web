import { Github, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'Bundles', href: '#bundles' },
  { label: 'Install', href: '#install' },
]

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <Rocket className="h-5 w-5 text-primary" />
          <span className="hidden sm:inline">Antigravity Skills</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button variant="outline" size="sm" asChild>
          <a
            href="https://github.com/anthropics/antigravity-awesome-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </Button>
      </div>
    </header>
  )
}
