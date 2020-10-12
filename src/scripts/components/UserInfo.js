import {inputName, inputSubtitle, profileName, profileSubtitle} from "../utils/constants";

export default class UserInfo {
  constructor({name, subtitle}) {
    this._userName = document.querySelector(name)
    this._userSubtitle = document.querySelector(subtitle)
  }

  getUserInfo() {
    const subtitle = this._userSubtitle.textContent
    const name = this._userName.textContent;

    const obj = {
      name: name,
      subtitle: subtitle
    }
    return obj
  }

    setUserInfo()
    {
      this._userName.textContent = inputName.value;
      this._userSubtitle.textContent = inputSubtitle.value
    }
  }
