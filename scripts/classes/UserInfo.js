export default class UserInfo {
  constructor({userName, userDescription}) {
    this._name = userName;
    this._description = userDescription;
  }
  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      description: this._description.textContent,
    }
    return userData
  }
  setUserInfo({newUserName, newUserDescription}) {
    this._name.textContent = newUserName;
    this._description.textContent = newUserDescription;
  }
}