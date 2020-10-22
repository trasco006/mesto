import {
  profileName,
  inputName,
  profileSubtitle,
  addCardButton,
  inputSubtitle,
  elementsContainer,
  editButton,
  popup,
  popupImage,
  popupCard,
  inputCardName,
  settings,
  inputCardSrc,
  avatarEditButton
} from "../scripts/utils/constants.js"
import Card from "../scripts/components/Card.js"
import API from "../scripts/components/API.js"
import PopupWithImage from "../scripts/components/PopuWithImage";
import {PopupWithForm} from "../scripts/components/PopuWithForm.js"
import {FormValidator} from "../scripts/components/FormValidator.js"
import './index.css'
import UserInfo from "../scripts/components/UserInfo";

/****************************************************************************/
// СОЗДАНИЕ ЭКЗЕМПЛЯРА API //
/****************************************************************************/

export const api = new API({
  url: "https://mesto.nomoreparties.co/v1/cohort-16/",
  headers: {
    authorization: '9db189b4-a6aa-4209-b940-24fafffd59d9',
    'Content-Type': 'application/json'
  }
})

/****************************************************************************/
// ЛОГИКА РАБОТЫ ПОПАПА ИЗМЕНЕНИЯ АВАТАРА //
/****************************************************************************/

const popupAvatar = new PopupWithForm('.popup-avatar', (item) => {
  api.setUserAvatar(item[0]).then(() => {
      popupAvatar.close()
      return userInfo.setUserAvatar(item[0])
    }
  )
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
})
avatarEditButton.addEventListener('click', () => {
  popupAvatar.open();
})

//привязка полей ввода попапа
inputName.value = profileName.textContent;
inputSubtitle.value = profileSubtitle.textContent;

//Функционал создания превью карточки
const popupWithImageElement = new PopupWithImage('.popup-image');
const handleCardClick = (src, title) => {
  popupWithImageElement.open(src, title)
}

/************************************************************************/
// УДАЛЕНИЕ КАРТОЧКИ//
/************************************************************************/


// const deletePopup = new PopupWithForm('.popup-delete', acceptDeleteSubmit);



