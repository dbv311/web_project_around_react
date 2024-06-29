import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import { api } from "../utils/api";

function App() {
  const [isPopupProfileOpen, setPopupProfileOpen] = React.useState(false);
  const [isPopupAddCard, setPopupAddCard] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const closeAllPopups = () => {
    setPopupProfileOpen(false);
    setPopupAddCard(false);
    document.removeEventListener("keypress", handleEscPress);
  };

  const handleEditProfile = () => {
    setPopupProfileOpen(true);
    addHandleEscPress();
    document.querySelector(".popup__input-name").value = currentUser.name;
    document.querySelector(".popup__input-about").value = currentUser.about;
  };

  const handleAddCard = () => {
    addHandleEscPress();
    setPopupAddCard(true);
  };

  const onSubmitEditProfile = ({ name, about }) => {
    return api.updateUser(name, about).then((user) => {
      setCurrentUser(user);
      setPopupProfileOpen(false);
    });
  };

  const onSubmitAddCard = ({ name, link }) => {
    return api.postCards(name, link).then((card) => {
      setCards([card, ...cards]);
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
        handleEditProfile={handleEditProfile}
        handleAddCard={handleAddCard}
        cards={cards}
        currentUser={currentUser}
      />
      <Footer />
      <PopupWithForm
        title="Editar Perfil"
        handleClose={closeAllPopups}
        classId={"popup_profile"}
        open={isPopupProfileOpen}
        onSubmit={onSubmitEditProfile}
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
        open={isPopupAddCard}
        onSubmit={onSubmitAddCard}
      >
        <input
          type="text"
          minlength="2"
          maxlength="30"
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
    </div>
  );
}

export default App;
