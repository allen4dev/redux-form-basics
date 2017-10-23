import React from 'react';
import { Field, reduxForm } from 'redux-form';

function validate(values) {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length < 5) {
    errors.username = 'Must be at least 5 characters';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
}

function renderField({ input, label, type, meta: { touched, error } }) {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
}

const SynchronousValidation = props => {
  const { handleSubmit, reset, submitting, pristine } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        component={renderField}
        type="text"
        label="Username"
      />

      <Field name="email" component={renderField} type="email" label="Email" />

      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
      <button onClick={reset} disabled={submitting}>
        Clear fields
      </button>
    </form>
  );
};

export default reduxForm({
  form: 'syncValidation',
  validate,
})(SynchronousValidation);
