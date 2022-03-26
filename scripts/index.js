// Импорты
import Card from "./classes/Card.js";
import FormValidator from "./classes/FormValidator.js";
import Section from "./classes/Section.js";
import UserInfo from "./classes/UserInfo.js";
import PopupWithForm from "./classes/PopupWithForm.js";
import PopupWithImage from "./classes/PopupWithImage.js";
import { editButton, popupName, popupDesc, 
  profileName, profileDesc, popupEditContainer, 
  popupEditButtonSave, elements, addButton,
  popupAddContainer, popupAddPlace, popupAddImage, initialCards } from "./constants.js";

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

// Отображение карточек на странице 
const createCard = (card) => {
  const cardTemplate = new Card(card, '.element-template', handleClickCard);
  const cardElement = cardTemplate.addCard();
  return cardElement
}

const elementsSection = new Section({
  items: initialCards, 
  renderer: (element) => {
    const elementSection = createCard(element);
    elementsSection.addItem(elementSection);
  }
}, '.elements');

elementsSection.renderElements();
// Иформация профиля
const userInfo = new UserInfo({
  userName: profileName,
  userDescription: profileDesc
});
// Функциональность попапа edit
const popupEdit = new PopupWithForm('.popup_edit', () => {
  userInfo.setUserInfo({
    newUserName: popupName.value,
    newUserDescription: popupDesc.value,
  });
  popupEdit.close();
});

editButton.addEventListener('click', () => {
  const userProfile = userInfo.getUserInfo();  
  popupName.value = userProfile.name;
  popupDesc.value = userProfile.description;
  popupEditButtonSave.classList.add('popup__button_disabled');
  popupEditButtonSave.disabled = true;
  popupEdit.open();
});
// Функциональность попапа add
const popupAdd = new PopupWithForm('.popup_add', () => {
  const newCard = {};
  newCard.name = popupAddPlace.value;
  newCard.link = popupAddImage.value;
  elements.prepend(createCard(newCard));
  popupAdd.close();
});

addButton.addEventListener('click', () => {
  popupAdd.open();
});
// Попап image
const popupImage = new PopupWithImage('.popup_place');

function handleClickCard(name, link) {
  popupImage.open(name, link)
}
// Слушатели кликов попапов 
popupAdd.setEventListeners();

popupEdit.setEventListeners();

popupImage.setEventListeners();
/*
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

// Создание новой карточки через попап add
function createNewCard(evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = popupAddPlace.value;
  newCard.link = popupAddImage.value;
  elements.prepend(createCard(newCard));
  popupAddContainer.reset();
  closePopup(popupAdd);
};

popupEditContainer.addEventListener('submit', changeProfile);

popupAddContainer.addEventListener('submit', createNewCard); */