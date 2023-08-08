const editButton = document.querySelector('.profile__edit-button');
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__about');
const popupEdit = document.querySelector('.popup_type_profile');
const closeEditButton = popupEdit.querySelector('.popup__close-button');
const nameInput = popupEdit.querySelector('.popup__input_type_name');
const jobInput = popupEdit.querySelector('.popup__input_type_description');
const editForm = popupEdit.querySelector('.popup__form');

function openPopup(item) {
    item.classList.add('popup_opened');
};

function closePopup(item) {
    item.classList.remove('popup_opened');
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
