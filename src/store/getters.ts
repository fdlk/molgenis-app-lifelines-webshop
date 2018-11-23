import { ApplicationState, Identifiable, Topic } from '@/types/store'
import { VueDataItem, VueTopic } from '@/types/vue'

type TermGuard<T> = (x: T | undefined) => x is T

const lookup = <T extends Identifiable>(ids: string[], options: T[]): T[] =>
    ids.map(id => (options || []).find(option => option.id === id))
    .filter((x => x !== undefined) as TermGuard<T>)

export default {
  topicTree: (state: ApplicationState): VueTopic[] => {
    const isRootTopic = (topic: Topic): boolean => !topic.parentTopicId || topic.parentTopicId === topic.id
    const toVueTopic = (topic: Topic): VueTopic => ({
      id: topic.id,
      label: topic.label,
      open: state.openTopics.includes(topic.id),
      selected: state.selectedOptions.topic === topic.id,
      children: state.topics
        .filter(child => child.parentTopicId === topic.id)
        .filter(child => child.id !== topic.id)
        .map(toVueTopic)
    })
    return state.topics
      .filter(isRootTopic)
      .map(toVueTopic)
  },
  topicList: (state: ApplicationState, getters: {topicTree: VueTopic[]}): VueTopic[] => {
    const treeWalker = (previous: VueTopic[], current: VueTopic): VueTopic[] =>
      current.open ? current.children.reduce(treeWalker,[...previous, current]) : [...previous, current]
    return getters.topicTree.reduce(treeWalker, [] as VueTopic[])
  },
  vueDataItems: (state: ApplicationState): VueDataItem[] =>
      state.dataItems.map(item => ({
        ...item,
        collectionPoints: lookup(item.collectionPoints, state.categoricalFacets.collectionPoint.options),
        ageGroups: lookup(item.ageGroups, state.categoricalFacets.ageGroup.options),
        subCohorts: lookup(item.subCohorts, state.categoricalFacets.subCohorts.options),
        sexGroups: lookup(item.sexGroups, state.categoricalFacets.sexGroup.options),
        topic: lookup([item.topic], state.topics)[0],
        selected: state.selectedDataItems.includes(item.id),
        enabled: true
      }))
}
