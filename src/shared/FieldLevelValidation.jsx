import React from 'react';
import { Field, reduxForm } from 'redux-form';

function required(value) {
  return value ? undefined : 'Required';
}

function maxLength(max) {
  return function(value) {
    return value.length > max ? `Must be ${max} or less` : undefined;
  };
}

function minLength(min) {
  return function(value) {
    return value < min ? `Must be at less ${min}` : undefined;
  };
}

function number(value) {
  return value && isNaN(Number(value)) ? 'Must be a number' : undefined;
}

function renderField({ input, label, type, meta: { error, touched } }) {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label} />

        {touched && error && <span>{error}</span>}
      </div>
    </div>
  );
}

const maxValue15 = maxLength(15);
const minValue18 = minLength(18);

const FieldLevelValidation = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        label="Username"
        component={renderField}
        validate={[required, maxValue15]}
      />

      <Field
        name="age"
        type="number"
        label="Age"
        component={renderField}
        validate={[required, number, minValue18]}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default reduxForm({
  form: 'formValidation',
})(FieldLevelValidation);
