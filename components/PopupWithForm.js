import { Popup } from "./Popup.js";
import { profilePencil, profileAvatar } from "../utils/constants.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, classSelector, submitCallBack) {
    super(popupSelector, classSelector);
    this._popupSelector = popupSelector;
    this._submitCallBack = submitCallBack;
    this._previewSubmitText = this._popupSelector.querySelector('.popup__button').textContent;
    this.setEventListeners();
  }
  _getInputValues() {
    return Array.from(this._popupSelector.querySelectorAll(".popup__input"));
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupSelector
      .querySelector(".popup__container")
      .addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._loaderPopup(true);
        this._submitCallBack(this._getInputValues(), evt);
      });
  }

  close() {
    super.close();
    profilePencil.classList.add("visibility");
    profileAvatar.style.opacity  = "1";
    this._popupSelector.querySelector(".popup__container").reset();
    this._loaderPopup(false);
  }

  _loaderPopup(loading) {
    if (loading) {
      this._popupSelector.querySelector('.popup__button').textContent = 'Cargando....';
    } else {
      this._popupSelector.querySelector('.popup__button').textContent = this._previewSubmitText;
    }
  }
}