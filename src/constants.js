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
const avatarButton = document.querySelector('.profile__avatar-button');
// Переменные edit-avatar
const popupAvatarEdit = document.querySelector('.popup__form_edit-avatar');

// Переменные add
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
const popupAddContainer = document.querySelector('.popup__form_add');
const popupAddPlace = document.querySelector('.popup__input_add_place');
const popupAddImage = document.querySelector('.popup__input_add_image');
const popupAddButtonCreate = document.querySelector('.popup__button_create');
// Сборка картинок для webpack'a
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
  popupEdit, popupEditContainer, popupEditButtonSave,  addButton, popupAdd, 
  popupAddContainer, popupAddPlace, popupAddImage, 
  popupAddButtonCreate, validationConfig,
  avatarButton, popupAvatarEdit }