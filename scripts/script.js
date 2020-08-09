let editButton = document.querySelector('.profile__edit-button');
let form = document.querySelector('form')
let popup = document.querySelector('.popup');
let escapeButton = document.querySelector('.popup__escape-button');
let saveButton = document.querySelector('.popup__save-button');

let profileName = document.querySelector('.profile__user-name');
let profileSubtitle = document.querySelector('.profile__subtitle');

let inputName = document.querySelector('.popup__input_name');
let inputSubtitle = document.querySelector('.popup__input_subtitle');

function popupOpened() {
  popup.classList.toggle('popup_opened');
}

inputName.value = profileName.textContent;
inputSubtitle.value = profileSubtitle.textContent;

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputSubtitle.value;

  popupOpened();
}

editButton.addEventListener('click', popupOpened);
escapeButton.addEventListener('click', popupOpened);
form.addEventListener('submit', formSubmitHandler);