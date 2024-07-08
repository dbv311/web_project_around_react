export default function Card({
  name,
  link,
  handleCardClick,
  handleDeleteCard,
  handleDeleteLike,
  handleLike,
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

  const handleClick = () => {
    handleCardClick({ name, link, _id });
  };

  const onDeleteCard = () => {
    handleDeleteCard({ _id });
  };

  const handleCardLike = () => {
    handleLike();
    /*const hasLikeUser = () => {
      return likes.some((like) => like._id === user._id);
    };*/
  };

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
          <button
            type="button"
            className="element__button-trash"
            onClick={onDeleteCard}
          ></button>
        )}
      </div>
      <div className="element__info">
        <p className="element__text">{name}</p>
        <div className="element__pic">
          <button
            type="button"
            className={`element__button-like ${
              hasLikeUser() ? "element__button-like_active" : " "
            }`}
            onClick={handleCardLike}
          ></button>
          <p className="element__counter">{likes.length}</p>
        </div>
      </div>
    </div>
  );
}
