import avatar from "../images/avatar.jpg";
import "../blocks/profile.css";
import "../blocks/popup.css";
import "../blocks/elements.css";
import "../blocks/element.css";
import Card from "./Card";

function Main({ handleEditProfile, cards, currentUser }) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__image">
          <button
            className="profile__edit-avatar"
            id="editbuttonavatar"
          ></button>
          <img
            src={currentUser.avatar || avatar}
            alt="Jacques Cousteau, explorador"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <button
            className="profile__edit-button"
            id="editbutton"
            onClick={handleEditProfile}
          ></button>
          <p className="profile__text">{currentUser.about}</p>
          <h1 className="profile__title">{currentUser.name}</h1>
        </div>
        <button className="profile__add-button" id="addbutton"></button>
      </section>
      <section className="elements">
        {cards.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            link={item.link}
            user={currentUser}
            _id={item._id}
            likes={item.likes}
          />
        ))}
      </section>
      <div className="popup popup_avatar">
        <div className="popup__overlay"></div>
        <div className="popup__content popup__content_avatar">
          <form className="popup__form popup__form_avatar">
            <button
              type="button"
              id="closeiconinfo"
              className="popup__close-icon"
            ></button>
            <h2 className="popup__edit">Cambiar foto de perfil</h2>
            <input
              type="url"
              className="popup__input popup__input-avatar"
              placeholder="Enlace a la imagen"
              name="avatar"
              required
            />
            <span className="popup__error popup__error_type_link"></span>
            <button type="submit" className="popup__button">
              Guardar
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_place">
        <div className="popup__overlay"></div>
        <div className="popup__content">
          <form id="popupaddplace" className="popup__form">
            <button
              type="button"
              id="closeiconinformation"
              className="popup__close-icon"
            ></button>
            <h2 className="popup__edit">Nuevo Lugar</h2>
            <button type="submit" className="popup__button">
              Crear
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_confirmation">
        <div className="popup__overlay"></div>
        <div className="popup__content popup__content_confirmation">
          <button
            type="button"
            id="closeiconconfirm"
            className="popup__close-icon"
          ></button>
          <form className="popup__form popup__form_confirmation">
            <h2 className="popup__edit">¿Estás seguro/a?</h2>
            <button
              type="button"
              className="popup__button popup__button-confirmation"
            >
              Si
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_card">
        <div className="popup__overlay"></div>
        <div className="popup__content">
          <button
            type="button"
            id="closeicontag"
            className="popup__close-icon"
          ></button>
          <img className="popup__image" src=" " alt=" " />
          <p className="popup__title"></p>
        </div>
      </div>
      <template id="element-card">
        <div className="element">
          <div className="element__overlay"></div>
          <div className="element__picture">
            <img alt="paisajes" className="element__image" id="paisaje" />
            <button
              type="button"
              id="trashicon"
              className="element__button-trash"
            ></button>
          </div>
          <div className="element__info">
            <p className="element__text"></p>
            <div className="element__pic">
              <button
                type="button"
                id="hearticon"
                className="element__button-like"
              ></button>
              <p className="element__counter">0</p>
            </div>
          </div>
        </div>
      </template>
    </main>
  );
}

export default Main;
