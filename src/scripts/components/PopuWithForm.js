import {
  profileName,
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
  }

  _getInputValues() {
    const firstInputValue = this._popup.querySelector('.form__input_first').value;
    const secondInputValue = this._popup.querySelector('.form__input_second').value;
    return [firstInputValue, secondInputValue]
  }

  close() {
    super.close()
    this._popup.querySelector('.form__input_first').value = ''
    this._popup.querySelector('.form__input_second').value = ''
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

