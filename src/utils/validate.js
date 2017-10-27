export default values => {
  const errors = {};

  if (!values.fullname) {
    errors.fullname = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  }

  if (!values.username) {
    errors.username = 'Required';
  }

  return errors;
};
