import React from 'react';

const RenderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error },
}) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} placeholder={placeholder} />
      {touched && error && <span>{error}</span>}
    </div>
  );
};

export default RenderField;
