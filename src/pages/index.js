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
  popupImageItem
} from "../scripts/utils/constants.js"
import Popup from "../scripts/components/Popup.js";
import Card from "../scripts/components/Card.js"
import PopupWithImage from "../scripts/components/PopuWithImage";
import {PopupWithForm} from "../scripts/components/PopuWithForm.js"
import {FormValidator} from "../scripts/components/FormValidator.js"
import './index.css'
import UserInfo from "../scripts/components/UserInfo";

//привязка полей ввода попапа
inputName.value = profileName.textContent;
inputSubtitle.value = profileSubtitle.textContent;

//Функционал создания превью карточки
const popupWithImageElement = new PopupWithImage('.popup-image');
const handleCardClick = (src, title) => {
  popupWithImageElement.open(src, title)
}

//Функция создания новой карточки
function getCardElement(nameItem, linkItem, selectorItem, handleCardClick) {
  const card = new Card(nameItem, linkItem, selectorItem, handleCardClick);
  return card.generateCard();
}

//Функционал создания попапа карточки
function popupWithCardFunction() {
  elementsContainer.prepend(getCardElement(inputCardName.value, inputCardSrc.value, '.card-template', handleCardClick));
}

const popupWithCard = new PopupWithForm('.popup-card', popupWithCardFunction)
addCardButton.addEventListener('click', () => popupWithCard.open());


// НАЗНАЧЕНИЯ КНОПОК ПОПАПА

//Рендер карточек из массива
initialCards.forEach(function (item) {
  elementsContainer.prepend(getCardElement(item.name, item.link, '.card-template', handleCardClick));
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
editButton.addEventListener('click', () => popupUserInfo.openWithData(userInfo.getUserInfo()));


// Вызов обработчиков
popupWithImageElement.setEventListeners()
popupUserInfo.setEventListeners()
popupWithCard.setEventListeners()


