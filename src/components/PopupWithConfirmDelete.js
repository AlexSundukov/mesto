import Popup from "./Popup.js";

export default class PopupWithConfirmDelete extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._popupForm = this._popup.querySelector(".popup__form");
}

//заменяем стандартный callback
changeSubmitHandler(newSubmitHandler) {
    this._callbackSubmit = newSubmitHandler;
}

//установка слушателей на форму
setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", evt => {
        evt.preventDefault();
        this._callbackSubmit();
    });
}
  /*
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector('popup__form');
  }
  open(card) {
    super.open();
    this._card = card
  }
  chageSubmitHandler(newSubmitHandler) {
    this._submitForm = newSubmitHandler;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._card);
    });
  } */
}