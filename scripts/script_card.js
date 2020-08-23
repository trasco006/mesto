///////////////////////////////////////////// ДОБАВЛЕНИЕ ПОПАП-КАРТОЧКИ

// ОБЪЯВЛЕНИЕ ПОПАПА-КАРТОЧКИ И КНОПКИ ДОБАВЛЕНИЯ КАРТОЧКИ
const popupCard = document.querySelector('.popup-card');
const addCardButton = document.querySelector('.profile__add-button');
const formAddCard = document.querySelector('.popup-card__container')
const popupImage = document.querySelector('.popup-image')

// ОБЪЯВЛЕНИЕ КНОПОК ПОПАПА-КАРТОЧКИ
const escapeCardButton = document.querySelector('.popup-card__escape-button');

// ОБЪЯВЛЕНИЕ ПОЛЕЙ ВВОДА ПОПАПА-КАРТОЧКИ
const inputCardName = document.querySelector('.popup-card__input_name');
const inputCardSrc = document.querySelector('.popup-card__input_src');

// ЛОГИКА ОТКРЫТИЯ-ЗАКРЫТИЯ ПОПАПА-КАРТОЧКИ
function openCardPopup() {
  if (popupCard.classList.contains('popup-card_opened')) {
    popupCard.classList.toggle('popup-card_opened');
  } else {
    popupCard.classList.toggle('popup-card_opened');
  }
}

// НАЗНАЧЕНИЕ КНОПОК ПОПАПА-КАРТОЧКИ
addCardButton.addEventListener('click', openCardPopup);
escapeCardButton.addEventListener('click', openCardPopup)
formAddCard.addEventListener('submit', formSubmitHandler);

// ЛОГИКА ДОБАВЛЕНИЯ КАРТОЧКИ
const elementsContainer = document.querySelector('.elements');

function cardAdding(cardName, cardSrc) {
  const cardTemplate = document.querySelector('.card-template').content;
  const cardItem = cardTemplate.cloneNode(true);

  cardItem.querySelector('.card__image').src = cardSrc;
  cardItem.querySelector('.card__image').alt = cardName;
  cardItem.querySelector('.card__title').textContent = cardName;
  cardItem.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card_liked');
  });

  elementsContainer.prepend(cardItem);

  // ЛОГИКА УДАЛЕНИЯ КАРТОЧКИ
  const cardRemoveButton = document.querySelector('.card__trash-can'); //TODO: Разобраться почему не работает поиск в cardItem
  cardRemoveButton.addEventListener('click', function () {
    cardRemoveButton.parentElement.remove();
  })

  // ЛОГИКА ЗУМА ИЗОБРАЖЕНИЯ

  const imageZoomButton = document.querySelector('.card__image'); //TODO: Разобраться почему не работает поиск в cardItem


  function openCardImage() {
    if (!popupImage.classList.contains('popup-image_opened')) {
      popupImage.classList.toggle('popup-image_opened');
    }
  }

  function cardImageClose() {
    if (popupImage.classList.contains('popup-image_opened')) {
      popupImage.classList.toggle('popup-image_opened');
    }
  }

  const imageZoomTitle = document.querySelector('.popup-image__title');
  const imageZoomEscapeButton = document.querySelector('.popup-image__escape-button');
  const imageZoomItem = document.querySelector('.popup-image__item');

  imageZoomButton.addEventListener('click', function (evt) {
    openCardImage()
    imageZoomItem.src = cardSrc;
    imageZoomItem.alt = cardName;
    imageZoomTitle.textContent = cardName;
    imageZoomEscapeButton.addEventListener('click', cardImageClose)
  })


}

// ФУНКЦИЯ ОТПРАВКИ ДАННЫХ НА СЕРВЕР
function formSubmitHandler(evt) {
  evt.preventDefault();
  cardAdding(inputCardName.value, inputCardSrc.value);
  openCardPopup();
}

// ДОБАВЛЕНИЕ ПЕРВЫХ ШЕСТИ КАРТОЧЕК
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

initialCards.forEach(function (value, index) {
  cardAdding(value.name, value.link);
});

