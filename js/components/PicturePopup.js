import Popup from './Popup.js';

export default class PicturePopup extends Popup {
  constructor(popupSelector, api) {
    super(popupSelector);
    this._api = api;
    this.setEventListeners();
  }

  open(idCard, card) {
    super.open();
    this._idCard = idCard;
    this._card = card;
  }

  setEventListeners = () => {
    const buttonDeleteCard = this._elem.querySelector('.submit-delete-card');
    buttonDeleteCard.addEventListener('click', () => {
      this._deleteCard(this._idCard);
      this._card.remove(); 
    });
  };

  _deleteCard = () => {
    this.close();

    this._api
      .deleteCard(this._idCard)
      .then(() => {
      })
      .catch((err) => {
        console.log(`Ошибка - ${err}`);
      });
  };
}
