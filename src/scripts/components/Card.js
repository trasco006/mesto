export default class Card {
  constructor(title, imageLink, cardSelector, handleCardClick) {
    this._title = title;
    this._imageLink = imageLink;
    this._cardSelector = cardSelector;
    this._cardImage = document.querySelector('.popup-image');
    this._popupImageItem = document.querySelector('.popup-image__item')
    this._handleCardClick = handleCardClick;
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
   // this._cardImage.classList.add('popup_opened');
   // window.addEventListener('keydown', (evt) => this._closePopupByEsc(evt))
  }

  _closeCardImagePopup() {
    this._cardImage.classList.remove('popup_opened');
    window.removeEventListener('keydown', (evt) => this._closePopupByEsc(evt))
  }

  _previewCard() {
    this._openCardImagePopup()
    this._popupImageItem.src = this._imageLink;
    this._popupImageItem.alt = this._title;
    this._cardImage.querySelector('.popup-image__title').textContent = this._title;

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

    this._cardImage.querySelector('.popup-image__escape-button').addEventListener('click', () => this._closeCardImagePopup())
  }

  generateCard() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector('.card__image')
    this._setEventListeners()
    cardImage.src = this._imageLink;
    cardImage.alt = this._title;
    this._element.querySelector('.card__title').textContent = this._title;
    return this._element;
  }
}

