import Results from './Results';

export default {
  title: 'Example/Results',
  component: Results,
  argTypes: {
    votes: { votes: [
      {
        "option": "Sim",
        "count": 8
      },
      {
        "option": "Não",
        "count": 3
      }
    ] }
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Results },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Results v-bind="args" />',
});

export const Votacao_1 = Template.bind({});
Votacao_1.args = {
  votes: 
    [
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

export const Sim_Nao_Talvez = Template.bind({});
Sim_Nao_Talvez.args = {
  votes: [{"option":"Sim","count":8},{"option":"Talvez","count":6},{"option":"Não","count":3}]
};

