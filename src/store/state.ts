import ApplicationState, { CategoricalFacetOption, Indexed, Lookups } from '@/types/store'
// @ts-ignore
export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

const state: ApplicationState = {
  allDataItems: {},
  topicTree: [],
  categoricalFacets: {
    collectionPoint: { id: 'collectionPoint', label: '', options: [], description: '' },
    ageGroup:  { id: 'ageGroup', label: '', options: [], description: '' },
    sexGroup:  { id: 'sexGroup', label: '', options: [], description: '' },
    subCohorts:  { id: 'subCohorts', label: '', options: [], description: '' }
  },
  selectedOptions: {
    ageGroup: [],
    sexGroup: [],
    subCohorts: [],
    topic: undefined,
    collectionPoint: [],
    searchTerm: ''
  },
  lookups: {
    collectionPoint: {},
    ageGroup: {},
    sexGroup: {},
    subCohorts: {},
    topics: {}
  } as Lookups,
  openTopics: [],
  selectedDataItems: []
}

export default state
