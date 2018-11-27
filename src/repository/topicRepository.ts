// @ts-ignore
import api from '@molgenis/molgenis-api-client'
import { Topic } from '@/types/store'

const refToId = (ref: any): string => ref.id

const toTopic = (item: any): Topic => {
  const topic: Topic = {
    id: item.id,
    label: item.label,
    dataItems: item.dataItems.map(refToId)
  }

  if (item.parent) {
    topic.parentTopicId = refToId(item.parent)
  }

  return topic
}

export default {
  getAll (): Promise<Topic[]> {
    return api.get('api/v2/lifelines_topics?num=10000').then((response: any) => {
      return response.items.map(toTopic)
    })
  }
}
