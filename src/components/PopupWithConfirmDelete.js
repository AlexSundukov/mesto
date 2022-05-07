import Popup from "./Popup.js";

export default class PopupWithConfirmDelete extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._popupForm = this._popup.querySelector(".popup__form");
  }
  changeSubmitHandler(newSubmitHandler) {
    this._callbackSubmit = newSubmitHandler;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", evt => {
      evt.preventDefault();
      this._callbackSubmit();
    });
  }
}