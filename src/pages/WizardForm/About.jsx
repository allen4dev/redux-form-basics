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
          placeholder="Alan Aliaga"
        />

        <Field
          name="email"
          component={RenderField}
          type="email"
          label="Email"
          placeholder="someEmail@example.test"
        />

        <Field
          name="username"
          component={RenderField}
          type="text"
          label="Username"
          placeholder="allen4dev"
        />

        <button type="submit" style={{ width: '100px', padding: '.5em' }}>
          Next
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'wizard',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(About);
