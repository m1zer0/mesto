import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor( popupSelector ) {
    super( popupSelector );
    this._img = this._elem.querySelector('.popup__img');
    this._title = this._elem.querySelector('.popup__title-img');
  }

  open = (link, name) => {
    super.open();
    this._img.src = link;
    this._img.alt = name;
    this._title.textContent = name;
  }
}