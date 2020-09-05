// ЛОГИКА ВАЛИДАЦИИ ФОРМЫ
const formValid = (form) => {
  const inputsList = Array.from(form.querySelectorAll('input'));

//ВАЛИДАЦИЯ ИНПУТОВ
  inputsList.forEach((evt) => {
    evt.addEventListener('input', function () {
        if (!evt.validity.valid) {
          saveButtonDisable()
          evt.classList.add('input_invalid');
          if (evt.type === 'url') {
            evt.nextElementSibling.textContent = 'Введите адрес сайта.';
          } else {
            if (evt.value.length == 0) {
              evt.nextElementSibling.textContent = 'Вы пропустили это поле.';
            } else {
              evt.nextElementSibling.textContent = (`Минимальное количество символов: ` + evt.minLength + `. Длина текста сейчас:   ` + evt.value.length + ` символ`);
            }
          }
        } else {
          saveButtonDisable()
          evt.classList.remove('input_invalid');
          evt.nextElementSibling.textContent = ''
        }
      }
    )
  })

//ПРОВЕРКА НА ИНВАЛИДНЫЕ ИНПУТЫ
  const formVal = (inputsList) => {
    return inputsList.some((evt) => {
      return !evt.validity.valid;
    })
  }

  //ОТКЛЮЧЕНИЕ КНОПКИ САБМИТА
  const saveButton = form.querySelector('.save__button');
  const saveButtonDisable = () => {
    if (formVal(inputsList)) {
      saveButton.classList.add('popup__save-button_disabled');
      saveButton.setAttribute("disabled", "disabled")
    } else {
      saveButton.classList.remove('popup__save-button_disabled')
      saveButton.removeAttribute("disabled", "disabled")
    }
  }


}

formValid(popupCard)
formValid(popup)