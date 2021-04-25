import React from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import { observer } from 'mobx-react-lite';
import { Button, Header, Label } from 'semantic-ui-react';
import InputField from '../../app/common/form/InputField';
import { useStore } from '../../app/stores/store';
import * as Yup from 'yup';
import ValidationErrors from '../errors/ValidationErrors';

export default observer(function RegisterForm() {
  const { userStore } = useStore();

  return (
    <Formik
      initialValues={{
        displayName: '',
        username: '',
        email: '',
        password: '',
        error: null,
      }}
      onSubmit={(values, { setErrors }) =>
        userStore.register(values).catch((error) => setErrors({ error: error }))
      }
      validationSchema={Yup.object({
        displayName: Yup.string().required(),
        username: Yup.string().required(),
        email: Yup.string().required().email(),
        password: Yup.string().required(),
      })}
    >
      {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
        <Form
          className='ui form error'
          onSubmit={handleSubmit}
          autoComplete='off'
        >
          <Header
            as='h2'
            content='Sign up to Reactivities'
            color='teal'
            textAlign='center'
          />
          <InputField
            type='text'
            name='displayName'
            placeholder='Display Name'
          />
          <InputField type='text' name='username' placeholder='Username' />
          <InputField type='email' name='email' placeholder='Email' />
          <InputField type='password' name='password' placeholder='Password' />
          <ErrorMessage
            name='error'
            render={() => <ValidationErrors errors={errors.error} />}
          />
          <Button
            disabled={!isValid || !dirty || isSubmitting}
            type='submit'
            loading={isSubmitting}
            positive
            content='Register'
            fluid
          />
        </Form>
      )}
    </Formik>
  );
});
