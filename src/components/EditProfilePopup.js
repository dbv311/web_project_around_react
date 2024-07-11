import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup({ handleClose, open, onSubmit }) {
  return (
    <PopupWithForm
      title="Editar Perfil"
      handleClose={handleClose}
      classId={"popup_profile"}
      open={open}
      onSubmit={onSubmit}
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
  );
}
