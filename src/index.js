import "./styles/index.css";
import {
  initialCards,
  cardContainer,
  popupFormImage,
  popupProfile,
  popupCloseIcon,
  closeFormImage,
  popupAvatar,
  popupCloseAvatar,
  profileAvatar,
  inputName,
  inputSkill,
  profileName,
  profileSkill
} from "../utils/constants.js";
import { addCardForm, waiting } from "../utils/utils.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { userInfo } from "../components/UserInfo.js";
import { api } from "../components/Api";

const popupWithFormProfile = new PopupWithForm(
  popupProfile,
  "popup-visible",
  (inputValues) => {
    api.editProfile(inputValues[0].value, inputValues[1].value).then((res) => {
      userInfo.setUserInfo(
        inputValues[0].value,
        inputValues[1].value,
        res.avatar
      );
      
      popupWithFormProfile.close();
    });
  },
  popupCloseIcon.addEventListener("click", () => {
    popupWithFormProfile.close();
  })
);

const popupWithForm = new PopupWithForm(
  popupFormImage,
  "visibility",
  addCardForm,
  closeFormImage.addEventListener("click", () => {
    popupWithForm.close();
  })
);

const popupFormAvatar = new PopupWithForm(
  popupAvatar,
  "popup-visible",
  (inputValues) => {
    api.updateAvatar(inputValues[0].value).then((res) => {
      profileAvatar.src = inputValues[0].value,
      popupFormAvatar.close();
    });
  },
  popupCloseAvatar.addEventListener("click", () => {
    popupFormAvatar.close();
  })
);


const validar = new FormValidator({});
validar.enableValidation();
const formularios = Array.from(document.querySelectorAll(".popup__container"));
formularios.forEach((elemento) => {
  elemento.addEventListener("input", (evt) => {
    validar.enableValidation();
  });
});

api.getUserInfo().then((res) => {
  userInfo.setUserInfo(res.name, res.about, res.avatar);
  api.getCards().then((resCards) => {
    const cardList = new Section(
      {
        items: resCards,
        renderer: (item) => {
          const card = new Card(item, "#elements", res);
          const cardElement = card._createCard();
          cardList.setItem(cardElement);
        },
      },
      cardContainer
    );
    cardList.renderItems();
  });
});