const acceptDeleteFunction = (data) => {
  acceptDelete.setEventListeners()
  acceptDelete.open()
  const acceptDeleteSubmit = (data) => {
    console.log(data)
    api.deleteCardById(data.server).then((res) => {
      res.client.remove()
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
  }
  return  acceptDeleteSubmit()
}

const acceptDelete = new PopupWithForm('.popup-delete',
  () => {
    acceptDeleteSubmit
  }
)

// const acceptDeleteSubmit = (data) => {
//   api.deleteCardById(data.server).then((res) => {
//     res.client.remove()
//   })
//     .catch((err) => {
//       console.log(err); // выведем ошибку в консоль
//     })
// }


//
// const acceptDeleteFunction = (data) => {
//   acceptDelete.open()
//   acceptDelete.setEventListeners()
//
//   api.deleteCardById(data.server).then(() => {
//     data.client.remove()
//   })
//     .catch((err) => {
//       console.log(err); // выведем ошибку в консоль
//     })
//
// }


//
// const acceptDeleteSubmit = (item) => {
//   const a = api.deleteCardById(item.server)
//   a.then(() => {
//     item.client.remove()
//   })
//   a.catch((err) => {
//     console.log(err); // выведем ошибку в консоль
//   });
// }

//Функция создания новой карточки
function getCardElement(nameItem, linkItem, selectorItem, handleCardClick, acceptDeleteFunction, data, user) {
  const card = new Card(nameItem, linkItem, selectorItem, handleCardClick, acceptDeleteFunction, data, user);
  return card.generateCard();
}

/************************************************************************/
// ПОЛУЧЕНИЕ ИНФОРМЦИИ О ПОЛЬЗОВАТЕЛЕ //
/************************************************************************/

const userProfile = api.getUserInfo()

/************************************************************************/
// ПРИВЯЗКА ИНФОРМЦИИ О ПОЛЬЗОВАТЕЛЕ К ВЁРСТКЕ//
/************************************************************************/
userProfile.then((data) => {
  profileName.textContent = data.name;
  profileSubtitle.textContent = data.about;
  document.querySelector('.profile__avatar').style.backgroundImage = `
    url(${data.avatar})`
})

/************************************************************************/
// ОТПРАВКА ИЗМЕНЁННЫХ ДАННЫХ О ПОЛЬЗОВАТЕЛЕ //
/************************************************************************/


/************************************************************************/
// ОТРИСОВСКА КАРТОЧЕК //
/************************************************************************/
import Section from "../scripts/components/Section.js"

api.getUserInfo().then((id) => {
    const section = new Section({}, '.elements')
    api.getAllCards().then((res) => {
      res.forEach(function (data) {
        section.addItem(getCardElement(data.name, data.link, '.card-template', handleCardClick, acceptDeleteFunction, data, id._id))
      });
    })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
)
api.getUserInfo().catch((err) => {
  console.log(err); // выведем ошибку в консоль
});


// api.getUserInfo().then((id) => {
//     api.getAllCards().then((res) => {
//       res.forEach(function (data) {
//         elementsContainer.prepend(getCardElement(data.name, data.link, '.card-template', handleCardClick, acceptDeleteFunction, data, id._id));
//         document.querySelector('.card__likes-number').textContent = data.likes.length;
//       });
//     });
//   }
// )


/************************************************************************/
// СОЗДАНИЕ КАРТОЧКИ ВРУЧНУЮ //
/************************************************************************/
// function popupWithCardFunction() {
//   elementsContainer.prepend(getCardElement(inputCardName.value, inputCardSrc.value, '.card-template', handleCardClick, acceptDeleteFunction, '', ''))
//   api.addNewCard(inputCardName.value, inputCardSrc.value).then((res)=> {console.log(res)});
// }
// const popupWithCard = new PopupWithForm('.popup-card', popupWithCardFunction)
// addCardButton.addEventListener('click', () => popupWithCard.open());

const popupWithCard = new PopupWithForm('.popup-card', () => {
  api.addNewCard(inputCardName.value, inputCardSrc.value).then((res) => {
    elementsContainer.prepend(getCardElement(res.name, res.link, '.card-template', handleCardClick, acceptDeleteFunction, '', ''))
    popupWithCard.close()
  })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
})
addCardButton.addEventListener('click', () => popupWithCard.open());
popupWithCard.setEventListeners()


// .catch((err) => {
//   console.log(err); // выведем ошибку в консоль
// });


// ЗАКРЫТИЕ ПОПАПА ПРИ НАЖАТИИ НА ОВЕРЛЭЙ
popupCard.querySelector('.popup-card__overlay').addEventListener('click', () => popupWithCard.close());
popupImage.querySelector('.popup-image__overlay').addEventListener('click', () => popupWithImageElement.close());
popup.querySelector('.popup__overlay').addEventListener('click', () => popupUserInfo.close())


//Включение валидации форм
const validateProfilePopup = new FormValidator(settings, '.popup__container')
validateProfilePopup.enableValidation()
const validateCardPopup = new FormValidator(settings, '.popup-card__container')
validateCardPopup.enableValidation()
const validateAvatarPopup = new FormValidator(settings, '.popup-avatar__container')
validateAvatarPopup.enableValidation()

//____СОЗАДНИЕ ЮЗЕР ИНФО
const userInfoObj = {
  name: '.profile__user-name',
  subtitle: '.profile__subtitle',
  url: '.profile__avatar'
}
const userInfo = new UserInfo(userInfoObj)

const popupUserInfo = new PopupWithForm('.popup', () => {
  api.setUserInfo(inputName.value, inputSubtitle.value).then((res) => {
    userInfo.setUserInfo(res.name, res.about);
    popupUserInfo.close()
  })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });

})
editButton.addEventListener('click', () => popupUserInfo.open(userInfo.getUserInfo()));


// Вызов обработчиков
popupWithImageElement.setEventListeners()
popupUserInfo.setEventListeners()
// popupWithCard.setEventListeners()
popupAvatar.setEventListeners()
// acceptDelete.setEventListeners()
