export default function validateInfo(values) {
  let errors = {};

  // full name
  if (!values.fullName) {
    errors.fullName = 'Full Name required';
  } else if (values.fullName.length < 7) {
    errors.fullName = 'Full Name needs to be 7 characters or more';
  }

  // number
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Phone number required';
  }

  return errors;
}
