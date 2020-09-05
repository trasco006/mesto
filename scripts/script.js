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

// ЛОГИКА ОТКРЫТИЯ ПОПАПА
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
  if (!popupCard.classList.contains('popup-card_opened')) {
    popupCard.classList.toggle('popup-card_opened');
  }
}

function closeCardPopup() {
  if (popupCard.classList.contains('popup-card_opened')) {
    popupCard.classList.toggle('popup-card_opened');
  }
}

// НАЗНАЧЕНИЕ КНОПОК ПОПАПА-КАРТОЧКИ
addCardButton.addEventListener('click', openCardPopup);
escapeCardButton.addEventListener('click', closeCardPopup)
formAddCard.addEventListener('submit', formSubmitHandler);

// ЛОГИКА ДОБАВЛЕНИЯ КАРТОЧКИ
const elementsContainer = document.querySelector('.elements');

function closeImageCard() {
  if (popupImage.classList.contains('popup-image_opened')) {
    popupImage.classList.toggle('popup-image_opened');
  }
}

function cardAdding(cardName, cardSrc) {
  const cardTemplate = document.querySelector('.card-template').content;
  const cardItem = cardTemplate.cloneNode(true);

  cardItem.querySelector('.card__image').src = cardSrc;
  cardItem.querySelector('.card__image').alt = cardName;
  cardItem.querySelector('.card__title').textContent = cardName;
  cardItem.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card_liked');
  });

  // ЛОГИКА УДАЛЕНИЯ КАРТОЧКИ
  const cardRemoveButton = cardItem.querySelector('.card__trash-can');
  cardRemoveButton.addEventListener('click', function () {
    cardRemoveButton.parentElement.remove();
  })

  // ЛОГИКА ЗУМА ИЗОБРАЖЕНИЯ
  const imageZoomButton = cardItem.querySelector('.card__image');
  elementsContainer.prepend(cardItem);

  function openCardImage() {
    if (!popupImage.classList.contains('popup-image_opened')) {
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
    imageZoomEscapeButton.addEventListener('click', closeImageCard)
  })
}

// ФУНКЦИЯ ОТПРАВКИ ДАННЫХ НА СЕРВЕР
function formSubmitHandler(evt) {
  evt.preventDefault();
  cardAdding(inputCardName.value, inputCardSrc.value);
  closeCardPopup()
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

// ФУНКЦИЯ ЗАКРЫТИЯ
const closeAll = function () {
  closeImageCard();
  closePopup();
  closeCardPopup()
}

// ЗАКРЫТИЕ ПОПАПА ПРИ НАЖАТИИ НА ОВЕРЛЭЙ
let mass = [
  document.querySelector('.popup-card__overlay'),
  document.querySelector('.popup-image__overlay'),
  document.querySelector('.popup__overlay')
]

mass.forEach(value => value.addEventListener('click', function () {
  closeAll()
}))

// ЗАКРЫТИЕ ОКНА ЧЕРЕЗ ESC
window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closeAll()
  }
})

// ЛОГИКА ВАЛИДАЦИИ ФОРМЫ
const formValid = (form) => {
  const inputsList = Array.from(form.querySelectorAll('input'));

//ВАЛИДАЦИЯ ИНПУТОВ
  inputsList.forEach((evt) => {
    evt.addEventListener('input', function () {
        if (!evt.validity.valid) {
          saveButtonDisable()
          evt.classList.add('input_invalid');
          if (evt.type === 'url') {
            evt.nextElementSibling.textContent = 'Введите адрес сайта.';
          } else {
            if (evt.value.length == 0) {
              evt.nextElementSibling.textContent = 'Вы пропустили это поле.';
            } else {
              evt.nextElementSibling.textContent = (`Минимальное количество символов: ` + evt.minLength + `. Длина текста сейчас:   ` + evt.value.length + ` символ`);
            }
          }
        } else {
          saveButtonDisable()
          evt.classList.remove('input_invalid');
          evt.nextElementSibling.textContent = ''
        }
      }
    )
  })

//ПРОВЕРКА НА ИНВАЛИДНЫЕ ИНПУТЫ
  const formVal = (inputsList) => {
    return inputsList.some((evt) => {
      return !evt.validity.valid;
    })
  }

  //ОТКЛЮЧЕНИЕ КНОПКИ САБМИТА
  const saveButton = form.querySelector('.save__button');
  const saveButtonDisable = () => {
    if (formVal(inputsList)) {
      saveButton.classList.add('popup__save-button_disabled');
      saveButton.setAttribute("disabled", "disabled")
    } else {
      saveButton.classList.remove('popup__save-button_disabled')
      saveButton.removeAttribute("disabled", "disabled")
    }
  }


}

formValid(popupCard)
formValid(popup)