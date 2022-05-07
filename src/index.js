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
  avatarButton, popupAvatarEdit} from "./constants.js";

// Код валидации 
const editValidator = new FormValidator(validationConfig, popupEditContainer);
const addValidator = new FormValidator(validationConfig, popupAddContainer);
const avatarValidator = new FormValidator(validationConfig, popupAvatarEdit);

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
const popupWithImage = new PopupWithImage('.popup_place');

popupWithImage.setEventListeners();

const handelCardClick = (name, link) => {
  popupWithImage.open(name, link);
}
// Код попапа confirm 
const popupWithFormDeleteConfirm = new PopupWithConfirmDelete('.popup_confirm-delete', handleDeleteClick);

popupWithFormDeleteConfirm.setEventListeners();

const handleDeleteClick = (id, card) => {
  popupWithFormDeleteConfirm.open();
  popupWithFormDeleteConfirm.changeSubmitHandler(() => {
    handleDeleteConfirm(id, card);
  });
}

const handleDeleteConfirm = (id, card) => {
  api.deleteCard(id)
  .then((res) => {
    card.delete(res);
    popupWithFormDeleteConfirm.close();
  })
  .catch((err) => {
    console.log(err);
  })
}
// Код попапа avatar
const popupWithFormChangeAvatar = new PopupWithForm('.popup_edit-avatar', handleAvatarClick);

popupWithFormChangeAvatar.setEventListeners();

const handleAvatarClick = (data) => {
  popupWithFormChangeAvatar.renderLoading(true);
  api.changeAvatar(data.src)
  .then((res) => {
    userInfo.setUserInfo(res);
    popupWithFormChangeAvatar.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupWithFormChangeAvatar.renderLoading(false);
  })
}

avatarButton.addEventListener('click', () => {
  popupWithFormChangeAvatar.open();
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
const popupWithFormEdit = new PopupWithForm('.popup_edit', editSubmit);

popupWithFormEdit.setEventListeners();

const editSubmit = (data) => {
  popupWithFormEdit.renderLoading(true);
  api.editProfile(data.name, data.about)
  .then((res) => {
    userInfo.setUserInfo(res);
    popupWithFormEdit.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupWithFormEdit.renderLoading(false);
  })
}

editButton.addEventListener('click', () => {
  const userProfile = userInfo.getUserInfo();  
  popupName.value = userProfile.name;
  popupDesc.value = userProfile.about;
  editValidator.disableButton();
  popupWithFormEdit.open();
});
// Код попапа add 
const popupWithFormAdd = new PopupWithForm('.popup_add', addSubmit);

popupWithFormAdd.setEventListeners();

const addSubmit = (data) => {
  popupWithFormAdd.renderLoading(true);
  api.addCard(data.name, data.link)
  .then((res) => {
    cards.addItem(createCard(res, '.element-template', userId));
    popupWithFormAdd.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupWithFormAdd.renderLoading(false);
  })
}

addButton.addEventListener('click', () => {
  addValidator.disableButton();
  popupWithFormAdd.open();
});
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
// Webpack
import '../pages/index.css'
