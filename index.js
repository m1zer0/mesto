let openPopUp = document.querySelector('#open-pop-up');
let popUp = document.querySelector('#pop-up_opened');
let closePopUp = document.querySelector('#close-pop-up');

popUp.style.display = 'none';

openPopUp.addEventListener('click', activePopUp);
closePopUp.addEventListener('click', deactivatePopUp);

function activePopUp(event) {
    if (popUp.style.display === 'none') {
        popUp.style.display = 'flex';
    }

    let name = document.querySelector('.profile__name').textContent;
    let prof = document.querySelector('.profile__prof').textContent;

    document.querySelector('#input-name').value = name;
    document.querySelector('#input-job').value = prof;
};

function deactivatePopUp(event) {
    if (popUp.style.display === 'flex') {
        popUp.style.display = 'none';
    }
};


let formElement = document.querySelector('#body-form');
let nameInput = document.querySelector('#input-name');
let jobInput = document.querySelector('#input-job');

function handleFormSubmit(event) {

    event.preventDefault();

    let name = nameInput.value;
    let job = jobInput.value;

    let nameOutput = document.querySelector('#Output-name');
    let profOutput = document.querySelector('#Output-prof');

    nameOutput.textContent = name;
    profOutput.textContent = job;


    deactivatePopUp();
}

formElement.addEventListener('submit', handleFormSubmit); 