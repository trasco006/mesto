export default class API {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers
  }

  getAllCards() {
    const promise =  fetch(this._url, {
      method: 'GET',
      headers: this._headers
    });
    const promise2 = promise.then((res) => {
        return res.json()
      })
    return promise2;
  }

}