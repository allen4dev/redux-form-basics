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

  if (!values.sex) {
    errors.sex = 'Required';
  }

  if (!values.something) {
    errors.something = 'Required';
  }

  if (!values.random) {
    errors.random = `Field ${values.random} is required`;
  }

  return errors;
};
