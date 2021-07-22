<script>
  import { createEventDispatcher } from "svelte";

  export let options = ["Sim", "Não"];

  const dispatch = createEventDispatcher();

  function onClick(event) {
    dispatch("click", event);
  }
</script>

<div>
  {#each options as option, i}
    <button on:click={onClick}>
      {option}
    </button>
  {/each}
</div>
