import { useState, useContext } from "react";
import { StoreContext, actions } from "../store";
const Pagination = () => {
  const [state, dispatch] = useContext(StoreContext);
  const pagingElement = [];
  if (state.currentPage > 1) {
    pagingElement.push(
      <button
        className="btn btn-xs btn-bg-blue"
        onClick={() =>
          dispatch(actions.changeCurrentPage(state.currentPage - 1))
        }
      >
        Prev
      </button>
    );
  }
  let rightIndex =
    state.currentPage + 2 > state.totalPage
      ? state.totalPage
      : state.currentPage + 2;
  let leftIndex = rightIndex - 4 < 1 ? 1 : rightIndex - 4;

  if (state.totalPage > 5 && state.currentPage <= 3) {
    rightIndex = 5;
  } else {
    leftIndex = 1;
    rightIndex = state.totalPage;
  }
  for (let index = leftIndex; index <= rightIndex; index++) {
    const customClass =
      index === state.currentPage
        ? "btn btn-xs btn-bg-red"
        : "btn btn-xs btn-bg-blue";
    pagingElement.push(
      <button
        key={index}
        className={customClass}
        onClick={() => dispatch(actions.changeCurrentPage(index))}
      >
        {index}
      </button>
    );
  }
  if (state.currentPage < state.totalPage) {
    pagingElement.push(
      <button
        className="btn btn-xs btn-bg-blue"
        onClick={() =>
          dispatch(actions.changeCurrentPage(state.currentPage + 1))
        }
      >
        Next
      </button>
    );
  }
  return <div className="text-center mt-1">{pagingElement}</div>;
};

export default Pagination;
