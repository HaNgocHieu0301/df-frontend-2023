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
} from "../constants";
const initState = {
  addModalStatus: "none",
  deleteModalStatus: "none",
  searchInput: "",
  selectedBook: {
    id: "",
    name: "xxx",
    author: "xxx",
    topic: "xxx",
  },
  currentPage: 1,
  pageSize: 4,
  topicList: topicList,
  bookList: JSON.parse(localStorage.getItem("books")) || books,
  totalPage: Math.ceil(bookList.length / 4),
  viewBookList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_ADD_MODAL_STATUS:
      return {
        ...state,
        addModalStatus: action.status,
      };
    case CHANGE_DELETE_MODAL_STATUS:
      return {
        ...state,
        deleteModalStatus: action.status,
      };
    case SELECTED_BOOK:
      return {
        ...state,
        selectedBook: {
          id: action.book.id,
          name: action.book.name,
          author: action.book.author,
          topic: action.book.topic,
        },
      };
    case SEARCH:
      return {
        ...state,
        searchInput: action.keyword,
      };
    case ADD_NEW_BOOK:
      const tmp1 = [...state.bookList, action.book];
      localStorage.setItem("books", JSON.stringify(tmp1));
      return {
        ...state,
        bookList: tmp1,
      };
    case DELETE_BOOK:
      const tmp2 = state.bookList.filter((book) => book.id !== action.id);
      localStorage.setItem("books", JSON.stringify(tmp2));
      return {
        ...state,
        bookList: tmp2,
      };
    case CHANGE_VIEW_BOOK_LIST:
      return {
        ...state,
        viewBookList: action.lst,
      };
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case CHANGE_TOTAL_PAGE:
      return {
        ...state,
        totalPage: action.totalPage,
      };
    default:
      throw new Error("Invalid action");
  }
}
export { initState };
export default reducer;
