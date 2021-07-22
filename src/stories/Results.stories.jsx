import React from 'react';

import { Results } from './Results';

export default {
  title: 'Example/Results',
  component: Results,
};

const Template = (args) => <Results {...args} />;

export const Votacao_1 = Template.bind({});
Votacao_1.args = {
  votes: [{"option":"Sim","count":8},{"option":"Não","count":3}],
};

export const Votacao_2 = Template.bind({});
Votacao_2.args = {
  votes: [{"option":"Sim","count":8},{"option":"Talvez","count":6},{"option":"Não","count":3}],
};

