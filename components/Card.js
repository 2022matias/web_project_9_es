import { confirmButton, enlargeImage, popupQuestion, closeConfirmButton } from "../utils/constants.js";
import { api } from "./Api.js";
import { popupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";

export class Card {
  constructor(data, cardSelector, userInfo = {}) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = userInfo._id;
    this._userInfo = userInfo;
    this._ownerCardId = data.owner._id;
    this._cardSelector = cardSelector;
    this._element = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    this._likeButton = this._element.querySelector(".element__heart");
    this._image = this._element.querySelector(".element__image");
    this._deleteButton = this._element.querySelector(".element__trash");
    this._keyHandlerBind = this._keyHandler.bind(this);
    this._clickHandlerBind = this._clickHandler.bind(this);
    this._clickButtonBind = this._clickButton.bind(this);
  }

  isOwnerCard() {
    return this._ownerCardId !== this._id;
  }

  _createCard() {
    this._element.querySelector(".element__image").src = this._link;
    const hasLike = this._data.likes.some((owner) => {
      return owner._id === this._id;
    });
    if (hasLike) {
      this._likeButton.classList.add("element__heart-black");
    } else {
      this._likeButton.classList.remove("element__heart-black");
    }
    this._element.querySelector(".element__name").textContent = this._name;
    this._element.querySelector(".element__contador").textContent =
      this._likes.length;
    this._setEventListeners();
    if (this.isOwnerCard()) {
      this._deleteButton.style.display = "none";
    }
    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._giveLike();
    });
    this._image.addEventListener("click", (evt) => {
      this._zoomIn(evt);
    });
    this._deleteButton.addEventListener("click", (evt) => {
      const confirm = new PopupWithForm(popupQuestion, "popup-visible", () => {
        api.deleteCard(this._data._id).then((res) => {
          evt.target.parentElement.parentElement.parentElement.remove();
          confirm.close();
        });
      }, closeConfirmButton.addEventListener("click", () => {
        confirm.close();
      }))
      confirm.open();
    });
  }

    _giveLike() {
      const hasLike = this._likes.some((owner) => {
        return owner._id === this._id;
      });
    if (!hasLike) {
      api.giveLike(this._data._id).then((res) => {
        this._likes = res.likes;
        this._likeButton.classList.add("element__heart-black");
        this._element.querySelector(".element__contador").textContent =
          res.likes.length;
      });
    } else {
      api.removeLike(this._data._id).then((res) => {
        this._likes = res.likes;
        this._likeButton.classList.remove("element__heart-black");
        this._element.querySelector(".element__contador").textContent =
          res.likes.length;
      });
    }
  }

  _zoomIn(evt) {
    popupWithImage.open(evt);
    document.addEventListener("keydown", this._keyHandlerBind);
    document.addEventListener("click", this._clickHandlerBind);
    document
      .querySelector(".enlarge-image__close-image")
      .addEventListener("click", this._clickButtonBind);
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _addClass() {
    enlargeImage.classList.add("no-vision");
    enlargeImage.classList.add("opacity");
    document.removeEventListener("keydown", this._keyHandlerBind);
    document.removeEventListener("click", this._clickHandlerBind);
    document
      .querySelector(".enlarge-image__close-image")
      .removeEventListener("click", this._clickButtonBind);
  }

  _keyHandler(evt) {
    if (evt.key === "Escape") {
      this._addClass();
    }
  }

  _clickHandler(clickEvent) {
    if (clickEvent.target.className === "fondo") {
      this._addClass();
    }
  }

  _clickButton() {
    this._addClass();
  }
}