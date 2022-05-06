// Импорты
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithConfirmDelete from "./components/PopupWithConfirmDelete.js";
import { api } from "./components/Api.js";
import { editButton, popupName, popupDesc, 
  profileName, profileDesc, popupEditContainer, 
  addButton,popupAddContainer, popupAddPlace, 
  popupAddImage, initialCards, validationConfig, 
  avatarButton, inputs } from "./constants.js";

// Код валидации 
const editValidator = new FormValidator(validationConfig, popupEditContainer);
const addValidator = new FormValidator(validationConfig, popupAddContainer);

editValidator.enableValidation();
addValidator.enableValidation();
//id пользователя, выполнившего действие
let userId;

//получение данных профиля
Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([userData, cardList]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    cardList.forEach(data => {
      cards.addItem(createCard(data, '#element-template', userId))
    })
  })
  .catch((err) => {
    console.log(err);
  });
//открытие изображения при клике на карточку
const handleCardClick = (placeName, link) => {
  popupWithImage.open(placeName, link);
};

//открытие попапа корзины
const handleDeleteClick = (id, card) => {
  popupWithFormDeleteConfirm.open();
  popupWithFormDeleteConfirm.changeSubmitHandler(() => {handleDeleteConfirm(id, card)});
}

//подтверждение удаления карточки
const handleDeleteConfirm = (id, card) => {
  api.deleteCard(id)
      .then(res => {
        card.removeItem();
        popupWithFormDeleteConfirm.close();
      })
      .catch((err) => {
        console.log(err);
      })
}

//подтверждение смены аватара
const handleAvatarClick = (data) => {
  popupWithFormChangeAvatar.renderWaitingStatus(true);
  api.changeAvatar(data.src)
    .then(res => {
      userInfo.setUserInfo(res);
      popupWithFormChangeAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithFormChangeAvatar.renderWaitingStatus(false);
    })
}

//лайк и дизлайк карточки
const handleLikeClick = (id, card) => {
  if (card.isLiked()) {
    api.deleteLike(id)
    .then(res => {
      card.setLikes(res.likes)
    })
    .catch((err) => {
      console.log(err);
    })
  }
  else {
    api.addLike(id)
    .then(res => {
      card.setLikes(res.likes)
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

//создание карточки
const createCard = (dataCard, template, id) => {
  const card = new Card({ 
    data: dataCard, 
    handleCardClick, 
    handleDeleteClick,
    handleLikeClick }, 
    template,
    id);
  const cardElement = card.generateCard();
  return cardElement;
};

//подтверждение редактирования профиля
const editFormSubmit = profileData => {
  popupWithFormEdit.renderWaitingStatus(true);
  api.editProfile(profileData.name, profileData.about)
    .then(res => {
      userInfo.setUserInfo(res);
      popupWithFormEdit.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithFormEdit.renderWaitingStatus(false);
    })
};

//подтверждение добавления карточки
const addFormSubmit = cardData => {
  popupWithFormAdd.renderWaitingStatus(true);
  api.addCard(cardData.name, cardData.link)
    .then(res => {
      cards.addItem(createCard(res, '#element-template', userId));
      popupWithFormAdd.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupWithFormAdd.renderWaitingStatus(false);
    })
};

//добавлние слушателей на кнопки вызова попапов
editButton.addEventListener('click', () => {
  const userProfile = userInfo.getUserInfo();  
  popupName.value = userProfile.name;
  popupDesc.value = userProfile.about;
  editValidator.disableButton();
  popupWithFormEdit.open();
});

addButton.addEventListener('click', () => {
  addValidator.disableButton();
  popupWithFormAdd.open();
});

avatarButton.addEventListener('click', function() {
  popupWithFormChangeAvatar.open();
});

//создание экзепляров классов Section, PopupWithImage, PopupWithForm, UserInfo
const cards = new Section(
  {
    items: [],
    renderer: (item, id) => {
      cards.addItem(createCard(item, '#element-template', id));
    }
  },
  '.elements'
);
cards.renderItems();

const popupWithImage = new PopupWithImage('.popup_place');
popupWithImage.setEventListeners();

const popupWithFormEdit = new PopupWithForm('.popup_edit', editFormSubmit);
popupWithFormEdit.setEventListeners();

const popupWithFormAdd = new PopupWithForm('.popup_add', addFormSubmit);
popupWithFormAdd.setEventListeners();

const popupWithFormDeleteConfirm = new PopupWithConfirmDelete('.popup_confirm-delete', handleDeleteClick);
popupWithFormDeleteConfirm.setEventListeners();

const popupWithFormChangeAvatar = new PopupWithForm('.popup_edit-avatar', handleAvatarClick);
popupWithFormChangeAvatar.setEventListeners();

const userInfo = new UserInfo(
  {
    nameSelector: '.profile__name',
    aboutSelector: '.profile__description',
    avatarSelector: '.profile__avatar',
  }
);
/*
// Код валидации 
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
  editValidator.disableButton();
  popupEdit.open();
});
// Функциональность попапа add
const popupAdd = new PopupWithForm('.popup_add', () => {
  const newCard = { 
    name: popupAddPlace.value,
    link: popupAddImage.value,
  };
  elementsSection.addItem(createCard(newCard));
  popupAdd.close();
});

addButton.addEventListener('click', () => {
  addValidator.disableButton();
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
*/
// Webpack
import '../pages/index.css'
