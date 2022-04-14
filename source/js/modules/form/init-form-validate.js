/* eslint-disable no-console */
import {modals} from '../modals/init-modals';
import FormsValidate from './form-validate';

const formWrappers = document.querySelectorAll('[data-validate]');

const resetForm = (form) => {
  setTimeout(() => {
    window.clearForm(form);
  }, 1000);
};

const baseValidationSuccessCallback = (e) => {
  e.preventDefault();
  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке
  const calcForm = document.getElementById('calculatorForm');
  const formData = new FormData(calcForm);
  for (let [name, value] of formData) {
    console.log(`${name} = ${value}`); // key1=value1, потом key2=value2
  }
  modals.open('modal-success');
  resetForm(e.target);

};

const baseValidationErrorCallback = (e) => {
  e.preventDefault();

};

const customExampleValidationSuccessCallback = (e) => {
  e.preventDefault();

  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке
  resetForm(e.target);
  // eslint-disable-next-line no-console
  console.log('Ваша форма успешна отправлена');
};

const calcFormHelpValidationSuccessCallback = (e) => {
  e.preventDefault();

  // В данном колбеке бэкендер будет писать запрос на отправку формы на сервер и обрабатывать возможные ошибки при отправке
  const calcFormHelp = document.getElementById('calcFormHelp');
  const formData = new FormData(calcFormHelp);
  for (let [name, value] of formData) {
    console.log(`${name} = ${value}`); // key1=value1, потом key2=value2
  }
  modals.open('modal-success');
  resetForm(e.target);
  // eslint-disable-next-line no-console
  console.log('Ваша форма успешна отправлена');
};

const customExampleValidationErrorCallback = (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.error('Отправка формы невозможна, заполните все обязательные поля');
};

const calcFormHelpValidationErrorCallback = (e) => {
  e.preventDefault();
  // eslint-disable-next-line no-console
  console.error('Отправка формы невозможна, заполните все обязательные поля');
};

const callbacks = {
  base: {
    // Колбек при успешной валидации формы при попытке её отправки
    validationSuccessCallback: baseValidationSuccessCallback,
    // Колбек при не успешной валидации формы при попытке её отправки, не связан с запросами на сервер
    validationErrorCallback: baseValidationErrorCallback,
  },
  customExample: {
    validationSuccessCallback: customExampleValidationSuccessCallback,
    calcFormHelpValidationSuccessCallback,
    validationErrorCallback: customExampleValidationErrorCallback,
  },
  calcFormCallback: {
    validationSuccessCallback:
    calcFormHelpValidationSuccessCallback,
    validationErrorCallback:
    calcFormHelpValidationErrorCallback,
  },
};

const setCustomPhoneInputsEvent = () => {
  if (document.querySelectorAll('[data-validate-type="phone"] input').length) {
    document.querySelector('html').addEventListener('input', ({target}) => {
      if (target.closest('[data-validate-type="phone"]')) {
        target.closest('[data-validate-type="phone"]').querySelector('input').dispatchEvent(new Event('input'));
      }
    });
  }
};

const initFormValidate = () => {
  if (formWrappers.length) {
    setCustomPhoneInputsEvent();
    formWrappers.forEach((wrapper) => {
      let callback = wrapper.dataset.callback;
      if (!callback) {
        callback = 'base';
      }

      const formValidate = new FormsValidate(wrapper, callbacks[callback]);
      return formValidate.init();
    });
  }
};

export {initFormValidate};
