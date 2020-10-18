export default class API {
  constructor(config) {
    this._baseUrl = config.url;
    this._headers = config.headers;
  }

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

  setUserInfo(name, subtitle) {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name.textContent,
        about: subtitle.textContent
      })
    })
  }

  /************************************************************************/
  // ФУНКЦИОНАЛ ОТПРАВКИ НОВОГО АВАТАРА ПОЛЬЗОВАТЕЛЯ //
  /************************************************************************/

  setUserAvatar(avatarUrl) {
    fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarUrl
      })
    })
  }

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


}