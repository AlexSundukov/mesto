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
// Webpack
const addButtonImage = new URL('../images/add-button.svg', import.meta.url);
const avatarImage = new URL('../images/avatar.jpg', import.meta.url);
const closeButtonImage = new URL('../images/close.svg', import.meta.url);
const deleteButtonImage = new URL('../images/delete.svg', import.meta.url);
const editButtonImage = new URL('../images/edit-button.svg', import.meta.url);
const likeActiveImage = new URL('../images/like-active.svg', import.meta.url);
const likeImage = new URL('../images/like.svg', import.meta.url);
const logoImage = new URL('../images/logo.svg', import.meta.url);

const images = [
  { name: 'Add button', link: addButtonImage},
  { name: 'Avatar', link: avatarImage},
  { name: 'Close button', link: closeButtonImage},
  { name: 'Delete button', link: deleteButtonImage},
  { name: 'Edit button', link: editButtonImage},
  { name: 'Like active', link: likeActiveImage},
  { name: 'Like image', link: likeImage},
  { name: 'Logo image', link: logoImage},
];

import '../pages/index.css'
