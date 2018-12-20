// @ts-ignore
import api from '@molgenis/molgenis-api-client'
import { TopicNode } from '@/types/store'

export default {
  getAll (): Promise<TopicNode[]> {
    return api.get('/api/v2/lifelines_topics?num=10000&q=dataItems==""&attrs=id,label,children(id,label,children,dataItems(*)),dataItems').then((response: any) => {
      return response.items
      .map((respTopic: any) => {
        respTopic.children = respTopic.children.map((subTopic: any) => {
          subTopic.dataItems = subTopic.dataItems.map((item: any) => item.id)
          return subTopic
        })
        return respTopic
      })
    })
  }
}
