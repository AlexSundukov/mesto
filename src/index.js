// Импорты
import Card from "./components/Card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import PopupWithForm from "./components/PopupWithForm.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithConfirmDelete from "./components/PopupWithConfirmDelete.js";
import { api } from "./components/Api.js";
import { editButton, popupName, popupDesc, popupEditContainer, 
  addButton,popupAddContainer, validationConfig, 
  avatarButton, popupEditAvatarContainer} from "./constants.js";

// Код валидации 
const editValidator = new FormValidator(validationConfig, popupEditContainer);
const addValidator = new FormValidator(validationConfig, popupAddContainer);
const avatarValidator = new FormValidator(validationConfig, popupEditAvatarContainer);

editValidator.enableValidation();
addValidator.enableValidation();
avatarValidator.enableValidation();
// id пользователя
let userId
// Информация о пользователе 
const userInfo = new UserInfo(
  {
    nameSelector: '.profile__name',
    aboutSelector: '.profile__description',
    avatarSelector: '.profile__avatar',
  }
);
// Секция карточек
const cards = new Section(
  {
    items: [],
    renderer: (item, id) => {
      cards.addItem(createCard(item, '.element-template', id));
    }
  },
  '.elements'
);

cards.renderItems();
// Промисс 
Promise.all([api.getProfile(), api.getInitialCards()])
.then(([userData, cardSet]) => {
  userInfo.setUserInfo(userData);
  userId = userData._id;
  cardSet.forEach((data) => {
    cards.addItem(createCard(data, '.element-template', userId));
  })
})
.catch((err) => {
  console.log(err);
});
// Код попапа image 
const handelCardClick = (name, link) => {
  popupImage.open(name, link);
}
// Код попапа confirm 
const handleDeleteClick = (id, card) => {
  popupConfirm.open();
  popupConfirm._submitForm(() => {
    handleDeleteConfirm(id, card);
  });
}

const handleDeleteConfirm = (id, card) => {
  api.deleteCard(id)
  .then((res) => {
    card.delete(res);
    popupConfirm.close();
  })
  .catch((err) => {
    console.log(err);
  })
}
// Код попапа avatar
const editAvatarSubmit = (data) => {
  popupEditAvatar.renderLoading(true);
  api.changeAvatar(data.src)
  .then((res) => {
    userInfo.setUserInfo(res);
    popupEditAvatar.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupEditAvatar.renderLoading(false);
  })
}

avatarButton.addEventListener('click', () => {
  popupEditAvatar.open();
});
// Код лайка
const handleLikeClick = (id, card) => {
  if (card.isLiked()) {
    api.deleteLike(id)
    .then((res) => {
      card.setLikes(res.likes);
    })
    .catch((err) => {
      console.log(err);
    })
  } else {
    api.addLike(id)
    .then((res) => {
      card.setLikes(res.likes);
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
// Создание карточки
const createCard = (data, cardSelector, id) => {
  const card = new Card({
    data: data, 
    handelCardClick, 
    handleDeleteClick,
    handleLikeClick
  }, cardSelector, id);
  const cardElement = card.addItem();
  return cardElement;
}
// Код поапа edit 
const editSubmit = (data) => {
  popupEdit.renderLoading(true);
  api.editProfile(data.name, data.about)
  .then((res) => {
    userInfo.setUserInfo(res);
    popupEdit.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupEdit.renderLoading(false);
  })
}

editButton.addEventListener('click', () => {
  const userProfile = userInfo.getUserInfo();  
  popupName.value = userProfile.name;
  popupDesc.value = userProfile.about;
  editValidator.disableButton();
  popupEdit.open();
});
// Код попапа add 
const addSubmit = (data) => {
  popupAdd.renderLoading(true);
  api.addCard(data.name, data.link)
  .then((res) => {
    cards.addItem(createCard(res, '.element-template', userId));
    popupAdd.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupAdd.renderLoading(false);
  })
}

addButton.addEventListener('click', () => {
  addValidator.disableButton();
  popupAdd.open();
});
// Попапы и слушатели кликов 
const popupEdit = new PopupWithForm('.popup_edit', editSubmit);
popupEdit.setEventListeners();

const popupAdd = new PopupWithForm('.popup_add', addSubmit);
popupAdd.setEventListeners();

const popupEditAvatar = new PopupWithForm('.popup_edit-avatar', editAvatarSubmit);
popupEditAvatar.setEventListeners();

const popupConfirm = new PopupWithConfirmDelete('.popup_confirm-delete', handleDeleteClick);
popupConfirm.setEventListeners();

const popupImage = new PopupWithImage('.popup_place');
popupImage.setEventListeners();
// Webpack
import '../pages/index.css'
