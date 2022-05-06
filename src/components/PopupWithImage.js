import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupCaption = this._popup.querySelector('.popup__caption-image');
    this._popupLink = this._popup.querySelector('.popup__image');
}

//открытие изображения
open(placeName, link) {
    this._popupLink.src = link;
    this._popupLink.alt = placeName;
    this._popupCaption.textContent = placeName;
    super.open();
}
  /*
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupCaption = this._popup.querySelector('.popup__caption-image');
  }
  open(name, link) {
    this._popupCaption.textContent = name;
    this._popupImage.alt = name;
    this._popupImage.src = link;
    super.open();
  } */
}