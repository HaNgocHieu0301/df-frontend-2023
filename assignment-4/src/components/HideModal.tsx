'use client'

import { useContext } from 'react'
import { StoreContext, actions } from '../store'

const HideModal = (props) => {
  const { dispatch } = useContext(StoreContext)
  return (
    <section
      className="fixed left-0 top-[-10px] pt-[100px] w-full h-full overflow-auto bg-black/25"
      id={props.id}
      style={{ display: props.displayStatus }}
    >
      <div className="bg-white relative m-auto border-2 w-[400px] shadow modal-add__panel">
        <div className="flex justify-between items-center text-center gap-6 py-4 border-b border-black bg-[#edf3f9] modal-delete__header">
          <span className="w-full font-bold capitalize">
            {props.titleModal}
          </span>
          <span
            className="w-[5%] text-[28px] font-bold cursor-pointer text-[#6d6b6b] mt-[-18px] close-icon"
            onClick={() => {
              dispatch(actions.changeAddModalStatus('none'))
              dispatch(actions.changeDeleteModalStatus('none'))
            }}
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
