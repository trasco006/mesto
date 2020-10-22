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
        return Promise.reject(`Ошибка: ${res.status}`);
      } else {
        return res.json()
      }
    })
  }

  /************************************************************************/
  // ФУНКЦИОНАЛ ПОЛУЧЕНИЯ СПИСКА КАРТОЧЕК //
  /************************************************************************/

  getAllCards() {
    const promise = fetch(`${this._baseUrl}cards`, {
      method: 'GET',
      headers: this._headers
    });
    return this._controlError(promise)
  }

  /************************************************************************/
  // ФУНКЦИОНАЛ ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ //
  /************************************************************************/

  addNewCard(name, src) {
    const promise = fetch(`${this._baseUrl}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: src
      })
    })
    return this._controlError(promise)
  }

  /************************************************************************/
  // ФУНКЦИОНАЛ ПОЛУЧЕНИЯ ДАННЫХ О ПОЛЬЗОВАТЕЛЕ //
  /************************************************************************/

  getUserInfo() {
    const promise = fetch(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: this._headers
    })
    return this._controlError(promise)
  }

  /************************************************************************/
  // ФУНКЦИОНАЛ ОТПРАВКИ ДАННЫХ О ПОЛЬЗОВАТЕЛЕ //
  /************************************************************************/

  setUserInfo(name, subtitle) {
    const promise = fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: subtitle
      })
    })
    return this._controlError(promise)
  }

  /************************************************************************/
  // ФУНКЦИОНАЛ ОТПРАВКИ НОВОГО АВАТАРА ПОЛЬЗОВАТЕЛЯ //
  /************************************************************************/

  setUserAvatar(avatarUrl) {
    const promise = fetch(`${this._baseUrl}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarUrl
      })
    })
    return this._controlError(promise)
  }

  /************************************************************************/
  // ФУНКЦИОНАЛ УДАЛЕНИЯ КАРТОЧКИ//
  /************************************************************************/

  deleteCardById(cardId) {
    const promise = fetch(`${this._baseUrl}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    return this._controlError(promise)
  }

  /************************************************************************/
  // ФУНКЦИОНАЛ ДОБАВЛЕНИЯ ЛАЙКА//
  /************************************************************************/

  likeCard(cardId) {
    const promise = fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
    return this._controlError(promise)
  }

  /************************************************************************/
  // ФУНКЦИОНАЛ УДАЛЕНИЯ ЛАЙКА//
  /************************************************************************/

  disLikeCard(cardId) {
    const promise = fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    return this._controlError(promise)
  }

}