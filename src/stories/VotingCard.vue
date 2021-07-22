<template>
  <div>
    <template v-if="isOpen">
      <div class="card-voting-wrapper">
        <h1>
          {{ title }}
        </h1>
        <div>
          <button @click="handleClick">
            Sim
          </button>
          <button @click="handleClick">
            Não
          </button>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="card-voting-wrapper">
        <h1>
          {{ title }}
        </h1>
        <div>
          <ol>
            <li v-for="vote in votes" :key="vote">
              {{ `${vote.option} - ${vote.count} votes (${Math.round ((vote.count* 100) / totalVotes) }%)` }}
            </li>
          </ol>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'VotingCard',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    votes: {
      type: Array,
      required: true,
      default: () => []
    },
    state: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      isOpen: this.state
    }
  },
  methods: {
    handleClick() {
      this.isOpen = !this.isOpen
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
.card-voting-wrapper {
  border: 1px solid rgb(34, 65, 150);
  border-radius: 15px;
  background-color: rgb(166, 200, 224);
  padding: 10px;
  font-family: Tahoma, Verdana, sans-serif;
}
</style>