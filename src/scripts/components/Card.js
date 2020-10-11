export default class Card {
  constructor(title, imageLink, cardSelector, handleCardClick) {
    this._title = title;
    this._imageLink = imageLink;
    this._cardSelector = cardSelector;
    this._popupImage = document.querySelector('.popup-image');
    this._popupImageItem = document.querySelector('.popup-image__item')
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._cardImg = this._element.querySelector('.card__image');
  }

  _closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
      this._closeCardImagePopup()
    }
  }

  _getTemplate() {
    return document.querySelector(this._cardSelector).content.cloneNode(true);

  }

  _likeCard(evt) {
    evt.target.classList.toggle('card_liked')
  }

  _removeCard(evt) {
    evt.target.parentElement.remove()
  }

  _openCardImagePopup() {
   // this._popupImage.classList.add('popup_opened');
   // window.addEventListener('keydown', (evt) => this._closePopupByEsc(evt))
  }

  _closeCardImagePopup() {
    this._popupImage.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._closePopupByEsc)
  }

  _previewCard() {
    this._openCardImagePopup()
    this._popupImageItem.src = this._imageLink;
    this._popupImageItem.alt = this._title;
    this._popupImage.querySelector('.popup-image__title').textContent = this._title;

  }

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', (evt) => {
      this._likeCard(evt)
    });
    this._element.querySelector('.card__trash-can').addEventListener('click', (evt) => {
      this._removeCard(evt)
    });
    this._element.querySelector('.card__image').addEventListener('click', () => {
      // this._previewCard()
      this._handleCardClick(this._imageLink, this._title)
    });

    this._popupImage.querySelector('.popup-image__escape-button').addEventListener('click', () => this._closeCardImagePopup())
  }

  generateCard() {
    this._setEventListeners()
    this._cardImg.src = this._imageLink;
    this._cardImg.alt = this._title;
    this._element.querySelector('.card__title').textContent = this._title;
    return this._element;
  }
}

