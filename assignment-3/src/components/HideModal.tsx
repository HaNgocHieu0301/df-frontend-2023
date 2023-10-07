import { useContext } from 'react';
import { StoreContext, actions } from '../store';

const HideModal = (props) => {
  const { dispatch } = useContext(StoreContext);
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
            onClick={() => {
              dispatch(actions.changeAddModalStatus('none'));
              dispatch(actions.changeDeleteModalStatus('none'));
            }}
            aria-hidden="true"
          >
            X
          </span>
        </div>
        {props.children}
      </div>
    </section>
  );
};

export default HideModal;
