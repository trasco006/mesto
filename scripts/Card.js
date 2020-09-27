class Card {
  constructor(title, imageLink, cardSelector) {
    this._title = title;
    this._imageLink = imageLink;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.cloneNode(true);
    return cardElement;
  }

  _likeCard(evt) {
    evt.target.classList.toggle('card_liked')
  }

  _removeCard(evt) {
    evt.target.parentElement.remove()
  }

  _openCardImagePopup() {
    document.querySelector('.popup-image').classList.add('popup_opened');

  }

  _closeCardImagePopup() {
    document.querySelector('.popup-image').classList.remove('popup_opened');
  }

  _previewCard() {
    this._openCardImagePopup()
    document.querySelector('.popup-image__item').src = this._imageLink;
    document.querySelector('.popup-image__item').alt = this._title;
    document.querySelector('.popup-image__title').textContent = this._title;

  }

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', (evt) => {
      this._likeCard(evt)
    });
    this._element.querySelector('.card__trash-can').addEventListener('click', (evt) => {
      this._removeCard(evt)
    });
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._previewCard()
    });
    document.querySelector('.popup-image__escape-button').addEventListener('click', () => this._closeCardImagePopup())
    window.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        this._closeCardImagePopup()
      }
    })
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners()
    this._element.querySelector('.card__image').src = this._imageLink;
    this._element.querySelector('.card__image').alt = this._title;
    this._element.querySelector('.card__title').textContent = this._title;
    return this._element;
  }
}

export {Card};