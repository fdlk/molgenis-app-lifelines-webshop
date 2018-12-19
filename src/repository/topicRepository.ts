// @ts-ignore
import api from '@molgenis/molgenis-api-client'
import { TopicNode } from '@/types/store'

export default {
  getAll (): Promise<TopicNode[]> {
    return api.get('/api/v2/lifelines_topics?num=10000?attrs=id,label,children(id,label,children(id, label, dataItems(id, label))').then((response: any) => {
      return response.items
    })
  }
}
