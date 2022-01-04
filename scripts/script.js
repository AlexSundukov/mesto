// Переменные edit
const editButton = document.querySelector('.profile__edit-button');
const popupSave = document.querySelector('.popup__button_save');
const popupName = document.querySelector('.popup__change_edit_name');
const popupDesc = document.querySelector('.popup__change_edit_description');
const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__description');
const popupEdit = document.querySelector('.popup_edit');
const popupEditContainer = document.querySelector('.popup__container_edit');
const popupForm = document.querySelector('.popup__container_edit');
const popupEditClose = document.querySelector('.popup__close_edit');
// Переменные add
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
const popupAddContainer = document.querySelector('.popup__container_add');
const popupAddPlace = document.querySelector('.popup__change_add_place');
const popupAddImage = document.querySelector('.popup__change_add_image');
const popupAddClose = document.querySelector('.popup__close_add');
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

// Изменение профиля
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  popupName.value = profileName.textContent;
  popupDesc.value = profileDesc.textContent;
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

popupEditClose.addEventListener('click', () => {
  closePopup(popupEdit);
})

function changeProfile(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileDesc.textContent = popupDesc.value;
  closePopup(popupEdit);
}

popupEditContainer.addEventListener('submit', changeProfile);

// Изменение контента профиля
function addContent(evt) {
  evt.preventDefault();
  newCardName = popupAddPlace.value;
  newCardLink = popupAddImage.value;
  elements.prepend(addElement(newCardName, newCardLink));
  closePopup(popupAdd);
}

popupAddContainer.addEventListener('submit', addContent);
// Открытие попапа add
addButton.addEventListener('click', () => {
  openPopup(popupAdd);
  popupAddPlace.value = '';
  popupAddImage.value = '';
})
// Закрытие попапа add
popupAddClose.addEventListener('click', () => {
  closePopup(popupAdd);
})

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
  }
  cardImage.addEventListener('click', openpopupImage)
  // Функция лайка
  const cardLike = cardTemplate.querySelector('.element__like');
  cardLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_active');
  })
  // Функция удаление карточки
  const cardDelete = cardTemplate.querySelector('.element__delete');
  cardDelete.addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
  })

  return cardTemplate;
}
// Закрытие попапа image
popupImageClose.addEventListener('click', () => {
  closePopup(popupImage);
})
// Перебор массива карточек
initialCards.forEach((card) => {
  elements.append(addElement(card.name, card.link));
})

