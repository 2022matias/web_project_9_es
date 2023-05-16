const yosemite = new URL("../src/images/valle-de-yosemite1.jpg", import.meta.url);
const loise = new URL("../src/images/lago-louise2.png", import.meta.url);
const calvas = new URL("../src/images/montañas-calvas3.png", import.meta.url);
const latemar = new URL("../src/images/latemar4.png", import.meta.url);
const vanoise = new URL("../src/images/vanoise-national...5.png", import.meta.url);
const braies = new URL("../src/images/lago-di-braies6.png", import.meta.url);

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: yosemite,
  },
  {
    name: "Lago Louise",
    link: loise,
  },
  {
    name: "Montañas Calvas",
    link: calvas,
  },
  {
    name: "Latemar",
    link: latemar,
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: vanoise,
  },
  {
    name: "Lago di Braies",
    link: braies,
  },
];

export const bigImage = document.querySelector(".enlarge-image__image");
export const enlargeTitle = document.querySelector(".enlarge-image__title");
export const enlargeImage = document.querySelector(".enlarge-image");

export const openFormButton = document.querySelector(".profile__edit-button");
export const popupProfile = document.querySelector(".popup");
export const popupContainer = document.querySelector(".popup__container");
export const popupCloseIcon = popupContainer.querySelector(".popup__close-icon");
export const profileName = document.querySelector(".profile__jacques");
export const profileSkill = document.querySelector(".profile__explorer");
export const profileAvatar = document.querySelector(".profile__avatar");
export const inputName = document.querySelector(".popup__name");
export const inputSkill = document.querySelector(".popup__skill");
export const newCardPlace = document.querySelector(".popup__place");
export const newCardLink = document.querySelector(".popup__url");
export const cardContainer = document.querySelector(".elements");
export const cardListSelection = document.querySelector("#elements");

export const openFormImage = document.querySelector(".profile__add-button");
export const popupFormImage = document.querySelector(".popup_card");
export const popupFormImageContainer = document.querySelector(".popup__container_card");
export const closeFormImage = document.querySelector(".popup__close-icon-card");
export const popupQuestion = document.querySelector(".popup_question");
export const confirmButton = document.querySelector(".confirm");
export const closeConfirmButton = document.querySelector(".close-question");
export const popupAvatar = document.querySelector(".popup_avatar");
export const popupButtonAvatar = document.querySelector(".popup__button-avatar");
export const popupCloseAvatar = document.querySelector(".close-avatar");
export const profilePencil = document.querySelector(".profile__pencil");