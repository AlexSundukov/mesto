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

//получение данных карточки из шаблона
_getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content.querySelector('.element')
    .cloneNode(true);
    return cardElement;
}

//генерация карточки
generateCard() {
    this._element = this._getTemplate();
    this._elementPhoto = this._element.querySelector('.element__image');
    this._countLikeElement = this._element.querySelector('.element__count');
    this._likeButton = this._element.querySelector('.element__like');
    this._elementPhoto.src = this._link;
    this._elementPhoto.alt = this._name;
    this._element.querySelector('.element__name').textContent = this._name;
    if (this._ownerId !== this._userId) {
        this._element.querySelector('.element__delete').style.display = 'none';
    }
    this.setLikes(this._likes);
    this._setEventListeners();
    return this._element;
}

//удаление карточки из DOM
removeItem() {
    this._element.remove();
    this._element = null;
}

//проверка лайка от текущего пользователя
isLiked() {
    const userHasLikedCard = this._likes.find(user => user._id === this._userId);
    return userHasLikedCard;
}

//простановка лайков на карточку
setLikes(newLikes) {
    this._likes = newLikes;      
    this._countLikeElement.textContent = this._likes.length;
    if (this.isLiked()) {
        this._likeButton.classList.add('element__like_active');
    }
    else {
        this._likeButton.classList.remove('element__like_active');
    }
}

//установка слушателей на карточку
_setEventListeners() {
    this._likeButton.addEventListener('click', () => {
        this._handleLikeClick(this._id);
    });
    this._element.querySelector('.element__delete').addEventListener('click', () => {
        this._handleDeleteClick(this._id);
    });
    this._elementPhoto.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
    });
}
  /*
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
  } */
}
