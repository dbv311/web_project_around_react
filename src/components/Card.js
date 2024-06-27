export default function Card({
  name,
  link,
  handleClick,
  handleDeleteCard,
  handleDeleteLike,
  handleAddLike,
  likes,
  _id,
  owner,
  user,
}) {
  return (
    <div className="element">
      <div className="element__overlay"></div>
      <div className="element__picture">
        <img alt={name} className="element__image" src={link} />
        <button
          type="button"
          id="trashicon"
          className="element__button-trash"
        ></button>
      </div>
      <div className="element__info">
        <p className="element__text">{name}</p>
        <div className="element__pic">
          <button
            type="button"
            id="hearticon"
            className="element__button-like"
          ></button>
          <p className="element__counter">{likes.length}</p>
        </div>
      </div>
    </div>
  );
}
