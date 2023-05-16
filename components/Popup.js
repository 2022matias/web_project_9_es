export class Popup {
  constructor(popupSelector, classSelector) {
    this._popupSelector = popupSelector;
    this._classSelector = classSelector;
  }

  open() {
    this._popupSelector.classList.toggle(this._classSelector);
  }

  close() {
    this._popupSelector.classList.add(this._classSelector);
    this._popupSelector.classList.add("opacity");
  }

  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }
  
  setEventListeners() {
    document.addEventListener("click", (evt) => {
      if (evt.target.className === "fondo") {
        this.close();
      }
    });
    this.close();
    this._handleEscClose();
  }
}