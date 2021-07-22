<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import VotingCard from "./VotingCard.svelte";
</script>

<Meta
  title="Example/VotingCard"
  component={VotingCard}
  argTypes={{
    votes: {
      options: [
        { option: "Sim", count: 8 },
        { option: "Não", count: 3 },
      ],
    },
    state: { control: "boolean" },
    title: { control: "text" },
  }}
/>

<Template let:args>
  <VotingCard {...args} />
</Template>

<Story
  name="Segue o relator"
  args={{
    votes: [
      {
        option: "Sim",
        count: 10,
      },
      {
        option: "Não",
        count: 3,
      },
    ],
    state: true,
    title: "Segue o relator",
  }}
/>

<Story
  name="Continuamos amanhã"
  args={{
    votes: [
      { option: "Sim", count: 8 },
      { option: "Talvez", count: 6 },
      { option: "Não", count: 3 },
    ],
    state: false,
    title: "Continuamos amanhã?",
  }}
/>
