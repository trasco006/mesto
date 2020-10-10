export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupEscapeButton = this._popup.querySelector('.popup_close_button');
  }

  setEventListeners() {
    this._popupEscapeButton.addEventListener('click', () => {
      this.close()
    })
  }

  open() {
    this.setEventListeners()
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', (evt) => this._handleEscClose(evt))
  }

  close() {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', (evt) => this._handleEscClose(evt))
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close(this._popup);
    }

  }

}



