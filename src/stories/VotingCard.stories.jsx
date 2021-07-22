import React from 'react';

import { VotingCard } from './VotingCard';

export default {
  title: 'Example/VotingCard',
  component: VotingCard,
};

const Template = (args) => <VotingCard {...args} />;

export const Segue_o_relator = Template.bind({});
Segue_o_relator.args = {
  votes: [{"option":"Sim","count":12},{"option":"Não","count":7}],
  title: 'Segue o relator?',
  state: true,
  onVote: () => undefined
};

export const Continuamos_amanha = Template.bind({});
Continuamos_amanha.args = {
  votes: [{"option":"Sim","count":8},{"option":"Talvez","count":6},{"option":"Não","count":3}],
  title: "Continuamos amanhã?",
  state: false,
  onVote: () => undefined
};

