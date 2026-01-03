const form = document.querySelector('.newsletter-form');
const email = document.querySelector('.emailInput');
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const handleSubmit = (event) => {
  event.preventDefault();
  const emailValue = email.value.trim();
  if (emailValue === '' || !emailPattern.test(emailValue)) {
    email.classList.add('error');
  } else {
    email.classList.remove('error');
    form.reset();
  }
};

const handleInput = () => {
  if (email.classList.contains('error')) {
    email.classList.remove('error');
  }
};

form.addEventListener('submit', handleSubmit);

email.addEventListener('input', handleInput);
