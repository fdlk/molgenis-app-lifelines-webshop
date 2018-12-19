import { CategoricalFacetOption, Identifiable, TopicNode } from '@/types/store'

export interface VueDataItem {
  ageGroups: CategoricalFacetOption[]
  sexGroups: CategoricalFacetOption[]
  subCohorts: CategoricalFacetOption[]
  collectionPoints: CategoricalFacetOption[]
  label: string
  description: string
  enabled: boolean
  selected: boolean
}

export interface VueTopic extends TopicNode {
  selected: boolean
  open: boolean
}
