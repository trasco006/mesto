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
  inputCardSrc
} from "../utils/constants.js"
import Popup from "../components/Popup";
import Card from "../components/Card.js"
import {PopupWithForm} from "../components/PopuWithForm.js"
import {FormValidator} from "../components/FormValidator.js"
import '../../pages/index.css'
import UserInfo from "../components/UserInfo";

//привязка полей ввода попапа
inputName.value = profileName.textContent;
inputSubtitle.value = profileSubtitle.textContent;

//Функционал создания превью карточки
// const abc = new PopupWithImage('.popup-image');
const handleCardClick = (src, title) => {
  document.querySelector('.popup-image').classList.add('popup_opened');
  window.addEventListener('keydown', (evt) => this._handleEscClose(evt));
  document.querySelector('.popup-image__item').src = src;
  document.querySelector('.popup-image__item').alt = title;
  document.querySelector('.popup-image').querySelector('.popup-image__title').textContent = title;
}

//Функция создания новой карточки
function getCardElement(nameItem, linkItem, selectorItem, handleCardClick) {
  const card = new Card(nameItem, linkItem, selectorItem, handleCardClick);
  return card.generateCard();
}

//Функционал создания попапа профиля
function popupWithFormFunction([one, two]) {
  profileName.textContent = one;
  profileSubtitle.textContent = two;
}

const popupUserInfo = new PopupWithForm('.popup', popupWithFormFunction
)
editButton.addEventListener('click', () => popupUserInfo.open());

//Функционал создания попапа карточки
function popupWithCardFunction() {
  elementsContainer.prepend(getCardElement(inputCardName.value, inputCardSrc.value, '.card-template'));
}

const popupWithCard = new PopupWithForm('.popup-card', popupWithCardFunction)
addCardButton.addEventListener('click', () => popupWithCard.open());

//____СОЗАДНИЕ ЮЗЕР ИНФО
const userInfoObj = {
  name: '#input-name',
  subtitle: '#input-subtitle'
}
const userInfo = new UserInfo(userInfoObj)
userInfo.setUserInfo()


// НАЗНАЧЕНИЯ КНОПОК ПОПАПА

//Рендер карточек из массива
initialCards.forEach(function (item) {
  getCardElement(item.name, item.link, '.card-template', handleCardClick);
  elementsContainer.prepend(getCardElement(item.name, item.link, '.card-template', handleCardClick));
});


// ЗАКРЫТИЕ ПОПАПА ПРИ НАЖАТИИ НА ОВЕРЛЭЙ
popupCard.querySelector('.popup-card__overlay').addEventListener('click', () => popupWithCard.close());
popupImage.querySelector('.popup-image__overlay').addEventListener('click', () => Popup.close);
popup.querySelector('.popup__overlay').addEventListener('click', () => popupUserInfo.close());


//Включение валидации форм
const validateProfilePopup = new FormValidator(settings, '.popup__container')
validateProfilePopup.enableValidation()
const validateCardPopup = new FormValidator(settings, '.popup-card__container')
validateCardPopup.enableValidation()

