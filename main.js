(()=>{"use strict";var e={14:(e,t,n)=>{e.exports=n.p+"954d1ecf00812f229770.svg"},686:(e,t,n)=>{e.exports=n.p+"74c3c0fb802dcfa83abb.jpg"},355:(e,t,n)=>{e.exports=n.p+"58aaf1081fb73be79fc3.svg"},401:(e,t,n)=>{e.exports=n.p+"4af3841e0d351a5225a0.svg"},515:(e,t,n)=>{e.exports=n.p+"686ec1de24fcfb5046fa.svg"},136:(e,t,n)=>{e.exports=n.p+"08af6fbb37d19d4aa333.svg"},73:(e,t,n)=>{e.exports=n.p+"77ea1611be45fdeca1cc.svg"},551:(e,t,n)=>{e.exports=n.p+"3d8293a241b315143f02.svg"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,(()=>{function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e.id,this._userId=e.userId,this._ownerId=e.ownerId,this._cardSelector=n,this._handleClickCard=r}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._element.querySelector(".element__count").textContent=this._likes.length,this.isLiked()&&this._like()}},{key:"_like",value:function(){this._element.querySelector(".element__like").classList.toggle("element__like_active")}},{key:"_delete",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like").addEventListener("click",(function(){e._like(e._id)})),this._element.querySelector(".element__delete").addEventListener("click",(function(){e._delete(e._id)})),this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleClickCard(e._name,e._link)}))}},{key:"addCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".element__image").src=this._link,this._element.querySelector(".element__image").alt=this._name,this._element.querySelector(".element__name").textContent=this._name,this._setEventListeners(),this._setLikes(this._likes),this._ownerId!==this._userId&&(this._element.querySelector(".element__delete").style.display="none"),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass}var t,n;return t=e,(n=[{key:"_showError",value:function(e,t){this._errorElement=this._formSelector.querySelector(".".concat(e.id,"-error")),this._errorElement.textContent=t,this._errorElement.classList.add(this._errorClass),e.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(e){this._errorElement=this._formSelector.querySelector(".".concat(e.id,"-error")),this._errorElement.textContent="",this._errorElement.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formSelector.querySelectorAll(this._inputSelector)),this._buttonElement=this._formSelector.querySelector(this._submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r=t.items,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=i,this._containerSelector=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderElements",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){var n=t.userName,r=t.userDescription,i=t.userAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._description=r,this._avatar=i}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent}}},{key:"setUserInfo",value:function(e){var t=e.newUserName,n=e.newUserDescription,r=e.newAvatar;this._name.textContent=t,this._description.textContent=n,this._avatar.src=r}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this.__getResponseData)}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this.__getResponseData)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/user/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this.__getResponseData)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this.__getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this.__getResponseData)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this.__getResponseData)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this.__getResponseData)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this.__getResponseData)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-40",headers:{authorization:"d21adb5f-c1ac-431e-85ec-36d6b7954bb8","Content-Type":"application/json"}}),_=(document.querySelector(".popup_place"),document.querySelector(".popup__image"),document.querySelector(".popup__caption-image"),document.querySelectorAll(".popup"),document.querySelector(".profile__edit-button"),document.querySelector(".popup__input_edit_name"),document.querySelector(".popup__input_edit_description"),document.querySelector(".profile__name")),d=document.querySelector(".profile__description"),h=(document.querySelector(".popup_edit"),document.querySelector(".popup__form_edit")),p=(document.querySelector(".popup__button_save"),document.querySelector(".elements"),document.querySelector(".profile__add-button"),document.querySelector(".popup_add"),document.querySelector(".popup__form_add")),f=(document.querySelector(".popup__input_add_place"),document.querySelector(".popup__input_add_image"),document.querySelector(".popup__button_create"),new URL(n(14),n.b),new URL(n(686),n.b),new URL(n(355),n.b),new URL(n(401),n.b),new URL(n(515),n.b),new URL(n(136),n.b),new URL(n(73),n.b),new URL(n(551),n.b),document.querySelector(".profile__avatar")),m={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__span-error_active"},v=new i(m,h),y=new i(m,p);function b(e,t){popupImage.open(e,t)}v.enableValidation(),y.enableValidation();var k=function(e){return new t(e,".element-template",b).addCard()},S=new l({userName:_,userDescription:d,userAvatar:f}),g=new a({items:[],renderer:function(e){var t=k(e);g.addItem(t)}},".elements");g.renderElements(),c.getProfile().then((function(e){S.setUserInfo(e.name,e.about,e.avatar),e.avatar,e._id})).catch(console.log),c.getInitialCards().then((function(e){e.forEach((function(e){var t=k({name:e.name,link:e.link,likes:e,id:e._id,userId:e.userId,ownerId:e.ownerId,avatar:e.avatar});g.addItem(t)}))}))})()})();