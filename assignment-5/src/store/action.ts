'use client';

import {
  CHANGE_ADD_MODAL_STATUS,
  CHANGE_DELETE_MODAL_STATUS,
  CHANGE_UPDATE_MODAL_STATUS,
  SELECTED_BOOK,
  SEARCH,
  ADD_NEW_BOOK,
  DELETE_BOOK,
  CHANGE_VIEW_BOOK_LIST,
  CHANGE_CURRENT_PAGE,
  CHANGE_TOTAL_PAGE,
  CHANGE_THEME,
  CHANGE_BOOK_LIST,
  UPDATE_BOOK,
} from '../utils/constant';
import { Book } from '../types/book.type';

export const changeAddModalStatus = (status: string) => ({
  type: CHANGE_ADD_MODAL_STATUS,
  status,
});
export const changeDeleteModalStatus = (status: string) => ({
  type: CHANGE_DELETE_MODAL_STATUS,
  status,
});
export const changeUpdateModalStatus = (status: string) => ({
  type: CHANGE_UPDATE_MODAL_STATUS,
  status,
});
export const selectedBook = (book: Book) => ({
  type: SELECTED_BOOK,
  book,
});
export const search = (keyword: string) => ({
  type: SEARCH,
  keyword,
});
export const addNewBook = (book: Book) => ({
  type: ADD_NEW_BOOK,
  book,
});
export const deleteBook = (id: number) => ({
  type: DELETE_BOOK,
  id,
});
export const updateBook = () => ({
  type: UPDATE_BOOK,
});
export const changeViewBookList = (lst: Array<Book>) => ({
  type: CHANGE_VIEW_BOOK_LIST,
  lst,
});
export const changeCurrentPage = (page: number) => ({
  type: CHANGE_CURRENT_PAGE,
  page,
});
export const changeTotalPage = (totalPage: number) => ({
  type: CHANGE_TOTAL_PAGE,
  totalPage,
});
export const changeTheme = (theme: string) => ({
  type: CHANGE_THEME,
  theme,
});
export const changeBookList = (lst: Array<Book>) => ({
  type: CHANGE_BOOK_LIST,
  lst,
});
