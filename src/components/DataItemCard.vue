<template>
    <b-list-group-item @click="$emit('click')"
                       href="#"
                       class="d-flex justify-content-between align-items-center data-item-card"
                       :active="dataItem.enabled && dataItem.selected"
                       :disabled="!dataItem.enabled">
        {{dataItem.label}}
        <div>
            <b-badge v-for="age in dataItem.ageGroups"
                     :variant="dataItem.selected ? 'light' : selectedOptions.ageGroup.includes(age.id) ? 'primary' : 'default'"
                     :key="'ag-' + age.id" class="mr-1">
                <font-awesome-icon icon="birthday-cake"/>
                {{age.label}}
            </b-badge>
            <b-badge v-for="sex in dataItem.sexGroups"
                     :variant="dataItem.selected ? 'light' : selectedOptions.sexGroup.includes(sex.id) ? 'warning' : 'default'"
                     :key="'sg-' + sex.id" class="mr-1">
                <font-awesome-icon icon="transgender"/>
                {{sex.label}}
            </b-badge>
            <b-badge v-for="subCohort in dataItem.subCohorts"
                     :variant="dataItem.selected ? 'light' : selectedOptions.subCohorts.includes(subCohort.id) ? 'danger' : 'default'"
                     :key="'sh-' + subCohort.id" class="mr-1">
                <font-awesome-icon icon="users"/>
                {{subCohort.label}}
            </b-badge>
            <b-badge v-for="collectionPoint in dataItem.collectionPoints"
                     :variant="dataItem.selected ? 'light' : selectedOptions.collectionPoint.includes(collectionPoint.id) ? 'secondary' : 'default'"
                     :key="'cp-' + collectionPoint.id" class="mr-1">
                <font-awesome-icon icon="calendar"/>
                {{collectionPoint.label}}
            </b-badge>
        </div>
    </b-list-group-item>
</template>

<script>
  import Vue from 'vue'
  import { VueDataItem } from '../types/vue'
  import { mapState } from 'vuex'

  export default Vue.extend({
    props: {
      dataItem: VueDataItem
    },
    computed: {
      ...mapState(['selectedOptions'])
    }
  })
</script>

<style>
    a.list-group-item-action.disabled,
    a.list-group-item-action[disabled] {
      cursor: default;
    }

    a.list-group-item-action.disabled div > span.badge,
    a.list-group-item-action[disabled] span.badge,
    a.list-group-item-action.disabled svg,
    a.list-group-item-action[disabled] svg {
        color: rgba(108, 117, 125, 0.5);
        background-color: #f2fafb;
        cursor: default;
    }
</style>
