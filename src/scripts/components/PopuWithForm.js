import {
  inputName,
  profileSubtitle,
  inputSubtitle,
  editButton,
} from "../utils/constants.js"
import Popup from "./Popup.js";
import UserInfo from "./UserInfo.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitFunction) {
    super(popupSelector);
    this._submitFunction = submitFunction;
    this._firstInput = this._popup.querySelector('.form__input_first')
    this._secondInput = this._popup.querySelector('.form__input_second')
  }

  _getInputValues() {
    if (this._firstInput) {
    return [this._firstInput.value, this._secondInput.value]}
  }

  open(data) {
    super.open()
    if (data) {
    inputName.value = data.name;
    inputSubtitle.value = data.subtitle;}
  }

  close() {
    super.close()
    if (this._firstInput && this._secondInput) {
      this._firstInput.value = ''
      this._secondInput.value = ''
    }
  }

  setEventListeners() {
    super.setEventListeners()
    this._popup.querySelector('.save__button').addEventListener('click',
      (evt) => {
        evt.preventDefault();
        this._submitFunction(this._getInputValues());
        this.close()
      }
    )
  }


}

