import React from 'react';
import { reduxForm, Field } from 'redux-form';

import RenderField from './RenderField';

import validate from './../../utils/validate';

const About = props => {
  const { handleSubmit } = props;

  return (
    <div className="About">
      <form className="About-form form" onSubmit={handleSubmit}>
        <Field
          name="fullname"
          component={RenderField}
          type="text"
          label="Fullname"
        />

        <Field
          name="email"
          component={RenderField}
          type="email"
          label="Email"
        />

        <Field
          name="username"
          component={RenderField}
          type="text"
          label="Username"
        />

        <button type="submit" style={{ width: '100px', padding: '.5em' }}>
          Next
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'aboutForm',
  validate,
})(About);
