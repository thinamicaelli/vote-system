import React from 'react';
import { Input, Form,  Choice} from "@rocketseat/unform";
import * as Yup from 'yup';

import './index.css'

export function FormVote({onVote}) {
  const schema = Yup.object().shape({
    fullname: Yup.string()
      .min(5, "The FULL name is only this?")
      .required("Full name is required."),
    choice: Yup.string().required("choice is required."),
  });

  const handleSubmit = (data, { resetForm }) => {
    console.log(data);
    onVote(data)
    resetForm();
};
  return (
    <Form onSubmit={handleSubmit} schema={schema} className="form">
        <Input name="fullname" label="Full name" />
        <Input name="phone" label="Phone" />
        <Input name="email" label="Email" />
        <Choice
          name="choice"
          options={[{ value: 'Sim', label: 'Sim' }, { value: 'Não', label: 'Não' }]}
        />
        <button type="submit">VOTAR</button>
      </Form>
  );
}