'use client'

import {
  topicList,
  CHANGE_ADD_MODAL_STATUS,
  CHANGE_DELETE_MODAL_STATUS,
  SELECTED_BOOK,
  SEARCH,
  ADD_NEW_BOOK,
  DELETE_BOOK,
  CHANGE_VIEW_BOOK_LIST,
  CHANGE_CURRENT_PAGE,
  CHANGE_TOTAL_PAGE,
  CHANGE_THEME,
  CHANGE_BOOK_LIST,
  bookList,
} from '../utils/constant'
import { Book } from '../types/book.type'
import { Topic } from '../types/topic.type'

export interface State {
  addModalStatus: string
  deleteModalStatus: string
  searchInput: string
  selectedBook: Book
  currentPage: number
  pageSize: number
  topicList: Array<Topic>
  bookList: Array<Book>
  totalPage: number
  viewBookList: Array<Book>
  theme: string
}
export interface Action {
  type: string
  status?: string
  book?: Book
  keyword?: string
  id?: number
  lst?: Array<Book>
  page?: number
  totalPage?: number
  theme?: string
}
let initBooks: Array<Book> = []
if (typeof window !== 'undefined') {
  const tmp = localStorage.getItem('books')
  if (tmp) {
    initBooks = JSON.parse(tmp)
  } else {
    initBooks = bookList
  }
}
const initState: State = {
  addModalStatus: 'none',
  deleteModalStatus: 'none',
  searchInput: '',
  selectedBook: {
    id: -1,
    name: 'xxx',
    author: 'xxx',
    topic: 'xxx',
  },
  currentPage: 1,
  pageSize: 5,
  topicList: [...topicList],
  bookList: initBooks,
  totalPage: 1,
  viewBookList: [],
  theme: 'dark',
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case CHANGE_ADD_MODAL_STATUS:
      return {
        ...state,
        addModalStatus: action.status,
      }
    case CHANGE_DELETE_MODAL_STATUS:
      return {
        ...state,
        deleteModalStatus: action.status,
      }
    case SELECTED_BOOK:
      if (action.book) {
        return {
          ...state,
          selectedBook: {
            id: action.book.id,
            name: action.book.name,
            author: action.book.author,
            topic: action.book.topic,
          },
        }
      }
      return state
    case SEARCH:
      return {
        ...state,
        searchInput: action.keyword,
      }
    case ADD_NEW_BOOK: {
      const tmp1 = [...state.bookList, action.book]
      if (typeof window !== 'undefined') {
        localStorage.setItem('books', JSON.stringify(tmp1))
      }
      return {
        ...state,
        bookList: tmp1,
      }
    }
    case DELETE_BOOK: {
      const tmp2 = state.bookList.filter((book) => book.id !== action.id)
      if (typeof window !== 'undefined') {
        localStorage.setItem('books', JSON.stringify(tmp2))
      }
      return {
        ...state,
        bookList: tmp2,
      }
    }
    case CHANGE_VIEW_BOOK_LIST:
      return {
        ...state,
        viewBookList: action.lst,
      }
    case CHANGE_BOOK_LIST:
      return {
        ...state,
        bookList: action.lst,
      }
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      }
    case CHANGE_TOTAL_PAGE:
      return {
        ...state,
        totalPage: action.totalPage,
      }
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      }
    default:
      throw new Error('Invalid action')
  }
}
export { initState }
export default reducer
