import avatar from "../images/avatar.jpg";
import "../blocks/profile.css";
import "../blocks/popup.css";
import "../blocks/elements.css";
import "../blocks/element.css";
import Card from "./Card";

function Main({
  handleEditAvatar,
  handleEditProfile,
  cards,
  currentUser,
  handleAddPlace,
  handleCardClick,
  handleDeleteCard,
  handleCardLike,
}) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__image">
          <button
            className="profile__edit-avatar"
            onClick={handleEditAvatar}
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
            onClick={handleEditProfile}
          ></button>
          <p className="profile__text">{currentUser.about}</p>
          <h1 className="profile__title">{currentUser.name}</h1>
        </div>
        <button
          className="profile__add-button"
          onClick={handleAddPlace}
        ></button>
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
            owner={item.owner}
            handleCardClick={handleCardClick}
            handleDeleteCard={handleDeleteCard}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
