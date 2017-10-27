import React from 'react';
import { reduxForm, Field } from 'redux-form';

import RenderField from './RenderField';

import validate from './../../utils/validate';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const Hobbies = ({ handleSubmit, previousPage }) => {
  return (
    <div className="Hobbies">
      <h2 className="Hobbies-title">Hobbies</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="artist"
          type="text"
          component={RenderField}
          label="Favorite Artist"
          placeholder="N"
        />

        <div>
          <label>Sports</label>
          <div>
            <label>
              <Field
                type="radio"
                component="input"
                name="sports"
                value="soccer"
              />
              Soccer
            </label>

            <label>
              <Field
                type="radio"
                component="input"
                name="sports"
                value="volleyball"
              />
              VolleyBall
            </label>

            <label>
              <Field
                type="radio"
                component="input"
                name="sports"
                value="esports"
              />
              ESports
            </label>
          </div>

          <Field name="sports" component={renderError} />
        </div>

        <div className="btn-group">
          <button type="button" onClick={previousPage}>
            Prev
          </button>
          <button type="submit">Finish</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'wizard',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Hobbies);
