// Класс валидиции формы 
export default class FormValidator {
  constructor(config, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }
// Показ ошибки
  _showError(inputElement, errorMessage) {
    this._errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._errorClass);
    inputElement.classList.add(this._inputErrorClass);
  }
// Скрытие ошибки
  _hideError(inputElement) {
    this._errorElement = this._formSelector.querySelector(`.${inputElement.id}-error`);
    this._errorElement.textContent = '';
    this._errorElement.classList.remove(this._errorClass);
    inputElement.classList.remove(this._inputErrorClass);
  }
// Проверка валидации
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  }
//Функция hasInvalidInput возвращает true или false в зависимости от того, есть ли в массиве inputList невалидное поле
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }
// Переключение состояние кнопки
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }
  disableButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }
// Применение стилей
  _setEventListeners() {
    this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    })
  }
// Включение валидции 
  enableValidation() {
    this._setEventListeners();
  }
}
