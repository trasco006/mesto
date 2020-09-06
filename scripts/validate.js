// ПОКАЗВАЕТ ОШИБКУ ИНПУТА
const showInputError = (formObj, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(formObj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formObj.errorClass);
};

// УБИРАЕТ ОШИБКУ ИНПУТА
const hideInputError = (formObj, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(formObj.inputErrorClass);
  errorElement.classList.remove(formObj.errorClass);
  errorElement.textContent = '';
};

// ВАЛИДАЦИЯ ИНПУТОВ
const checkInputValidity = (formObj, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formObj, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formObj, formElement, inputElement);
  }
};

// ПРОВЕРКА НА ИНВАЛИДНЫЕ ИНПУТЫ
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })}


// ДЕАКТИВАЦИЯ КНОПКИ САБМИТА
const toggleButtonState = (formObj, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formObj.inactiveButtonClass)
  } else {
    buttonElement.classList.remove(formObj.inactiveButtonClass)
  }
}

// ДОБАВЛЕНИЕ СЛУШАТЕЛЕЙ
const setEventListeners = (formObj, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(formObj.inputSelector));
  const buttonElement = formElement.querySelector(formObj.submitButtonSelector)
  toggleButtonState(formObj, inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formObj, formElement, inputElement);
      toggleButtonState(formObj, inputList, buttonElement)
    });
  });
};

// ЗАПУСК ВАЛИДАЦИИ
const enableValidation = (formObj) => {
  const formList = Array.from(document.querySelectorAll(formObj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formObj, formElement);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});