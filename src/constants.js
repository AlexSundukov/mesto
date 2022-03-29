// Переменные image
const popupPlace = document.querySelector('.popup_place');
const popupImage = document.querySelector('.popup__image');
const captureName = document.querySelector('.popup__caption-image');
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
// Секция, в которую помещаются карточки 
const elements = document.querySelector('.elements');
// Переменные add
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
const popupAddContainer = document.querySelector('.popup__form_add');
const popupAddPlace = document.querySelector('.popup__input_add_place');
const popupAddImage = document.querySelector('.popup__input_add_image');
const popupAddButtonCreate = document.querySelector('.popup__button_create');

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

export { popupPlace, popupImage, captureName, 
  popups, editButton, popupName, 
  popupDesc, profileName, profileDesc, 
  popupEdit, popupEditContainer, popupEditButtonSave, 
  elements, addButton, popupAdd, 
  popupAddContainer, popupAddPlace, popupAddImage, 
  popupAddButtonCreate, initialCards, validationConfig }