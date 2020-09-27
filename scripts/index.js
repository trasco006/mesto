import {Card} from './Card.js'
import {FormValidator} from "./FormValidator.js"
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
const inputName = document.querySelector('#input-name');
const inputSubtitle = document.querySelector('#input-subtitle');
inputName.value = profileName.textContent;
inputSubtitle.value = profileSubtitle.textContent;
// УНИВЕРСАЛЬНАЯ ЛОГИКА ОТКРЫТИЯ ПОПАПА
const openPopup = (item) => {
  if (!popup.classList.contains('popup_opened')) {
  }
  item.classList.add('popup_opened');
  window.addEventListener('keydown', exitByEsc)
}

// УНИВЕРСАЛЬНАЯ ЛОГИКА ЗАКРЫТИЯ ПОПАПА
const closePopup = (item) => {
  item.classList.remove('popup_opened');
  window.removeEventListener('keydown', exitByEsc)
}

// ФУНКИЯ ОТПРАВКИ ФОРМЫ ПОПАПА
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputSubtitle.value;
  closePopup(popup);
}

// НАЗНАЧЕНИЯ КНОПОК ПОПАПА
editButton.addEventListener('click', () => openPopup(popup));
escapeButton.addEventListener('click', () => closePopup(popup));
formEditProfile.addEventListener('submit', formSubmitHandler);

///////////////////////////////////////////// ДОБАВЛЕНИЕ ПОПАП-КАРТОЧКИ

// ОБЪЯВЛЕНИЕ ПОПАПА-КАРТОЧКИ И КНОПКИ ДОБАВЛЕНИЯ КАРТОЧКИ
const popupCard = document.querySelector('.popup-card');
const addCardButton = document.querySelector('.profile__add-button');
const formAddCard = document.querySelector('.popup-card__container')
const popupImage = document.querySelector('.popup-image')

// ОБЪЯВЛЕНИЕ КНОПОК ПОПАПА-КАРТОЧКИ
const escapeCardButton = document.querySelector('.popup-card__escape-button');

// ОБЪЯВЛЕНИЕ ПОЛЕЙ ВВОДА ПОПАПА-КАРТОЧКИ
const inputCardName = document.querySelector('#input-card-name');
const inputCardSrc = document.querySelector('#input-url');

////// ЛОГИКА ДОБАВЛЕНИЯ КАРТОЧКИ
const elementsContainer = document.querySelector('.elements');

// МАССИВ ШЕСТИ КАРТОЧЕК
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Рендер карточек из массива
initialCards.forEach(function (item) {
  const card = new Card(item.name, item.link, '.card-template');
  const cardElement = card.generateCard();
  elementsContainer.prepend(cardElement);
});

// ОТПРАВКА ФОРМЫ КАРТЫ
const submitCard = (evt) => {
  evt.preventDefault();
  const card = new Card(inputCardName.value, inputCardSrc.value, '.card-template');
  const cardElement = card.generateCard();
  elementsContainer.prepend(cardElement);
  closePopup(popupCard);
}

// НАЗНАЧЕНИЕ КНОПОК ПОПАПА-КАРТОЧКИ
addCardButton.addEventListener('click', () => openPopup(popupCard));
escapeCardButton.addEventListener('click', () => closePopup(popupCard));
formAddCard.addEventListener('submit', submitCard);

// ЗАКРЫТИЕ ПОПАПА ПРИ НАЖАТИИ НА ОВЕРЛЭЙ
document.querySelector('.popup-card__overlay').addEventListener('click', () => closePopup(popupCard));
document.querySelector('.popup-image__overlay').addEventListener('click', () => closePopup(popupImage));
document.querySelector('.popup__overlay').addEventListener('click', () => closePopup(popup));

// ЗАКРЫТИЕ ОКНА ЧЕРЕЗ ESC
const exitByEsc = (evt) => {
  const activePopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(activePopup);
  }
}


const settings = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const validateProfilePopup = new FormValidator(settings, '.popup__container')
validateProfilePopup.enableValidation()
const validateCardPopup = new FormValidator(settings, '.popup-card__container')
validateCardPopup.enableValidation()