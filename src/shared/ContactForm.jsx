import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactForm = props => {
  const { handleSubmit, pristine, submitting, reset } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="firstName" component="input" type="text" />
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button disabled={pristine || submitting} type="submit">
        Submit
      </button>
      <button disabled={pristine || submitting} type="submit" onClick={reset}>
        Clear Fields
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'contact',
})(ContactForm);
