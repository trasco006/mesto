import Popup from "./Popup.js"
import Card from "./Card.js"

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    document.querySelector('.popup-image__item').src = this._imageLink.bind(Card.this._imageLink);
    document.querySelector('.popup-image__item').alt = this._title.bind(Card.this._title);
    document.querySelector('.popup-image').querySelector('.popup-image__title').textContent = this._title.bind(Card);
  }
}