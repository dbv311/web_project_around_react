import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ handleClose, open, onSubmit }) {
  return (
    <PopupWithForm
      title="Cambiar foto de perfil"
      handleClose={handleClose}
      classId={"popup_avatar"}
      open={open}
      onSubmit={onSubmit}
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
  );
}
