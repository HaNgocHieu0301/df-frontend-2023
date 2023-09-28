import {
  topicList,
  bookList as books,
  CHANGE_ADD_MODAL_STATUS,
  CHANGE_DELETE_MODAL_STATUS,
  SELECTED_BOOK,
  SEARCH,
  ADD_NEW_BOOK,
  DELETE_BOOK,
  CHANGE_VIEW_BOOK_LIST,
  CHANGE_CURRENT_PAGE,
  CHANGE_TOTAL_PAGE,
  bookList,
} from '../constants'
import { Book } from '../types'

export interface State {
  [key: string]: any
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
}
const dataLocal = localStorage.getItem('books')

const initState: State = {
  addModalStatus: 'none',
  deleteModalStatus: 'none',
  searchInput: '',
  selectedBook: {
    id: '',
    name: 'xxx',
    author: 'xxx',
    topic: 'xxx',
  },
  currentPage: 1,
  pageSize: 4,
  topicList: [...topicList],
  bookList: dataLocal ? JSON.parse(dataLocal) : books,
  totalPage: Math.ceil(bookList.length / 5),
  viewBookList: [],
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
      localStorage.setItem('books', JSON.stringify(tmp1))
      return {
        ...state,
        bookList: tmp1,
      }
    }
    case DELETE_BOOK: {
      const tmp2 = state.bookList.filter((book) => book.id !== action.id)
      localStorage.setItem('books', JSON.stringify(tmp2))
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
    default:
      throw new Error('Invalid action')
  }
}
export { initState }
export default reducer
