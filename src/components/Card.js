export default function Card({
  name,
  link,
  onCardClick,
  handleDeleteCard,
  handleDeleteLike,
  handleAddLike,
  likes,
  _id,
  owner,
  user,
}) {
  const hasLikeUser = () => {
    return likes.some((like) => like._id === user._id);
  };

  const isCardOwner = () => {
    return owner._id === user._id;
  };

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="element">
      <div className="element__overlay"></div>
      <div className="element__picture">
        <img
          alt={name}
          className="element__image"
          src={link}
          onClick={handleClick}
        />
        {isCardOwner() && (
          <button type="button" className="element__button-trash"></button>
        )}
      </div>
      <div className="element__info">
        <p className="element__text">{name}</p>
        <div className="element__pic">
          <button
            type="button"
            className={`element__button-like ${
              hasLikeUser() ? "element__button-like_active" : ""
            }`}
          ></button>
          <p className="element__counter">{likes.length}</p>
        </div>
      </div>
    </div>
  );
}
