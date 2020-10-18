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
<<<<<<< HEAD
// ПОЛУЧЕНИЕ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ
const userProfileInfo = new API({
  url: 'https://mesto.nomoreparties.co/v1/cohort-16/users/me',
  headers: {
    authorization: '9db189b4-a6aa-4209-b940-24fafffd59d9',
  }
})
const userProfile = userProfileInfo.getUserInfo()
const newUserAvatar = new API({
  url: 'https://mesto.nomoreparties.co/v1/cohort-16/users/me/avatar ',
=======

/****************************************************************************/
// СОЗДАНИЕ ЭКЗЕМПЛЯРА API //
/****************************************************************************/

const api = new API({
  url: "https://mesto.nomoreparties.co/v1/cohort-16/",
>>>>>>> FEATURE
  headers: {
    authorization: '9db189b4-a6aa-4209-b940-24fafffd59d9',
    'Content-Type': 'application/json'
  }
})



// открытие попапа изменения аватара
const selectAvatarFunction = (item) => {
  document.querySelector('.profile__avatar').style.backgroundImage = `url(${item[0]})`;
  api.setUserAvatar(item[0])
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

// УДАЛЕНИЕ С СЕРВЕРА КАРТОЧКИ
export const likeCard = (cardId) => {
  return new API({
    url: `https://mesto.nomoreparties.co/v1/cohort-16/cards/likes/${cardId}`,
    headers: {
      authorization: '9db189b4-a6aa-4209-b940-24fafffd59d9',
      'Content-Type': 'application/json'
    }
  })
}

/************************************************************************/
// УДАЛЕНИЕ КАРТОЧКИ//
/************************************************************************/

const acceptDeleteSubmit = (item) => {
  // console.log(item)
  item.client.remove()
  const a = api.deleteCardById(item.server)
}
// const acceptDeleteConst = new PopupWithForm('.popup-delete', acceptDeleteSubmit);
const acceptDelete = (item) => {
  return new PopupWithForm('.popup-delete', function () {
    acceptDeleteSubmit(item)
  })
};
const acceptDeleteFunction = (item) => {
  const a = acceptDelete(item);
  a.setEventListeners()
  a.open()
}

//Функция создания новой карточки
function getCardElement(nameItem, linkItem, selectorItem, handleCardClick, acceptDeleteFunction, data, user) {
  const card = new Card(nameItem, linkItem, selectorItem, handleCardClick, acceptDeleteFunction, data, user);
  return card.generateCard();
}

<<<<<<< HEAD
=======
/************************************************************************/
// ПОЛУЧЕНИЕ ИНФОРМЦИИ О ПОЛЬЗОВАТЕЛЕ //
/************************************************************************/

const userProfile = api.getUserInfo()
>>>>>>> FEATURE

/************************************************************************/
// ПРИВЯЗКА ИНФОРМЦИИ О ПОЛЬЗОВАТЕЛЕ К ВЁРСТКЕ//
/************************************************************************/
userProfile.then((data) => {
  profileName.textContent = data.name;
  profileSubtitle.textContent = data.about;
  document.querySelector('.profile__avatar').style.backgroundImage = `url(${data.avatar})`
})
//____СОЗАДНИЕ ЮЗЕР ИНФО
const userInfoObj = {
  name: '.profile__user-name',
  subtitle: '.profile__subtitle'
}
const userInfo = new UserInfo(userInfoObj)
function popupWithFormFunction() {
  userInfo.setUserInfo()
  newUserProfileInfo.setUserInfo()
}

const popupUserInfo = new PopupWithForm('.popup', popupWithFormFunction)
editButton.addEventListener('click', () => popupUserInfo.open(userInfo.getUserInfo()));

/************************************************************************/
// ОТПРАВКА ИЗМЕНЁННЫХ ДАННЫХ О ПОЛЬЗОВАТЕЛЕ //
/************************************************************************/

<<<<<<< HEAD
//Рендер карточек из массива
// initialCards.forEach(function (item) {
//   elementsContainer.prepend(getCardElement(item.name, item.link, '.card-template', handleCardClick, acceptDeleteFunction));
// });
const cardList = new API({
  url: 'https://mesto.nomoreparties.co/v1/cohort-16/cards',
  headers: {
    authorization: '9db189b4-a6aa-4209-b940-24fafffd59d9'
  }
})
const cards = cardList.getAllCards();
const cardsList = cards.then((data) => {
  data.forEach(function (data) {
    elementsContainer.prepend(getCardElement(data.name, data.link, '.card-template', handleCardClick, acceptDeleteFunction, data, userProfileInfo.getUserInfo() ));
=======
const cards = api.getAllCards();
const cardsList = cards.then((data) => {
  data.forEach(function (data) {
    elementsContainer.prepend(getCardElement(data.name, data.link, '.card-template', handleCardClick, acceptDeleteFunction, data, userProfile));
>>>>>>> FEATURE
    document.querySelector('.card__likes-number').textContent = data.likes.length;
  });
});

<<<<<<< HEAD
//Функционал создания попапа карточки
function popupWithCardFunction() {
  elementsContainer.prepend(getCardElement(inputCardName.value, inputCardSrc.value, '.card-template', handleCardClick, acceptDeleteFunction, '', userProfileInfo.getUserInfo()))
  newCardAdding.newCardAdding(inputCardName.value, inputCardSrc.value);
}

const popupWithCard = new PopupWithForm('.popup-card', popupWithCardFunction)
addCardButton.addEventListener('click', () => popupWithCard.open());

// ОТПРАВКА НА СЕРВЕР НОВОЙ КАРТОЧКИ
const newCardAdding = new API({
  url: ' https://mesto.nomoreparties.co/v1/cohort-16/cards',
  headers: {
    authorization: '9db189b4-a6aa-4209-b940-24fafffd59d9',
    'Content-Type': 'application/json'
  }
})
=======
/************************************************************************/
// СОЗДАНИЕ КАРТОЧКИ ВРУЧНУЮ //
/************************************************************************/

function popupWithCardFunction() {
  elementsContainer.prepend(getCardElement(inputCardName.value, inputCardSrc.value, '.card-template', handleCardClick, acceptDeleteFunction, '', userProfile))
  api.addNewCard(inputCardName.value, inputCardSrc.value);
}

const popupWithCard = new PopupWithForm('.popup-card', popupWithCardFunction)
addCardButton.addEventListener('click', () => popupWithCard.open());


>>>>>>> FEATURE
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

<<<<<<< HEAD
=======
//____СОЗАДНИЕ ЮЗЕР ИНФО
const userInfoObj = {
  name: '.profile__user-name',
  subtitle: '.profile__subtitle'
}
const userInfo = new UserInfo(userInfoObj)

function popupWithFormFunction() {
  userInfo.setUserInfo()
  api.setUserInfo(profileName, profileSubtitle)
}

const popupUserInfo = new PopupWithForm('.popup', popupWithFormFunction)
editButton.addEventListener('click', () => popupUserInfo.open(userInfo.getUserInfo()));


>>>>>>> FEATURE
// Вызов обработчиков
popupWithImageElement.setEventListeners()
popupUserInfo.setEventListeners()
popupWithCard.setEventListeners()
popupAvatar.setEventListeners()
// acceptDelete.setEventListeners()
