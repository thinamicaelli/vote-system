<template>
  <div>
    <ol>
      <li v-for="vote in votes" :key="vote">
        {{ `${vote.option} - ${vote.count} votes (${Math.round ((vote.count* 100) / totalVotes) }%)` }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Results',
  props: {
    votes: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    totalVotes() {
      let total = 0
  
      this.votes.forEach(element => {
        total += element.count
      });

      return total
    }
  }
}
</script>

<style>

</style>