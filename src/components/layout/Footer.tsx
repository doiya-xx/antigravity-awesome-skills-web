import { Rocket } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-zinc-950/50">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2 font-semibold">
              <Rocket className="h-5 w-5 text-primary" />
              Antigravity Awesome Skills
            </div>
            <p className="text-sm text-muted-foreground">
              A curated collection of 626+ agentic skills for AI coding assistants.
              Universal format compatible across all major platforms.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://github.com/anthropics/antigravity-awesome-skills" className="transition-colors hover:text-foreground" target="_blank" rel="noopener noreferrer">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="https://github.com/anthropics/antigravity-awesome-skills/blob/main/docs/GETTING_STARTED.md" className="transition-colors hover:text-foreground" target="_blank" rel="noopener noreferrer">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="https://github.com/anthropics/antigravity-awesome-skills/blob/main/docs/SKILL_ANATOMY.md" className="transition-colors hover:text-foreground" target="_blank" rel="noopener noreferrer">
                  Skill Anatomy
                </a>
              </li>
              <li>
                <a href="https://github.com/anthropics/antigravity-awesome-skills/blob/main/CATALOG.md" className="transition-colors hover:text-foreground" target="_blank" rel="noopener noreferrer">
                  Full Catalog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold">Legal</h3>
            <p className="text-sm text-muted-foreground">
              Released under the MIT License.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Skills are contributed by the community and may have individual licenses.
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-border/40" />

        <div className="text-center text-xs text-muted-foreground">
          Built with React, Tailwind CSS & shadcn/ui
        </div>
      </div>
    </footer>
  )
}
