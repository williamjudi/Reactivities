import { useField } from 'formik';
import React from 'react';
import { Form, Label } from 'semantic-ui-react';

interface Props {
  placeholder: string;
  name: string;
  type?: string;
  label?: string;
}

export default function InputField(props: Props) {
  const [field, meta] = useField(props.name);

  return (
    <>
      <Form.Field error={meta.touched && !!meta.error}>
        <label>{props.label}</label>
        <input {...field} {...props} />
        {meta.error && meta.touched ? (
          <Label basic color='red' pointing content={meta.error} />
        ) : null}
      </Form.Field>
    </>
  );
}
