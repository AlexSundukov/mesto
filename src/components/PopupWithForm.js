import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, callbackSubmit) {
    super(popupSelector);
    this._callbackSubmit = callbackSubmit;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this._button = this._popupForm.querySelector('.popup__button');
    this._buttonText = this._button.textContent;
}

//закрытие формы
close() {
    super.close();
    this._popupForm.reset();
}

//отрисовка состояния ожидания у submit кнопки
renderWaitingStatus(status){
    if(status){
        this._button.textContent = 'Cохранение...';
    } else {
        this._button.textContent = this._buttonText;
    }
}

//получение значений из инпутов формы
_getInputValues() {
    this._inputValues = {}
    this._inputList.forEach(input => {
        this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
}

//установка слушателей на форму
setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", evt => {
        evt.preventDefault();
        this._callbackSubmit(this._getInputValues());
    });
}
  /*
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector('.popup__form');
    this._inputSet = this._popup.querySelectorAll('.popup__input');
    this._button = this._popup.querySelector('.popup__button');
    this._buttonTextContent = this._button.textContent;
  }
  _getInputValues() {
    this._inputValues = {};
    this._inputSet.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }
  close() {
    super.close();
    this._popupForm.reset();
  }
  renderLoading(loading) {
    if(loading) {
      this._button.textContent = 'Сохранение...';
    } else {
      this._button.textContent = this._buttonTextContent;
    }
  }*/
}