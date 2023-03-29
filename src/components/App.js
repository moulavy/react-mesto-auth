
import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js'
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Login from './Login'
import Register from './Register';
import api from '../utils/api'
import { CurrentUserContext } from '../contexts/CurrentUserContext'

function App() {

  const [currentUser, setCurrentUser] = React.useState({})
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([resUser, resCards]) => {
        setCurrentUser(resUser);
        setCards(resCards);
      })
      .catch((err) => {
        console.log(err);
      });

  }, [])

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((item) => card._id !== item._id);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);

  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (!isLiked) {
      api.addLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      api.deleteLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleUpdateUser(data) {
    api.updateUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateAvatar(data) {
    api.updateAvatar(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleAddPlaceSubmit(data) {
    api.addNewCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        
        <Routes>
          <Route exact path="/" element={<ProtectedRoute component={Main}
            loggedIn={loggedIn}
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete} />}
          />
          <Route exact path="/sign-in" element={<Login/>} />
          <Route path="/sign-up" element={<Register/>} />
          
          
          <Route path="/" element={loggedIn ? <Navigate to="/" /> : <Navigate to="/sign-in"/>}/>
               
        </Routes>
        <EditProfilePopup isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
        <PopupWithForm
          name='confirm'
          title='Вы уверены?'
          textButton='Да'
          button='confirm'
        />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
