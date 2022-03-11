// Импорты
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards } from "./Constants.js";
import { openPopup, closePopup } from "./Utils.js";
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

// Секция, в которую помещаются карточки 
const elements = document.querySelector('.elements');

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

// Открытие попапа edit
editButton.addEventListener('click', () => {
  popupName.value = profileName.textContent;
  popupDesc.value = profileDesc.textContent;
  popupEditButtonSave.classList.add('popup__button_disabled');
  popupEditButtonSave.disabled = true;
  openPopup(popupEdit);
});

// Открытие попапа add
addButton.addEventListener('click', () => {
  popupAddButtonCreate.classList.add('popup__button_disabled');
  popupAddButtonCreate.disabled = true;
  openPopup(popupAdd);
});

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
  closePopup(popupEdit);
};

const createCard = (card) => {
  const cardTemplate = new Card(card, '.element-template');
  const cardElement = cardTemplate.addCard();
  return cardElement
}

initialCards.forEach((card) => {
  elements.append(createCard(card));
});


// Создание новой карточки через попап add
function createNewCard(evt) {
  evt.preventDefault();
  const newCard = {};
  createCard(newCard);
  newCard.name = popupAddPlace.value;
  newCard.link = popupAddImage.value;
  elements.prepend(createCard(newCard));
  popupAddContainer.reset();
  closePopup(popupAdd);
};

popupEditContainer.addEventListener('submit', changeProfile);

popupAddContainer.addEventListener('submit', createNewCard); 