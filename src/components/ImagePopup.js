export default function ImagePopup({
  classId,
  open,
  selectedCard,
  handleClose,
}) {
  return (
    <div className={`popup ${classId} ${open ? "popup_open" : ""}`}>
      <div className="popup__overlay"></div>
      <div className="popup__content">
        <button
          type="button"
          onClick={handleClose}
          className="popup__close-icon"
        ></button>
        <img
          className="popup__image"
          src={""}
          alt={""}
          onClick={selectedCard}
        />
        <p className="popup__title"></p>
      </div>
    </div>
  );
}
