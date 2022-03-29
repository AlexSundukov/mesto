// Класс карточки
export default class Card {
  constructor(data, cardSelector, handleClickCard) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleClickCard = handleClickCard;
  }
// Получение шаблона карточки 
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content.querySelector('.element')
    .cloneNode(true);
    return cardElement;
  }
// Метод лайка
  _like() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }
// Метод удаление карточки
  _delete() {
    this._element.remove();
    this._element = null
  }
// Все слушатели кликов карточки
  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._like();
    })
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._delete();
    })
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleClickCard(this._name, this._link)
    });
  }
// Создание карточки
  addCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._element.querySelector('.element__name').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }
}
