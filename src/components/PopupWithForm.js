import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this._button = this._popupForm.querySelector('.popup__button');
    this._buttonTextContent = this._button.textContent;
  }
  _getInputValues() {
    this._inputValues = {}
    this._inputList.forEach(input => {
        this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", evt => {
        evt.preventDefault();
        this._submitForm(this._getInputValues());
    });
  }
  close() {
      super.close();
      this._popupForm.reset();
  }
  renderLoading(loading){
    if(loading){
        this._button.textContent = 'Cохранение...';
    } else {
        this._button.textContent = this._buttonTextContent;
    }
  }
}