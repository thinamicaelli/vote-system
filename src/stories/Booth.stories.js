import Booth from './Booth';

export default {
  title: 'Example/Booth',
  component: Booth,
  argTypes: {
    options: { options: ['small', 'medium', 'large'] },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Booth },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Booth v-bind="args" />',
});

export const Sim_Nao = Template.bind({});
Sim_Nao.args = {
  options: [
    "Sim",
    "Não"
  ]
};

export const Sim_Nao_Talvez = Template.bind({});
Sim_Nao_Talvez.args = {
  options: [
    "Sim",
    "Não",
    "Talvez"
  ]
};

