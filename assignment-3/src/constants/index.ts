import { Book, Topic } from '../types';

export const bookList: Array<Book> = [
  {
    id: 1,
    name: 'Refactoring',
    author: 'Martin Fowler',
    topic: 'Programming',
  },
  {
    id: 2,
    name: 'Refactoring2',
    author: 'Martin Fowler',
    topic: 'Programming',
  },
  {
    id: 3,
    name: 'Refactoring3',
    author: 'Martin Fowler',
    topic: 'Programming',
  },
  {
    id: 4,
    name: 'Refactoring4',
    author: 'Martin Fowler',
    topic: 'Programming',
  },
];
export const topicList: Array<Topic> = [
  { id: 1, name: 'Programming Language' },
  { id: 2, name: 'Databse' },
  { id: 3, name: 'DevOps' },
  { id: 4, name: 'Frontend' },
  { id: 5, name: 'Backend' },
];
export const CHANGE_ADD_MODAL_STATUS: string = 'change_add_modal_status';
export const CHANGE_DELETE_MODAL_STATUS: string = 'change_delete_modal_status';
export const SELECTED_BOOK: string = 'selected_book';
export const ADD_NEW_BOOK: string = 'add_new_book';
export const DELETE_BOOK: string = 'delete_book';
export const SEARCH: string = 'search';
export const CHANGE_VIEW_BOOK_LIST: string = 'change_view_book_list';
export const CHANGE_CURRENT_PAGE: string = 'change_current_page';
export const CHANGE_TOTAL_PAGE: string = 'change_total_page';
export const CHANGE_THEME: string = 'change_theme';
