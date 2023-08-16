const editButton = document.querySelector('.profile__edit-button');
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__about');
const popupEdit = document.querySelector('.popup_edit');
const closeEditButton = popupEdit.querySelector('.popup__close-button');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const jobInput = popupEdit.querySelector('.popup__input_type_description');
const editForm = popupEdit.querySelector('.popup__form');
const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_inactive",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__input-error_active",
    invalidClass: "popup__input_invalid",
  };

function clickOnOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
};

function closePopupOnEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
};

function openPopup(item) {
    item.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupOnEsc);
    document.addEventListener('click', clickOnOverlay);
    
};

function closePopup(item) {
    item.classList.remove('popup_opened');
    document.removeEventListener('click', clickOnOverlay);
    document.removeEventListener('keydown', closePopupOnEsc);
};

editButton.addEventListener('click', function () {
    nameInput.value = nameValue.textContent;
    jobInput.value = jobValue.textContent;
    openPopup(popupEdit);
});

closeEditButton.addEventListener('click', function () {
    closePopup(popupEdit);
});

function handleEditFormSubmit(evt) {
    evt.preventDefault();
    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;
    closePopup(popupEdit);
};

editForm.addEventListener('submit', handleEditFormSubmit);


const addButton = document.querySelector('.profile__add-button');
const popupAddPicture = document.querySelector('.popup_add_picture');
const closeAddButton = popupAddPicture.querySelector('.popup__close-button');
const formElementAdd = popupAddPicture.querySelector('.popup__form');

addButton.addEventListener('click', function () {
    openPopup(popupAddPicture);
});
closeAddButton.addEventListener('click', function () {
    closePopup(popupAddPicture);
});

const elementCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const pictureTemplate = document.querySelector('.picture-template');
const templateContent = pictureTemplate.content;
const element = templateContent.querySelector('.element');
const elements = document.querySelector('.elements');

elementCards.forEach(item => {
    const newElement = createCard(item);
    elements.prepend(newElement);
});

function createCard(item) {
    const newElement = element.cloneNode(true);
    const elementCaption = newElement.querySelector('.element__caption');
    elementCaption.textContent = item.name;
    const elementImage = newElement.querySelector('.element__image');
    elementImage.src = item.link;
    elementImage.alt = item.name;

    const deleteButton = newElement.querySelector('.element__delete');
    deleteButton.addEventListener('click', function () {
        newElement.remove();
    });

    const buttonLike = newElement.querySelector('.element__like');
    buttonLike.addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__like_active');
    });

    elementImage.addEventListener('click', () => {
        openPopup(popupFullView);
        popupCaption.textContent = item.name,
            popupViewImage.src = item.link,
            popupViewImage.alt = item.name
    });

    return newElement;
};

const popupFullView = document.querySelector('.popup_view_full');
const popupCaption = popupFullView.querySelector('.popup__caption');
const popupViewImage = popupFullView.querySelector('.popup__view-image');
const closeButtonFullView = popupFullView.querySelector('.popup__close-button');

closeButtonFullView.addEventListener('click', () => {
    closePopup(popupFullView);
});

const submitButton = document.querySelector('popup__submit');
const addInputName = document.querySelector('.popup__input_name');
const addInputLink = document.querySelector('.popup__input_link');

formElementAdd.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const cardData = {
        name: addInputName.value,
        link: addInputLink.value,
    };
    const newElement = createCard(cardData);
    elements.prepend(newElement);
    formElementAdd.reset();
    closePopup(popupAddPicture);
    toggleButtonState(Array.from(formElementAdd.querySelectorAll(config.inputSelector)), formElementAdd.querySelector(config.submitButtonSelector), config);
});

enableValidation(config)