export default class API {
  constructor(config) {
    this._baseUrl = config.url;
    this._headers = config.headers;
  }

<<<<<<< HEAD
  disLikeCard(cardId) {
    fetch(this._url, {
      method: 'DELETE',
      headers: this._headers,
=======
  /************************************************************************/
  // ПРОВЕРКА ЗАПРОСА НА ОШИБКИ//
  /************************************************************************/

  _controlError(promise) {
    return promise.then((res) => {
      if (!res.ok) {
        return console.log(`Ошибка: ${res.status}`);
      } else {
        return res.json()
      }
>>>>>>> FEATURE
    })
  }

  /************************************************************************/
  // ФУНКЦИОНАЛ ПОЛУЧЕНИЯ СПИСКА КАРТОЧЕК //
  /************************************************************************/

  getAllCards() {
    let promise = fetch(`${this._baseUrl}cards`, {
      method: 'GET',
      headers: this._headers
    });
    return this._controlError(promise)
  }

  /************************************************************************/
  // ФУНКЦИОНАЛ ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ //
  /************************************************************************/

  addNewCard(name, src) {
    return fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: src
      })
    })
  }

  /************************************************************************/
  // ФУНКЦИОНАЛ ПОЛУЧЕНИЯ ДАННЫХ О ПОЛЬЗОВАТЕЛЕ //
  /************************************************************************/

  getUserInfo() {
    let promise = fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._headers
    })
    return this._controlError(promise)
  }

  /************************************************************************/
  // ФУНКЦИОНАЛ ОТПРАВКИ ДАННЫХ О ПОЛЬЗОВАТЕЛЕ //
  /************************************************************************/

<<<<<<< HEAD
  newCardAdding(name, src) {
    fetch(this._url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: src
=======
  setUserInfo(name, subtitle) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name.textContent,
        about: subtitle.textContent
>>>>>>> FEATURE
      })
    })
  }

<<<<<<< HEAD
  setUserAvatar(avatarUrl) {
    fetch(this._url, {
=======
  /************************************************************************/
  // ФУНКЦИОНАЛ ОТПРАВКИ НОВОГО АВАТАРА ПОЛЬЗОВАТЕЛЯ //
  /************************************************************************/

  setUserAvatar(avatarUrl) {
    fetch(`${this._baseUrl}users/me/avatar`, {
>>>>>>> FEATURE
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarUrl
      })
    })
  }

<<<<<<< HEAD
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
=======
  /************************************************************************/
  // ФУНКЦИОНАЛ УДАЛЕНИЯ КАРТОЧКИ//
  /************************************************************************/

  deleteCardById(cardId) {
    return fetch(`${this._baseUrl}cards${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
  }


  disLikeCard(cardId) {
    fetch(this._baseUrl, {
      method: 'DELETE',
      headers: this._headers,
    })
  }

  likeCard(cardId) {
    fetch(this._url, {
      method: 'PUT',
      headers: this._headers,
    })
  }

>>>>>>> FEATURE

}