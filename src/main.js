const menuBtnOpen = document.querySelector('.js-open-menu');
const menuBtnClose = document.querySelector('.js-close-menu');
const modal = document.querySelector('.js-modal');
const modalLinks = document.querySelectorAll('.modal-link');

const form = document.querySelector('.newsletter-form');
const email = document.querySelector('.emailInput');
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const openModal = () => {
  menuBtnOpen.classList.add('hide');
  menuBtnClose.classList.remove('hide');
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  menuBtnOpen.classList.remove('hide');
  menuBtnClose.classList.add('hide');
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
};

modalLinks.forEach((link) => {
  link.addEventListener('click', function () {
    closeModal();
  });
});

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

menuBtnOpen.addEventListener('click', openModal);
menuBtnClose.addEventListener('click', closeModal);

form.addEventListener('submit', handleSubmit);
email.addEventListener('input', handleInput);
