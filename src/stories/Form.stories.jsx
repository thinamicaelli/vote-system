import React from 'react';

import { FormVote } from '../components/Form/index';

export default {
  title: 'Example/FormVote',
  component: FormVote,
};

const Template = (args) => <FormVote {...args} />;

export const vote = Template.bind({});
vote.args = {
  onVote: () => {},
};

