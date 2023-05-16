import { bigImage, enlargeImage, enlargeTitle } from "../utils/constants.js";
import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector, classSelector) {
    super(popupSelector, classSelector);
    this._popupSelector = popupSelector;
  }
  
  open(evt) {
    super.open();
    enlargeImage.classList.add("opacity");
    enlargeTitle.textContent = evt.target.nextElementSibling.firstElementChild.textContent;
    bigImage.src = evt.target.getAttribute("src");
  }
}

export const popupWithImage = new PopupWithImage(enlargeImage, "no-vision");