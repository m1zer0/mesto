export {
  dataForms,
  inputTitleFormEdit,
  inputSubtitleFormEdit,
  buttonOpenPopupEdit,
  buttonOpenPopupAdd,
  userAvatar,
  userAvatarOverlay,
  userName,
  userDescription,
  avatarPhoto,
  buttonsForms
};

// config for Card.js
const dataForms = {
  form: '.form',
  input: '.form__input',
  submit: '.form__submit',
  inactiveButton: 'form__submit_active',
  errorMsg: 'form__input-error_active',
  invalidInput: 'form__input_type_error'
};

// for index.js
const popupEdit = document.querySelector('.popup_type_edit-profile');
const formEdit = popupEdit.querySelector('.form');
const inputTitleFormEdit = formEdit.querySelector('.form__input_name');
const inputSubtitleFormEdit = formEdit.querySelector('.form__input_job');
const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const buttonOpenPopupAdd = document.querySelector('.profile__add');
const userName = document.querySelector('.profile__title');
const userDescription = document.querySelector('.profile__subtitle');
const userAvatarOverlay = document.querySelector('.profile__overlay');
const userAvatar = document.querySelector('.profile__avatar-img');
const avatarPhoto = document.querySelector('.profile__avatar-img');
const buttonsForms = document.querySelectorAll('.form__submit');