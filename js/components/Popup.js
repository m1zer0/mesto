export default class Popup {
  constructor(popupSelector) {
    this._elem = document.querySelector(popupSelector);
    this.setEventListeners();
  }

  open() {
    this._elem.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._elem.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners = () => {
    const popupCloseIcon = this._elem.querySelector('.popup__close-icon');
    popupCloseIcon.addEventListener('click', () => {
      this.close();
    });

    this._elem.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__overlay')) {
        this.close();
      }
    });
  }
}
