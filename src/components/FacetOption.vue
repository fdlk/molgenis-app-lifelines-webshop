<template>
    <b-button :variant="variant" :active="active" @click="$emit('facetToggled')" size="sm">{{label}}</b-button>
</template>

<script>
  export default {
    name: 'FacetOption',
    props: {
      label: {
        type: String,
        required: true
      },
      active: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    computed: {
      variant () {
        return this.active ? 'primary' : 'outline-primary'
      }
    }
  }
</script>

<style scoped>
    button {
        margin: 0.2rem;
        min-width: 4rem;
    }

    button.btn-outline-primary:hover {
        background-color: #a3e1ea;
    }
</style>
