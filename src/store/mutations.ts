import { ApplicationState, CategoricalFacet, DataItem, Topic } from '@/types/store'

export default {
  toggleDataItem (state: ApplicationState, id: string) {
    if (state.selectedDataItems.includes(id)) {
      state.selectedDataItems = state.selectedDataItems.filter(x => x !== id)
    } else {
      state.selectedDataItems = [...state.selectedDataItems, id]
    }
  },
  setDataItems (state: ApplicationState, dataItems: DataItem[]) {
    state.dataItems = dataItems
  },

  setTopics (state: ApplicationState, topics: Topic[]) {
    state.topics = topics
  },

  setAgeGroups (state: ApplicationState, ageGroups: CategoricalFacet) {
    state.categoricalFacets.ageGroup = ageGroups
  },

  setSexGroups (state: ApplicationState, sexGroups: CategoricalFacet) {
    state.categoricalFacets.sexGroup = sexGroups
  },

  setSubCohorts (state: ApplicationState, subCohorts: CategoricalFacet) {
    state.categoricalFacets.subCohorts = subCohorts
  },

  setCollectionPoints (state: ApplicationState, collectionPoints: CategoricalFacet) {
    state.categoricalFacets.collectionPoint = collectionPoints
  },

  toggleTopicSelect (state: ApplicationState, id: string) {
    state.selectedOptions.topic = state.selectedOptions.topic === id ? undefined : id
  },

  toggleTopicOpen (state: ApplicationState, id: string) {
    const index = state.openTopics.indexOf(id)
    if (index === -1) {
      state.openTopics.push(id)
    } else {
      state.openTopics.splice(index, 1)
    }
  }
}
