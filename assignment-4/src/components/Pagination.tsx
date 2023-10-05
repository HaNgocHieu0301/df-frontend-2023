'use client'

import { useContext } from 'react'
import { StoreContext, actions } from '../store'

const Pagination = () => {
  const { state, dispatch } = useContext(StoreContext)
  const pagingElement: Array<JSX.Element> = []
  if (state.currentPage > 1) {
    pagingElement.push(
      <button
        key="prev"
        className="btn bg-blue-600 my-2"
        onClick={() =>
          dispatch(actions.changeCurrentPage(state.currentPage - 1))
        }
      >
        Prev
      </button>,
    )
  }
  let rightIndex =
    state.currentPage + 2 > state.totalPage
      ? state.totalPage
      : state.currentPage + 2
  let leftIndex = rightIndex - 4 < 1 ? 1 : rightIndex - 4

  if (state.totalPage > 5 && state.currentPage <= 3) {
    rightIndex = 5
  } else {
    leftIndex = 1
    rightIndex = state.totalPage
  }
  for (let index = leftIndex; index <= rightIndex; index++) {
    const customClass =
      index === state.currentPage
        ? 'btn bg-red-600 my-2'
        : 'btn bg-blue-600 my-2'
    pagingElement.push(
      <button
        key={index}
        className={customClass}
        onClick={() => dispatch(actions.changeCurrentPage(index))}
      >
        {index}
      </button>,
    )
  }
  if (state.currentPage < state.totalPage) {
    pagingElement.push(
      <button
        className="btn bg-blue-600 my-2"
        onClick={() =>
          dispatch(actions.changeCurrentPage(state.currentPage + 1))
        }
      >
        Next
      </button>,
    )
  }
  return <div className="text-center mt-1">{pagingElement}</div>
}

export default Pagination
