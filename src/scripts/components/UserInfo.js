import {profileName, profileSubtitle} from "../utils/constants";

export default class UserInfo {
  constructor({name, subtitle}) {
    this._userName = document.querySelector(name)
    this._userSubtitle = document.querySelector(subtitle)
  }

  getUserInfo() {
    const subtitle = this._userSubtitle.value
    const name = this._userName.value;
    // const subtitle = document.querySelector(this._userSubtitle).value
    // const name = document.querySelector(this._userName).value;

    return {
      name, subtitle
    }
  }
  setUserInfo() {
    profileName.textContent = this.getUserInfo().name;
    profileSubtitle.textContent = this.getUserInfo().subtitle;
  }
}
