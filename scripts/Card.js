import { openPopup } from "./index.js.js";

// Класс создания template - карточки 
export default class Card {
  constructor(data, cardSelector) {
    this._titleCard = data.name;
    this._linkCard = data.link;
    this._cardSelector = cardSelector; 
  };
// Создание карточки
  _createCard() {
    const cardTemplate = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardTemplate;
  };
// Заполнение карточки 
  _compilationCard() {
    this._cardName.textContent = this._titleCard;
    this._cardImage.src = this._linkCard;
    this._cardImage.alt = this._titleCard;
  };
// Метод лайка
  _like() {
    this._cardLike.classList.toggle('element__like_active');
  };
// Метод удаления карточки 
  _delete() {
    this._cardElement.remove();
  };
// Открытие попап image 
  _openPopupImage() {
    this._popupCapture.src = this._cardImage.src;
    this._popupCapture.alt = this._cardImage.src;
    this._captureName.textContent = this._cardName.textContent;
    openPopup();
  };
// Слушатели событий
  _setEventListeners() {
    this._cardLike.addEventListener('click', this._like);
    this._cardDelete.addEventListener('click', this._delete);
    this._cardImage.addEventListener('click', this._openPopupImage);
  };
// Вставка карточки 
  addCard() {
    this._cardElement = this._createCard();
    this._cardImage = this._cardElement.querySelector('.element__image');
    this._cardName = this._cardElement.querySelector('.element__name');
    this._cardLike = this._cardElement.querySelector('.element__like');
    this._cardDelete = this._cardElement.querySelector('.element__delete');
    this._compilationCard();
    this._setEventListeners();
    return this._cardElement;
  };
}

