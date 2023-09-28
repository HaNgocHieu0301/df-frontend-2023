const HideModal = (props) => {
  return (
    <section
      className="modal text-black"
      id={props.id}
      style={{ display: props.displayStatus }}
    >
      <div className="modal-add__panel">
        <div className="modal-delete__header">
          <span className="title">{props.titleModal}</span>
          <span
            className="close-icon"
            onClick={props.closeHandler}
            aria-hidden="true"
          >
            X
          </span>
        </div>
        {props.children}
      </div>
    </section>
  )
}

export default HideModal
