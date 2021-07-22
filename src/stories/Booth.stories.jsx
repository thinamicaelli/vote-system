import React from 'react';

import { Booth } from './Booth';

export default {
  title: 'Example/Booth',
  component: Booth,
};

const Template = (args) => <Booth {...args} />;

export const Sim_Nao = Template.bind({});
Sim_Nao.args = {
  options: ['Sim', 'Não'],
};

export const Sim_Nao_Talvez = Template.bind({});
Sim_Nao_Talvez.args = {
  options: ['Sim', 'Não', 'Talvez'],
};

