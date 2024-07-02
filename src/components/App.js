import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import { api } from "../utils/api";
import ImagePopup from "./ImagePopup";

function App() {
  const [isPopupProfileOpen, setPopupProfileOpen] = React.useState(false);
  const [isPopupAddPlace, setPopupAddPlace] = React.useState(false);
  const [isPopupEditAvatar, setPopupEditAvatar] = React.useState(false);
  const [isPopupDeleteCard, setPopupDeleteCard] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const closeAllPopups = () => {
    setPopupProfileOpen(false);
    setPopupAddPlace(false);
    setPopupEditAvatar(false);
    setPopupDeleteCard(false);
    setSelectedCard(false);
    document.removeEventListener("keypress", handleEscPress);
  };

  const handleEditProfile = () => {
    setPopupProfileOpen(true);
    addHandleEscPress();
    document.querySelector(".popup__input-name").value = currentUser.name;
    document.querySelector(".popup__input-about").value = currentUser.about;
  };

  const handleAddPlace = () => {
    addHandleEscPress();
    setPopupAddPlace(true);
  };

  const handleEditAvatar = () => {
    setPopupEditAvatar(true);
    addHandleEscPress();
  };

  const handleDeleteCard = () => {
    setPopupDeleteCard(true);
    addHandleEscPress();
  };

  const handleCardClick = () => {
    setSelectedCard(true);
    addHandleEscPress();
  };

  const onSubmitDeleteCard = (cardId) => {
    return api.deleteCard(cardId).then((user) => {
      setCurrentUser(user);
      setPopupDeleteCard(true);
    });
  };

  const onSubmitEditProfile = ({ name, about }) => {
    return api.updateUser(name, about).then((user) => {
      setCurrentUser(user);
      setPopupProfileOpen(false);
    });
  };

  const onSubmitAddPlace = ({ name, link }) => {
    return api.postCards(name, link).then((card) => {
      setCards([card, ...cards]);
      setPopupAddPlace(false);
    });
  };

  const onSubmitEditAvatar = ({ avatar }) => {
    return api.updateAvatar(avatar).then((user) => {
      setCurrentUser(user);
      setPopupEditAvatar(false);
    });
  };

  const addHandleEscPress = () => {
    document.addEventListener("keydown", handleEscPress);
  };

  const handleEscPress = (evt) => {
    if (evt.key === "Escape") {
      closeAllPopups();
    }
  };

  React.useEffect(() => {
    api.getUserInfo().then((user) => {
      setCurrentUser(user);
      api.getCards().then((cardsData) => {
        setCards(cardsData);
      });
    });
  }, []);

  return (
    <div className="page">
      <Header />
      <Main
        handleEditAvatar={handleEditAvatar}
        handleEditProfile={handleEditProfile}
        handleAddPlace={handleAddPlace}
        handleDeleteCard={handleDeleteCard}
        handleCardClick={handleCardClick}
        cards={cards}
        currentUser={currentUser}
      />
      <Footer />
      <PopupWithForm
        title="Cambiar foto de perfil"
        handleClose={closeAllPopups}
        classId={"popup_avatar"}
        open={isPopupEditAvatar}
        onSubmit={onSubmitEditAvatar}
        buttonTitle="Guardar"
      >
        <input
          type="url"
          className="popup__input popup__input-avatar"
          placeholder="Enlace a la imagen"
          name="avatar"
          required
        />
        <span className="popup__error popup__error_type_link"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Editar Perfil"
        handleClose={closeAllPopups}
        classId={"popup_profile"}
        open={isPopupProfileOpen}
        onSubmit={onSubmitEditProfile}
        buttonTitle="Guardar"
      >
        <>
          <input
            type="text"
            minLength="2"
            maxLength="40"
            className="popup__input popup__input-name"
            placeholder="Nombre"
            defaultValue="Jacques Cousteau"
            name="name"
            required
          />
          <span className="popup__error popup__error_type_name"></span>
          <input
            type="text"
            minLength="2"
            maxLength="200"
            className="popup__input popup__input-about"
            placeholder="Acerca de mi"
            defaultValue="Explorador"
            name="about"
            required
          />
          <span className="popup__error popup__error_type_about"></span>
        </>
      </PopupWithForm>
      <PopupWithForm
        title="Nuevo Lugar"
        handleClose={closeAllPopups}
        classId={"popup_place"}
        open={isPopupAddPlace}
        onSubmit={onSubmitAddPlace}
        buttonTitle="Guardar"
      >
        <input
          type="text"
          minLength="2"
          maxLength="30"
          className="popup__input popup__input-place"
          placeholder="Titulo"
          name="name"
          required
        />
        <span className="popup__error popup__error_type_place"></span>
        <input
          type="url"
          className="popup__input popup__input-link"
          placeholder="Enlace a la imagen"
          name="link"
          required
        />
        <span className="popup__error popup__error_type_link"></span>
      </PopupWithForm>
      <PopupWithForm
        title="¿Estás seguro/a?"
        handleClose={closeAllPopups}
        classId={"popup_confirmation"}
        open={isPopupDeleteCard}
        onSubmit={onSubmitDeleteCard}
        buttonTitle="Si"
      ></PopupWithForm>
      <ImagePopup
        classId={"popup_card"}
        handleClose={closeAllPopups}
        open={selectedCard}
      />
    </div>
  );
}

export default App;
