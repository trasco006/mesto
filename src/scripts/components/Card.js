import {likeCard} from "../../pages/index.js";

export default class Card {
  constructor(title, imageLink, cardSelector, handleCardClick, acceptDeleteFunction, data, user) {
    this._title = title;
    this._imageLink = imageLink;
    this._cardSelector = cardSelector;
    this._popupImage = document.querySelector('.popup-image');
    this._popupImageItem = document.querySelector('.popup-image__item')
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._cardImg = this._element.querySelector('.card__image');
    this._closePopupByEsc = this._closePopupByEsc.bind(this);
    this._acceptDeleteFunction = acceptDeleteFunction;
    this._owner = data.owner
    this._cardId = data._id
    this._user = user
    this._likes = data.likes
    this._user = user
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
    likeCard(this._cardId).likeCard(this._cardId)
    document.querySelector('.card__likes-number').textContent = this._likes.length + 1;
  }

  _removeCard(evt) {
    evt.target.parentElement.remove()
  }

  _openCardImagePopup() {
    this._popupImage.classList.add('popup_opened');
    window.addEventListener('keydown', this._closePopupByEsc)
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

  _getCardId() {
    return this._cardId
  }

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', (evt) => {
      this._likeCard(evt)
      console.log(this._user._id)
    });
    this._element.querySelector('.card__trash-can').addEventListener('click', (evt) => {
        const aar = {
          client: evt.target.parentElement,
          server: this._cardId
        }
        this._acceptDeleteFunction(aar
        );
        // console.log(evt.target.parentElement)
      }
    );
    this._element.querySelector('.card__image').addEventListener('click', () => {
        this._handleCardClick(this._imageLink, this._title)
        console.log(this._owner._id !== this._user._id)

      console.log(this._user)

      }
      // this._previewCard()
    );

    this._popupImage.querySelector('.popup-image__escape-button').addEventListener('click', () => this._closeCardImagePopup())
  }

  generateCard() {
    this._setEventListeners();
    this._cardImg.src = this._imageLink;
    this._cardImg.alt = this._title;
    this._element.querySelector('.card__title').textContent = this._title;
    this._user.then(res => {
      if (this._owner._id !== res._id) {
        return res._id
      }
    })
    this._element.querySelector('.card__trash-can').remove()
    return this._element;
  }
}

