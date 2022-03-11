// Импорт функции открытия попапа
import { openPopup } from "./Utils.js";
import { popupPlace, popupImage, captureName } from './Constants.js'
// Класс карточки
export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  };
// Получение шаблона карточки 
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content.querySelector('.element')
    .cloneNode(true);
    return cardElement;
  };
// Открытие попап image
  _openPopupImage() {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    captureName.textContent = this._name;
    openPopup(popupPlace);
  };
// Все слушатели кликов карточки
  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__like_active');
    });
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._element.remove();
      this._element = null
    });
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._openPopupImage();
    });
  };
// Создание карточки
  addCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__name').textContent = this._name;
    this._setEventListeners();
    return this._element;
  };
};

