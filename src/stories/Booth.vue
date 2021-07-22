<template>
  <div>
    <button
      v-for="option in options" :key="option"
      @click.prevent="$emit('onVote')"
      @keydown.enter="$emit('onVote')"
    >
      {{ option }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Booth',
  props: {
    options: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style>

</style>