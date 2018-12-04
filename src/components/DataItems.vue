<template>
  <div>
    <b-button size="sm" @click="selectAll">{{ allSelected ? 'Deselect all' : 'Select all' }}</b-button>
    <b-list-group>
      <data-item-card v-for="dataItem in dataItems"
                      :dataItem="dataItem"
                      :key="dataItem.id"
                      class="m-1 rounded"
                      @click="toggleDataItem(dataItem.id)"></data-item-card>
    </b-list-group>
  </div>
</template>

<script >
import Vue from 'vue'
import DataItemCard from './DataItemCard.vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  name: 'DataItems',
  props: {
    dataItems: Array
  },
  methods: {
    ...mapMutations(['toggleDataItem', 'selectAll'])
  },
  computed: {
    allSelected () {
      return this.dataItems.every((item) => item.enabled && item.selected)
    }
  },
  components: { DataItemCard }
})
</script>
