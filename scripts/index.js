// Импорты
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards } from "./initialCards.js";

// Попапы
const popups = document.querySelectorAll('.popup');

// Переменные edit
const editButton = document.querySelector('.profile__edit-button');
const popupName = document.querySelector('.popup__input_edit_name');
const popupDesc = document.querySelector('.popup__input_edit_description');
const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__description');
const popupEdit = document.querySelector('.popup_edit');
const popupEditContainer = document.querySelector('.popup__form_edit');
const popupEditButtonSave = document.querySelector('.popup__button_save');

// Переменные add
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
const popupAddContainer = document.querySelector('.popup__form_add');
const popupAddPlace = document.querySelector('.popup__input_add_place');
const popupAddImage = document.querySelector('.popup__input_add_image');
const popupAddButtonCreate = document.querySelector('.popup__button_create');

// Код валидации 
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__span-error_active'
};

const editValidator = new FormValidator(validationConfig, popupEditContainer);
const addValidator = new FormValidator(validationConfig, popupAddContainer);

editValidator.enableValidation();
addValidator.enableValidation();

// Изменение профиля
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEsc);
};

// Открытие попапа edit
editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  popupName.value = profileName.textContent;
  popupDesc.value = profileDesc.textContent;
});

// Функция закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEsc);
};

// Закрытие попапа по нажанитю на Esc
const handleEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

// Закрытие всех попапов
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    };
  });
});

// Функция изменения данных профиля
function changeProfile(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileDesc.textContent = popupDesc.value;
  popupEditButtonSave.classList.add('popup__button_disabled');
  popupEditButtonSave.disabled = true;
  closePopup(popupEdit);
};

popupEditContainer.addEventListener('submit', changeProfile);

// Открытие попапа add
addButton.addEventListener('click', () => {
  openPopup(popupAdd);
});

// Отображение карточек 
function createCards() {
  initialCards.forEach((card) => {
    const elements = document.querySelector('.elements');
    const cardTemplate = new Card(card, '.element-template');
    const cardElement = cardTemplate.addCard();
    elements.append(cardElement);
  });
};

createCards();

// Создание новой карточки через попап add
function createNewCard(evt) {
  evt.preventDefault();
  const elements = document.querySelector('.elements');
  const newCard = {};
  newCard.name = popupAddPlace.value;
  newCard.link = popupAddImage.value;
  const newCardTemplate = new Card(newCard, '.element-template');
  const newCardElement = newCardTemplate.addCard();
  elements.prepend(newCardElement);
  popupAddPlace.value = '';
  popupAddImage.value = '';
  popupAddButtonCreate.classList.add('popup__button_disabled');
  popupAddButtonCreate.disabled = true;
  closePopup(popupAdd);
};

popupAddContainer.addEventListener('submit', createNewCard); 

//(Старый код карточек)
// Изменение контента профиля
/* function addContent(evt) {
  evt.preventDefault();
  newCardName = popupAddPlace.value;
  newCardLink = popupAddImage.value;
  elements.prepend(addElement(newCardName, newCardLink));
  popupAddPlace.value = '';
  popupAddImage.value = '';
  popupAddButtonCreate.classList.add('popup__button_disabled');
  popupAddButtonCreate.disabled = true;
  closePopup(popupAdd);
};

// Карточки и попап image
function addElement(nameValue, linkValue) {
  const cardTemplate = elementTemplate.content.querySelector('.element').cloneNode(true);
  const cardImage = cardTemplate.querySelector('.element__image');
  const cardName = cardTemplate.querySelector('.element__name');
  cardName.textContent = nameValue;
  cardImage.src = linkValue;
  cardImage.alt = nameValue;
  // Открытие попапа image
  function openpopupImage() {
    popupCapture.src = cardImage.src;
    popupCapture.alt = cardImage.alt
    captureName.textContent = cardName.textContent;
    openPopup(popupImage);
  };
  cardImage.addEventListener('click', openpopupImage)
  // Функция лайка
  const cardLike = cardTemplate.querySelector('.element__like');
  cardLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_active');
  });
  // Функция удаление карточки
  const cardDelete = cardTemplate.querySelector('.element__delete');
  cardDelete.addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
  }); 
(Старый код валидации)
// Показ ошибки 
const showError = (formElement, inputElement, errorMessage, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.errorClass);
};
// Скрытие ошибки
const hideError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(obj.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(obj.errorClass);
};

const checkInputValidity = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    hideError(formElement, inputElement, obj);
  }
};
// Функция hasInvalidInput возвращает true или false в зависимости от того, есть ли в массиве inputList невалидное поле
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}
// Переключение кнопки 
const toggleButtonState = (inputList, buttonElement, obj) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(obj.inactiveButtonClass)
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(obj.inactiveButtonClass)
    buttonElement.disabled = false;
  }
};

const setEventListeners = (formElement, obj) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);
  //Проверка состояния кнопки при загрузке
  toggleButtonState(inputList, buttonElement, obj);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, obj);
      toggleButtonState(inputList, buttonElement, obj);
    });
  });
};

const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, obj);
  });
};

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__span-error_active'
}); */