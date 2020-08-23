///////////////////////////////////////////// ДОБАВЛЕНИЕ ПОПАПА ИЗМЕНЕНИЯ ДАННЫХ ПРОФИЛЯ
const editButton = document.querySelector('.profile__edit-button');
const formEditProfile = document.querySelector('.popup__container')
const popup = document.querySelector('.popup');

// ОБЪЯВЛЕНИЕ КНОПОК ПОПАПА
const escapeButton = document.querySelector('.popup__escape-button');

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
