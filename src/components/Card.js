// Класс карточки
export default class Card {
  constructor({ data, handleCardClick, handleDeleteClick, handleLikeClick }, cardSelector, userId) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
  }
  // Получение шаблона карточки 
  _getTemplate() {
      const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector('.element')
      .cloneNode(true);
      return cardElement;
  }
  // Запись лайка
  isLiked() {
    const userLiked = this._likes.find(user => user._id === this._userId);
    return userLiked;
  }
  // Счётчик лайка
  setLikes(likes) {
    this._likes = likes;      
    this._countLike.textContent = this._likes.length;
    if (this.isLiked()) {
        this._likeButton.classList.add('element__like_active');
    }
    else {
        this._likeButton.classList.remove('element__like_active');
    }
  }
  // Метод удаление карточки
  delete() {
    this._element.remove();
    this._element = null;
  }
  // Все слушатели кликов карточки
  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
        this._handleLikeClick(this._id, this);
    });
    this._deleteButton.addEventListener('click', () => {
        this._handleDeleteClick(this._id, this);
    });
    this._elementImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
    });
  }
  // Создание карточки
  createCard() {
      this._element = this._getTemplate();
      this._elementImage = this._element.querySelector('.element__image');
      this._elementImage.src = this._link;
      this._elementImage.alt = this._name;
      this._deleteButton = this._element.querySelector('.element__delete');
      this._elementName = this._element.querySelector('.element__name');
      this._elementName.textContent = this._name;
      this._countLike = this._element.querySelector('.element__count');
      this._likeButton = this._element.querySelector('.element__like');
      if (this._ownerId !== this._userId) {
          this._deleteButton.style.display = 'none';
      }
      this.setLikes(this._likes);
      this._setEventListeners();
      return this._element;
  }
}
