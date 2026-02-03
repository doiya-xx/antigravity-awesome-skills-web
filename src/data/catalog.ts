import catalogRaw from '../../../data/catalog.json'
import indexRaw from '../../../skills_index.json'
import type { CatalogData, IndexSkill, Skill } from '@/types'

const catalog = catalogRaw as CatalogData
const index = indexRaw as IndexSkill[]

const riskMap = new Map<string, { risk: string; source: string }>()
for (const s of index) {
  riskMap.set(s.id, { risk: s.risk, source: s.source })
}

export const skills: Skill[] = catalog.skills.map((s) => {
  const meta = riskMap.get(s.id)
  return {
    ...s,
    risk: meta?.risk ?? 'unknown',
    source: meta?.source ?? 'unknown',
  }
})

export const totalSkills = catalog.total
