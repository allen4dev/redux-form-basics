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

  if (!values.artist) {
    errors.artist = `Required`;
  }

  if (!values.sports) {
    errors.sports = `Required`;
  }

  return errors;
};
