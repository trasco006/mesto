///////////////////////////////////////////// ДОБАВЛЕНИЕ ПОПАПА ИЗМЕНЕНИЯ ДАННЫХ ПРОФИЛЯ
let editButton = document.querySelector('.profile__edit-button');
let formEditProfile = document.querySelector('.popup__container')
let popup = document.querySelector('.popup');

// ОБЪЯВЛЕНИЕ КНОПОК ПОПАПА
let escapeButton = document.querySelector('.popup__escape-button');

// ОБЪЯВЛЕНИЕ ДАННЫХ ПРОФИЛЯ
let profileName = document.querySelector('.profile__user-name');
let profileSubtitle = document.querySelector('.profile__subtitle');

// ОБЪЯВЛЕНИЕ ПОЛЕЙ ВООДА ПОПАПА
let inputName = document.querySelector('.popup__input_name');
let inputSubtitle = document.querySelector('.popup__input_subtitle');

// ЛОГИКА ОТКРЫТИЯ-ЗАКРЫТИЯ ПОПАПА
function popupOpen() {
    if (popup.classList.contains('popup_opened') === true) {
        popup.classList.toggle('popup_opened');
    } else {
        popup.classList.toggle('popup_opened');
        inputName.value = profileName.textContent;
        inputSubtitle.value = profileSubtitle.textContent;
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
