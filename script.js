let editButton = document.querySelector('.profile__edit-button')
let popup = document.querySelector('.popup')
let popupForm = document.querySelector('.popup__container')
let popupClose = document.querySelector('.popup__close')
let popupSave = document.querySelector('.popup__save')
let profileName = document.querySelector('.profile__name')
let profileDesc = document.querySelector('.profile__description')
let popupName = document.querySelector('.popup__name')
let popupDesc = document.querySelector('.popup__description')

function openPopup() {
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupDesc.value = profileDesc.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function popupSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileDesc.textContent = popupDesc.value;
    closePopup();
}



editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
popupForm.addEventListener('submit', popupSubmit);