import React from 'react';
import { reduxForm, Field } from 'redux-form';

import RenderField from './RenderField';

import validate from './../../utils/validate';

const Hobbies = ({ handleSubmit, previousPage }) => {
  return (
    <div className="Hobbies">
      <h2 className="Hobbies-title">Hobbies</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="random"
          type="text"
          component={RenderField}
          label="Random"
          placeholder="Random"
        />
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
  form: 'hobbiesForm',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(Hobbies);
