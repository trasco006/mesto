import {inputName, inputSubtitle} from "../utils/constants";

export default class UserInfo {
  constructor({name, subtitle, url}) {
    this._userName = document.querySelector(name)
    this._userSubtitle = document.querySelector(subtitle)
    this._userAvatar  = document.querySelector(url)
  }

  getUserInfo() {
    const subtitle = this._userSubtitle.textContent
    const name = this._userName.textContent;
    const avatar = this._userAvatar;

    const obj = {
      name: name,
      subtitle: subtitle,
      avatar: avatar
    }

    return obj
  }

  setUserInfo(name, subtitle) {
    this._userName.textContent = name;
    this._userSubtitle.textContent = subtitle
  }

  setUserAvatar(avatarUrl) {
    this._userAvatar.style.backgroundImage = `url(${avatarUrl})`
  }

}
