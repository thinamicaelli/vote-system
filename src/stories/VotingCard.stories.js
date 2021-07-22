import VotingCard from './VotingCard';

export default {
  title: 'Example/VotingCard',
  component: VotingCard,
  argTypes: {
    title: {
      title: 'Segue o relator?'
    },
    state: {
      state: true
    },
    votes: {
      votes: [
        {
          "option": "Sim",
          "count": 8
        },
        {
          "option": "Não",
          "count": 3
        }
      ]
    }
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { VotingCard },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<VotingCard v-bind="args" />',
});

export const Segue_o_relator = Template.bind({});
Segue_o_relator.args = {
  title: 'Segue o relator?',
  state: true,
  votes: [
    {
      "option": "Sim",
      "count": 8
    },
    {
      "option": "Não",
      "count": 3
    }
  ]
};

export const Continuamos_amanha = Template.bind({});
Continuamos_amanha.args = {
  title: 'Continuamos amanhã?',
  state: false,
  votes: [
    {"option":"Sim","count":8},{"option":"Talvez","count":6},{"option":"Não","count":3}
  ]
};

