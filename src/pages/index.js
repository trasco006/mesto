import {
  profileName,
  inputName,
  profileSubtitle,
  addCardButton,
  inputSubtitle,
  elementsContainer,
  editButton,
  popup,
  popupImage,
  popupCard,
  initialCards,
  inputCardName,
  settings,
  inputCardSrc,
  avatarEditButton
} from "../scripts/utils/constants.js"
import Popup from "../scripts/components/Popup.js";
import Card from "../scripts/components/Card.js"
import API from "../scripts/components/API.js"
import PopupWithImage from "../scripts/components/PopuWithImage";
import {PopupWithForm} from "../scripts/components/PopuWithForm.js"
import {FormValidator} from "../scripts/components/FormValidator.js"
import './index.css'
import UserInfo from "../scripts/components/UserInfo";

const api = new API({
  url:'https://mesto.nomoreparties.co/v1/cohort-16/cards',
  headers: {
  authorization: '9db189b4-a6aa-4209-b940-24fafffd59d9'
  }
  })
const cards = api.getAllCards();
cards.then((data) => {const cardsList = data;
return cardsList})

// открытие попапа изменения аватара
const selectAvatarFunction = (item) => {
  document.querySelector('.profile__avatar').style.backgroundImage = `url(${item[0]})`;
}
const popupAvatar = new PopupWithForm('.popup-avatar', selectAvatarFunction)
avatarEditButton.addEventListener('click', () => {
  popupAvatar.open();
})

//привязка полей ввода попапа
inputName.value = profileName.textContent;
inputSubtitle.value = profileSubtitle.textContent;

//Функционал создания превью карточки
const popupWithImageElement = new PopupWithImage('.popup-image');
const handleCardClick = (src, title) => {
  popupWithImageElement.open(src, title)
}


const acceptDeleteSubmit = (evt) => {
  console.log('Попап закрыт')
}

export const acceptDelete = new PopupWithForm('.popup-delete', acceptDeleteSubmit)
const acceptDeleteFunction = () => {
  acceptDelete.open()
}

//Функция создания новой карточки

function getCardElement(nameItem, linkItem, selectorItem, handleCardClick, acceptDeleteFunction) {
  const card = new Card(nameItem, linkItem, selectorItem, handleCardClick, acceptDeleteFunction);
  return card.generateCard();
}

//Функционал создания попапа карточки
function popupWithCardFunction() {
  elementsContainer.prepend(getCardElement(inputCardName.value, inputCardSrc.value, '.card-template', handleCardClick, acceptDeleteFunction));
}

const popupWithCard = new PopupWithForm('.popup-card', popupWithCardFunction)
addCardButton.addEventListener('click', () => popupWithCard.open());


// НАЗНАЧЕНИЯ КНОПОК ПОПАПА

//Рендер карточек из массива
initialCards.forEach(function (item) {
  elementsContainer.prepend(getCardElement(item.name, item.link, '.card-template', handleCardClick, acceptDeleteFunction));
});


// ЗАКРЫТИЕ ПОПАПА ПРИ НАЖАТИИ НА ОВЕРЛЭЙ
popupCard.querySelector('.popup-card__overlay').addEventListener('click', () => popupWithCard.close());
popupImage.querySelector('.popup-image__overlay').addEventListener('click', () => popupWithImageElement.close());
popup.querySelector('.popup__overlay').addEventListener('click', () => popupUserInfo.close())


//Включение валидации форм
const validateProfilePopup = new FormValidator(settings, '.popup__container')
validateProfilePopup.enableValidation()
const validateCardPopup = new FormValidator(settings, '.popup-card__container')
validateCardPopup.enableValidation()
const validateAvatarPopup = new FormValidator(settings, '.popup-avatar__container')
validateAvatarPopup.enableValidation()

//____СОЗАДНИЕ ЮЗЕР ИНФО
const userInfoObj = {
  name: '.profile__user-name',
  subtitle: '.profile__subtitle'
}
const userInfo = new UserInfo(userInfoObj)

function popupWithFormFunction() {
  userInfo.setUserInfo()
}

const popupUserInfo = new PopupWithForm('.popup', popupWithFormFunction)
editButton.addEventListener('click', () => popupUserInfo.open(userInfo.getUserInfo()));


// Вызов обработчиков
popupWithImageElement.setEventListeners()
popupUserInfo.setEventListeners()
popupWithCard.setEventListeners()
popupAvatar.setEventListeners()
acceptDelete.setEventListeners()
