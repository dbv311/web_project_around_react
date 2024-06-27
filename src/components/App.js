import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import React from "react";
import { api } from "../utils/api";

function App() {
  const [isPopupProfileOpen, setPopupProfileOpen] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const closeAllPopups = () => {
    setPopupProfileOpen(false);
  };

  const handleEditProfile = () => {
    setPopupProfileOpen(true);
  };

  const onSubmitEditProfile = ({ name, about }) => {
    return api.updateUser(name, about).then((user) => {
      setCurrentUser(user);
    });
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
    </div>
  );
}

export default App;
