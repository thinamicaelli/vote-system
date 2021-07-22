<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Booth from "./Booth.svelte";
</script>

<Meta
  title="Example/Booth"
  component={Booth}
  argTypes={{
    options: { options: ["Sim", "Não"] },
  }}
/>

<Template let:args>
  <Booth {...args} on:click={args.onClick} />
</Template>

<Story
  name="Sim/Não"
  args={{
    options: ["Sim", "Não"],
  }}
/>

<Story
  name="Sim/Não/Talvez"
  args={{
    options: ["Sim", "Não", "Talvez"],
  }}
/>
