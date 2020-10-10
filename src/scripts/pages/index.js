import {
  profileName,
  inputName,
  profileSubtitle,
  inputSubtitle,
  editButton
} from "../utils/constants.js"

import {Card} from "../components/Card.js"
import Popup from "../components/Popup.js"
import {PopupWithImage} from "../components/PopuWithImage.js"
import {PopupWithForm} from "../components/PopuWithForm.js"
import {FormValidator} from "../components/FormValidator.js"
import '../../pages/index.css'
import UserInfo from "../components/UserInfo";

//поля ввода попапа
inputName.value = profileName.textContent;
inputSubtitle.value = profileSubtitle.textContent;

// ФУНКИЯ ОТПРАВКИ ФОРМЫ ПОПАПА
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputSubtitle.value;
  closePopup(popup);
}

//Функция создания новой карточки
function getCardElement(nameItem, linkItem, selectorItem) {
  const card = new Card(nameItem, linkItem, selectorItem);
  return card.generateCard();
}


//____СОЗДАНИЕ ЭКЗЕМПЛЯРА ПОПАП
function popupWithFormFunction([one, two]) {
  profileName.textContent = one;
  profileSubtitle.textContent = two;
}
const popupUserInfo = new PopupWithForm('.popup', popupWithFormFunction
)


//____СОЗАДНИЕ ЮЗЕР ИНФО
const userInfoObj = {
  name: '#input-name',
  subtitle: '#input-subtitle'
}
const userInfo = new UserInfo(userInfoObj)
userInfo.setUserInfo()







// НАЗНАЧЕНИЯ КНОПОК ПОПАПА
editButton.addEventListener('click', () => popupUserInfo.open());

//Рендер карточек из массива
initialCards.forEach(function (item) {
  // getCardElement(item.name, item.link, '.card-template');
  elementsContainer.prepend(getCardElement(item.name, item.link, '.card-template'));
});
// ОТПРАВКА ФОРМЫ КАРТЫ
const submitCard = (evt) => {
  evt.preventDefault();
  elementsContainer.prepend(getCardElement(inputCardName.value, inputCardSrc.value, '.card-template'));
  closePopup(popupCard);
}

// НАЗНАЧЕНИЕ КНОПОК ПОПАПА-КАРТОЧКИ
addCardButton.addEventListener('click', () => openPopup(popupCard));
escapeCardButton.addEventListener('click', () => closePopup(popupCard));
// formAddCard.addEventListener('submit', submitCard);

// ЗАКРЫТИЕ ПОПАПА ПРИ НАЖАТИИ НА ОВЕРЛЭЙ
popupCard.querySelector('.popup-card__overlay').addEventListener('click', () => closePopup(popupCard));
popupImage.querySelector('.popup-image__overlay').addEventListener('click', () => closePopup(popupImage));
popup.querySelector('.popup__overlay').addEventListener('click', () => closePopup(popup));

// ЗАКРЫТИЕ ОКНА ЧЕРЕЗ ESC
const exitByEsc = (evt) => {
  const activePopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(activePopup);
  }
}

const validateProfilePopup = new FormValidator(settings, '.popup__container')
validateProfilePopup.enableValidation()
const validateCardPopup = new FormValidator(settings, '.popup-card__container')
validateCardPopup.enableValidation()

