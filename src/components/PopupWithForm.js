import React from "react";

export default function PopupWithForm({
  open,
  handleClose,
  classId,
  title,
  children,
  onSubmit,
  buttonTitle,
}) {
  const formRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValues = getInputValues(formRef.current);
    onSubmit(inputValues).then(() => {
      formRef.current.reset();
    });
  };

  const getInputValues = (form) => {
    const inputValues = {};
    const inputForms = Array.from(form.elements);
    inputForms.forEach((element) => {
      if (element.name) {
        inputValues[element.name] = element.value;
      }
    });
    return inputValues;
  };

  return (
    <div className={`popup ${classId} ${open ? "popup_open" : ""}`}>
      <div className="popup__overlay"></div>
      <div className="popup__content">
        <form className="popup__form" ref={formRef} onSubmit={handleSubmit}>
          <button
            type="button"
            onClick={handleClose}
            className="popup__close-icon"
          ></button>
          <h2 className="popup__edit">{title}</h2>
          {children}
          <button type="submit" className="popup__button">
            {buttonTitle}
          </button>
        </form>
      </div>
    </div>
  );
}
