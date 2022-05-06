class Api {
    constructor({ baseUrl, headers }) {
      this._headers = headers;
      this._baseUrl = baseUrl;
    }

    //проверка ответа
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    //получение данных профиля
    getProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        }).then(this._checkResponse)
    }

    //получение данных о карточках
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        }).then(this._checkResponse)
    }
  
    //редактирование профиля
    editProfile(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name,
                about
            })
        }).then(this._checkResponse)
    }

    //добавление карточки
    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name,
                link
            })
        }).then(this._checkResponse)
    }

    //удаление карточки
    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers
        }).then(this._checkResponse)
    }

    //удаление лайка
    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this._headers
        }).then(this._checkResponse)
    }

    //добавление лайка
    addLike(id) {
        return fetch(`${this._baseUrl}/cards/${id}/likes`, {
            method: "PUT",
            headers: this._headers
        }).then(this._checkResponse)
    }

    //смена аватара
    changeAvatar(src) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: src
            })
        }).then(this._checkResponse)
    }
  }

//создание экземпляра класса
export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-40',
  headers: {
    authorization: 'd21adb5f-c1ac-431e-85ec-36d6b7954bb8',
    'Content-Type': 'application/json'
  }
});