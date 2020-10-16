import {
  inputCardName, inputCardSrc,
  profileName,
  profileSubtitle,
} from "../utils/constants.js"

export default class API {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  newCardAdding(name, src) {
    fetch(this._url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: src
      })
    })
  }

  setUserInfo() {
    fetch(this._url, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: profileName.textContent,
        about: profileSubtitle.textContent
      })
    })
  }

  getUserInfo() {
    const promise = fetch(this._url, {
      method: 'GET',
      headers: this._headers
    })
    const promise1 = promise.then((res) => {
      return res.json()
    })
    return promise1;
  }

  getAllCards() {
    const promise = fetch(this._url, {
      method: 'GET',
      headers: this._headers
    });
    const promise2 = promise.then((res) => {
      return res.json()
    })
    return promise2;
  }

}