const EMAIL_REGEX = /^[а-яА-ЯёЁa-zA-Z0-9._%+-]+@[а-яА-ЯёЁa-zA-Z0-9.-]+\.[а-яА-ЯёЁa-zA-Z]{2,}$/;
const PHONE_REGEX = /^\+?[0-9\s\-()]*$/;
const ErrorMessage = {
  ISREQUIRED: 'Поле обязательно для заполнения',
  ERROR_PHONE: 'Введите корректный номер телефона, без букв, пример +7 (000)-000-00-00',
  ERROR_EMAIL: 'Введите корректный адрес электронной почты, пример example@example.com',
};

const formFeedback = document.querySelector('.form-feedback form');
const fieldList = formFeedback.querySelectorAll('.field-group__input');
const fieldPhone = formFeedback.querySelector('#phone');
const fieldMail = formFeedback.querySelector('#email');

//исчезновение label с input после потери фокуса
const onInputBlur = (evt) => {
  const input = evt.target;
  const label = formFeedback.querySelector(`[for="${evt.target.id}"]`);
  if (!input.value) {
    label.classList.remove('field-group__control--hidden');
  } else {
    label.classList.add('field-group__control--hidden');
  }
};

fieldList.forEach((input) => {
  input.addEventListener('blur', onInputBlur);
  input.addEventListener('input', () => {
    input.setCustomValidity('');
  });
});

const isValidEmail = (input) => EMAIL_REGEX.test(input.value);

const isValidPhone = (input) => PHONE_REGEX.test(input.value);

formFeedback.addEventListener('submit', (evt) => {
  let isValid = true;

  function validateField (input, validateFunction, message) {
    const valueInput = input.value.trim();
    if (!valueInput) {
      input.setCustomValidity(ErrorMessage.ISREQUIRED);
      input.classList.add('field-group__input--invalid');
      isValid = false;
    } else if (!validateFunction(input)) {
      input.setCustomValidity(message);
      input.classList.add('field-group__input--invalid');
      isValid = false;
    } else {
      input.setCustomValidity('');
      input.classList.remove('field-group__input--invalid');
    }
  }

  validateField(fieldPhone, isValidPhone, ErrorMessage.ERROR_PHONE);
  validateField(fieldMail, isValidEmail, ErrorMessage.ERROR_EMAIL);

  if (!isValid) {
    evt.preventDefault();
    formFeedback.reportValidity();
  }
});
