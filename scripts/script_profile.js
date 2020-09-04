///////////////////////////////////////////// ДОБАВЛЕНИЕ ПОПАПА ИЗМЕНЕНИЯ ДАННЫХ ПРОФИЛЯ
const editButton = document.querySelector('.profile__edit-button');
const formEditProfile = document.querySelector('.popup__container')
const popup = document.querySelector('.popup');

// ОБЪЯВЛЕНИЕ КНОПОК ПОПАПА
const escapeButton = document.querySelector('.popup__escape-button');
const popupSaveButton = popup.querySelector('.popup__save-button ')

// ОБЪЯВЛЕНИЕ ДАННЫХ ПРОФИЛЯ
const profileName = document.querySelector('.profile__user-name');
const profileSubtitle = document.querySelector('.profile__subtitle');

// ОБЪЯВЛЕНИЕ ПОЛЕЙ ВООДА ПОПАПА
const inputName = document.querySelector('.popup__input_name');
const inputSubtitle = document.querySelector('.popup__input_subtitle');

// ЛОГИКА ОТКРЫТИЯ-ЗАКРЫТИЯ ПОПАПА
function popupOpen() {
  if (popup.classList.contains('popup_opened')) {
    popup.classList.toggle('popup_opened');
  } else {
    popup.classList.toggle('popup_opened');
    inputName.value = profileName.textContent;
    inputSubtitle.value = profileSubtitle.textContent;
  }
}

function closePopup() {
  if (popup.classList.contains('popup_opened')) {
    popup.classList.toggle('popup_opened');
  }
}

// ФУНКИЯ ОТПРАВКИ ФОРМЫ ПОПАПА
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputSubtitle.value;
  popupOpen();
}

// НАЗНАЧЕНИЯ КНОПОК ПОПАПА
editButton.addEventListener('click', popupOpen);
escapeButton.addEventListener('click', popupOpen);
formEditProfile.addEventListener('submit', formSubmitHandler);

//..............................ВАЛИДАЦИЯ

// ЛОГИКА ВАЛИДАЦИЯ ПОПАПА
const popupValidation = () => {
  const popupInputNameError = formEditProfile.querySelector('#profile-input1')
  const popupInputSubtitleError = formEditProfile.querySelector('#profile-input2')

  //ВАЛИДАЦИЯ ПОЛЯ "ИМЯ"
  inputName.addEventListener('input', function () {
    if (inputName.value.length == 0) {
      inputName.classList.add('input_invalid');
      buttonOff()
      popupInputNameError.textContent = 'Вы пропустили это поле.'
    } else if (inputName.value.length == 1) {
      inputName.classList.add('input_invalid');
      buttonOff()
      popupInputNameError.textContent = 'Минимальная количество символов: 2. Длина текста сейчас: 1 символ.'
    } else {
      inputName.classList.remove('input_invalid')
      popupInputNameError.textContent = ''
      buttonOff()
    }
  });

  //ВАЛИДАЦИЯ ПОЛЯ "О СЕБЕ"
  inputSubtitle.addEventListener('input', function () {
    if (inputSubtitle.value.length == 0) {
      inputSubtitle.classList.add('input_invalid');
      buttonOff()
      popupInputSubtitleError.textContent = 'Вы пропустили это поле.'
    } else if (inputSubtitle.value.length == 1) {
      inputSubtitle.classList.add('input_invalid')
      buttonOff()
      popupInputSubtitleError.textContent = 'Минимальная количество символов: 2. Длина текста сейчас: 1 символ.'
    } else {
      inputSubtitle.classList.remove('input_invalid')
      popupInputSubtitleError.textContent = ''
      buttonOff()
    }
  })

  //ВЫКЛЮЧЕНИЕ КНОПКИ ПРИ ВАЛИДАЦИИ
  const buttonOff = () => {
    if (inputSubtitle.value.length < 2 || inputName.value.length < 2) {
      popupSaveButton.classList.add('popup__save-button_disabled');
      popupSaveButton.setAttribute("disabled", "disabled")
    } else {
      popupSaveButton.classList.remove('popup__save-button_disabled')
        popupSaveButton.removeAttribute("disabled", "disabled")
    }
  }
}


popupValidation()

