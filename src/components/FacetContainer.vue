<template>
    <div>
        <Facet v-for="facet in this.facets" :categoricalFacet="facet" :key="facet.id"></Facet>
    </div>
</template>

<script>
  import Facet from '../components/Facet.vue'
  export default {
    name: 'FacetContainer',
    components: { Facet },
    props: {
      title: {
        type: String,
        required: false
      },
      facets: {
        type: Array,
        required: true
      }
    }
  }
</script>

