import {
  CHANGE_ADD_MODAL_STATUS,
  CHANGE_DELETE_MODAL_STATUS,
  SELECTED_BOOK,
  SEARCH,
  ADD_NEW_BOOK,
  DELETE_BOOK,
  CHANGE_VIEW_BOOK_LIST,
  CHANGE_CURRENT_PAGE,
  CHANGE_TOTAL_PAGE,
} from "../constants";

export const changeAddModalStatus = (status) => ({
  type: CHANGE_ADD_MODAL_STATUS,
  status,
});
export const changeDeleteModalStatus = (status) => ({
  type: CHANGE_DELETE_MODAL_STATUS,
  status,
});
export const selectedBook = (book) => ({
  type: SELECTED_BOOK,
  book,
});
export const search = (keyword) => ({
  type: SEARCH,
  keyword,
});
export const addNewBook = (book) => ({
  type: ADD_NEW_BOOK,
  book,
});
export const deleteBook = (id) => ({
  type: DELETE_BOOK,
  id,
});
export const changeViewBookList = (lst) => ({
  type: CHANGE_VIEW_BOOK_LIST,
  lst,
});
export const changeCurrentPage = (page) => ({
  type: CHANGE_CURRENT_PAGE,
  page,
});
export const changeTotalPage = (totalPage) => ({
  type: CHANGE_TOTAL_PAGE,
  totalPage,
});
