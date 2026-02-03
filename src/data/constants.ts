import type { CategoryMeta, Platform } from '@/types'

export const CATEGORIES: CategoryMeta[] = [
  { id: 'development', label: 'Development', icon: 'Code2', color: '#3b82f6', description: 'Languages, frameworks & full-stack development' },
  { id: 'security', label: 'Security', icon: 'Shield', color: '#ef4444', description: 'Security, privacy & compliance' },
  { id: 'data-ai', label: 'Data & AI', icon: 'Brain', color: '#8b5cf6', description: 'Machine learning, data science & AI' },
  { id: 'infrastructure', label: 'Infrastructure', icon: 'Server', color: '#f97316', description: 'Cloud, DevOps & infrastructure' },
  { id: 'general', label: 'General', icon: 'Sparkles', color: '#06b6d4', description: 'Productivity, writing & general purpose' },
  { id: 'architecture', label: 'Architecture', icon: 'Layers', color: '#10b981', description: 'System design & architecture patterns' },
  { id: 'business', label: 'Business', icon: 'Briefcase', color: '#eab308', description: 'Product, marketing & business strategy' },
  { id: 'testing', label: 'Testing', icon: 'TestTube', color: '#ec4899', description: 'Testing, QA & quality assurance' },
  { id: 'workflow', label: 'Workflow', icon: 'Workflow', color: '#14b8a6', description: 'CI/CD, automation & workflows' },
]

export const PLATFORMS: Platform[] = [
  { name: 'Claude Code', type: 'CLI', color: '#d97706', icon: 'Terminal', url: 'https://claude.ai/code' },
  { name: 'Gemini CLI', type: 'CLI', color: '#4285f4', icon: 'Terminal', url: 'https://github.com/google-gemini/gemini-cli' },
  { name: 'Codex CLI', type: 'CLI', color: '#10a37f', icon: 'Terminal', url: 'https://github.com/openai/codex' },
  { name: 'Cursor', type: 'IDE', color: '#7c3aed', icon: 'Monitor', url: 'https://cursor.com' },
  { name: 'GitHub Copilot', type: 'IDE Extension', color: '#238636', icon: 'Github', url: 'https://github.com/features/copilot' },
  { name: 'Antigravity', type: 'IDE', color: '#a855f7', icon: 'Rocket', url: 'https://antigravity.dev' },
  { name: 'OpenCode', type: 'CLI', color: '#f97316', icon: 'Terminal', url: 'https://github.com/nicepkg/opencode' },
  { name: 'AdaL', type: 'CLI', color: '#06b6d4', icon: 'Terminal', url: 'https://github.com/microsoft/adal' },
]

export const INSTALL_COMMANDS = {
  npx: 'npx antigravity-awesome-skills',
  clone: `git clone https://github.com/anthropics/antigravity-awesome-skills.git
cd antigravity-awesome-skills
npm ci`,
}

export const BUNDLE_LABELS: Record<string, string> = {
  'core-dev': 'Core Developer',
  'security-core': 'Security Engineer',
  'k8s-core': 'K8s / DevOps',
  'data-core': 'Data Engineer',
  'ops-core': 'Operations / SRE',
}

export const STATS = {
  skills: 626,
  categories: 9,
  platforms: 8,
}
