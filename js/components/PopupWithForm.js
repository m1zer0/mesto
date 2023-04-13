import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._submitForm = this._elem.querySelector('.form');
    this._buttonSubmit = this._elem.querySelector('.form__submit');
    this.setEventListeners();
  }

  _getInputValues = () => {
    const fieldData = {};

    this._elem.querySelectorAll('input').forEach((input) => {
      fieldData[input.name] = input.value;
    });
    return fieldData;
  };

  isLoad = (isLoading) => {
    if (isLoading === true) {
      this._buttonSubmit.textContent = 'Сохранение...';
    } else {
      this._buttonSubmit.textContent = 'Сохранить';
    }
  };

  setEventListeners = () => {
    this._submitForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.isLoad(true);
    });
  };

  close = () => {
    super.close();
    this._submitForm.reset();
  };
}
