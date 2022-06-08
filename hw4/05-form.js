let form = document.querySelector('form');
const defaultValue = 'no submission';

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // Add your code here
  const username = form.elements.username;
  const usernameValue =
    username.value.length > 0 ? username.value : defaultValue;

  const email = form.elements.email;
  const emailValue = email.value.length > 0 ? email.value : defaultValue;

  const signup = form.elements.signup;
  let selected = defaultValue;
  for (const radioButton of signup) {
    if (radioButton.checked) {
      selected = radioButton.value;
      break;
    }
  }

  const date = form.elements.date;
  const dateValue = date.value.length > 0 ? date.value : defaultValue;
  if (
    usernameValue === defaultValue &&
    emailValue === defaultValue &&
    selected === defaultValue &&
    dateValue === defaultValue
  ) {
    console.warn('You must enter some data to submit this form');
  } else {
    console.group('================ Form Submission ==================');
    console.log('Username: ' + usernameValue);
    console.log('Email: ' + emailValue);
    console.log('Newsletter: ' + selected);
    console.log('Date: ' + dateValue);
    console.groupEnd();
  }

  event.preventDefault();
}
