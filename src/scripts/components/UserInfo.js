import {profileName, profileSubtitle} from "../utils/constants";

export default class UserInfo {
  constructor({name, subtitle}) {
    this._userName = name;
    this._userSubtitle = subtitle
  }

  getUserInfo() {
    const subtitle = document.querySelector(this._userSubtitle).value
    const name = document.querySelector(this._userName).value;
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
