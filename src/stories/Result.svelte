<script>
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

  function total() {
    let total = 0;

    votes.forEach((element) => {
      total += element.count;
    });

    return total;
  }
</script>

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
