import Popup from "./Popup.js";

export  class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(evt) {
    evt.classList.add('popup_opened');
    window.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    this._popupImageItem.src = this._imageLink;
    this._popupImageItem.alt = this._title;
    this._cardImage.querySelector('.popup-image__title').textContent = this._title;
  }
}