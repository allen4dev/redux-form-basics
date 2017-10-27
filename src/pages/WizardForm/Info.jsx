import React from 'react';

import { reduxForm, Field } from 'redux-form';

import RenderField from './RenderField';

import validate from './../../utils/validate';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const Info = ({ previousPage, handleSubmit }) => {
  return (
    <div className="Info">
      <h2 className="Info-title">Info</h2>
      <form className="Info-form" onSubmit={handleSubmit}>
        <Field
          name="something"
          type="text"
          component={RenderField}
          placeholder="Something"
        />
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" type="radio" component="input" value="male" />
            Male
          </label>

          <label>
            <Field name="sex" type="radio" component="input" value="female" />
            Female
          </label>

          <Field name="sex" component={renderError} />
        </div>

        <div className="btn-group">
          <button type="button" onClick={previousPage}>
            Prev
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'wizard',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Info);
