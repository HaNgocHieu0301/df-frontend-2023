const HideModal = (props) => {
  return (
    <section
      className="modal"
      id={props.id}
      style={{ display: props.displayStatus }}
    >
      <div className="modal-add__panel">
        <div className="modal-delete__header">
          <span className="title">{props.titleModal}</span>
          <span className="close-icon" onClick={props.closeHandler}>
            X
          </span>
        </div>
        {props.children}
      </div>
    </section>
  );
};

export default HideModal;
