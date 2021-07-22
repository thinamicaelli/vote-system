<script>
  import { createEventDispatcher } from "svelte";
  import "./votingCard.css";

  export let votes = [
    {
      option: "Sim",
      count: 8,
    },
    {
      option: "Não",
      count: 3,
    },
  ];

  export let title = "Segue o relator?";

  export let state = true;

  function total() {
    let total = 0;

    votes.forEach((element) => {
      total += element.count;
    });

    return total;
  }

  const dispatch = createEventDispatcher();

  function onClick(event) {
    state = !state;
  }
</script>

<div class="card-voting-wrapper">
  <h1>
    {title}
  </h1>
  {#if state}
    <div class="card-voting-button-content">
      <button on:click={onClick}>Sim</button>
      <button on:click={onClick}>Não</button>
    </div>
  {/if}
  {#if !state}
    <div>
      <ol>
        {#each votes as vote, i}
          <li>
            {`${vote.option} - ${vote.count} votes (${Math.round(
              (vote.count * 100) / total()
            )}%)`}
          </li>
        {/each}
      </ol>
    </div>
  {/if}
</div>
