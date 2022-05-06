export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
}

//получение данных о юзере
getUserInfo() {
    this._userInfo = {
        name: this._name.textContent,
        about: this._about.textContent  
    };
    return this._userInfo;
}

//установка новых значений о юзере
setUserInfo({ name, about, avatar }) {
    this._name.textContent = name;
    this._about.textContent = about;
    this._avatar.src = avatar;
}
  /*
  constructor({userName, aboutUser, userAvatar}) {
    this._name = document.querySelector(userName);
    this._about = document.querySelector(aboutUser);
    this._avatar = document.querySelector(userAvatar);
  }
  getUserInfo() {
    return {
      name: this._name.textContent,
      _about: this._about.textContent,
    }
  }
  setUserInfo({name, about, avatar}) {
    this._name.textContent = name;
    this._about.textContent = about;
    this._avatar.src = avatar;
  }*/
}