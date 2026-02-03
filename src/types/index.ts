export interface CatalogSkill {
  id: string
  name: string
  description: string
  category: string
  tags: string[]
  triggers: string[]
  path: string
}

export interface IndexSkill {
  id: string
  path: string
  category: string
  name: string
  description: string
  risk: string
  source: string
}

export interface Skill extends CatalogSkill {
  risk: string
  source: string
}

export interface Bundle {
  description: string
  skills: string[]
}

export interface BundlesData {
  generatedAt: string
  bundles: Record<string, Bundle>
}

export interface CatalogData {
  generatedAt: string
  total: number
  skills: CatalogSkill[]
}

export interface CategoryMeta {
  id: string
  label: string
  icon: string
  color: string
  description: string
}

export interface Platform {
  name: string
  type: string
  color: string
  icon: string
  url: string
}
