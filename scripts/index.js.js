// Импорты
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
// Переменные edit
const editButton = document.querySelector('.profile__edit-button');
const popupName = document.querySelector('.popup__input_edit_name');
const popupDesc = document.querySelector('.popup__input_edit_description');
const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__description');
const popupEdit = document.querySelector('.popup_edit');
const popupEditContainer = document.querySelector('.popup__form_edit');
const popupEditClose = document.querySelector('.popup__close_edit');
const popupEditButtonSave = document.querySelector('.popup__button_save');
// Переменные add
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
const popupAddContainer = document.querySelector('.popup__form_add');
const popupAddPlace = document.querySelector('.popup__input_add_place');
const popupAddImage = document.querySelector('.popup__input_add_image');
const popupAddClose = document.querySelector('.popup__close_add');
const popupAddButtonCreate = document.querySelector('.popup__button_create');
// Переменные image
const popupImage = document.querySelector('.popup_image');
const popupCapture = document.querySelector('.popup__image');
const captureName = document.querySelector('.popup__caption-image');
const popupImageClose = document.querySelector('.popup__close_image');
// Переменные карточек 
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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

editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  popupName.value = profileName.textContent;
  popupDesc.value = profileDesc.textContent;
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEsc);
};



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

const addCards = (data, elements) => {
  const newCard = new Card(data, elementTemplate);
  elements.append(newCard.addCard());
};

const createNewCard = (evt) => {
  evt.preventDefault();
  addCards(popupAddPlace.value, popupAddImage.value);
  elements.prepend(addCards(popupAddPlace.value, popupAddImage.value));
  closePopup();
};

addCards(initialCards, elements);

popupAddContainer.addEventListener('submit', createNewCard); 


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

  return cardTemplate;
};
// Перебор массива карточек
initialCards.forEach((card) => {
  elements.append(addElement(card.name, card.link));
}); */
// Закрытие попапа по нажанитю на Esc
const handleEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};
// Закрытие попапов(спасибо за интересный комментарий!)
const popups = document.querySelectorAll('.popup');
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
