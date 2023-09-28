import { useContext, useEffect } from 'react'
import {
  HideModal,
  Button,
  BookTable,
  AddNewBookForm,
  Pagination,
  SearchBar,
} from '../components'
import { StoreContext, actions } from '../store'
import { Book } from '../types'
import '../index.css'

const Main = () => {
  const { state, dispatch } = useContext(StoreContext)

  window.onclick = (event) => {
    if (
      event.target === document.getElementById('modal-delete') ||
      event.target === document.getElementById('modal-add')
    ) {
      dispatch(actions.changeDeleteModalStatus('none'))
      dispatch(actions.changeAddModalStatus('none'))
    }
  }

  const deleteBook = () => {
    dispatch(actions.selectedBook({ id: -1, name: '', author: '', topic: '' }))
    dispatch(actions.changeDeleteModalStatus('none'))
    dispatch(actions.deleteBook(state.selectedBook.id))
  }

  useEffect(() => {
    const pagingPage = (lst: Array<Book>) => {
      dispatch(actions.changeTotalPage(Math.ceil(lst.length / 5)))
      const startIndex = (state.currentPage - 1) * 5
      const endInex = startIndex + 5
      const tmp = lst.slice(startIndex, endInex)
      dispatch(actions.changeViewBookList(tmp))
    }
    if (state.searchInput !== '') {
      const searchedBooks = state.bookList.filter((book) => {
        const bookName = book.name.toLowerCase().trim()
        return bookName.includes(state.searchInput.toLowerCase().trim())
          ? book
          : null
      })
      pagingPage(searchedBooks)
    } else {
      pagingPage(state.bookList)
    }
  }, [state.searchInput, state.bookList, state.currentPage, dispatch])

  return (
    <main className={`theme-${state.theme}`}>
      <SearchBar />
      <BookTable />
      {/* Delete Modal */}
      <HideModal
        id="modal-delete"
        titleModal="Delete Book"
        closeHandler={() => dispatch(actions.changeDeleteModalStatus('none'))}
        displayStatus={state.deleteModalStatus}
      >
        <div className="modal-delete__content">
          <p>
            Do you want to delete
            <b id="delete-name"> {state.selectedBook.name}</b> book?
          </p>
        </div>
        <div className="modal-delete__action">
          <Button
            className="btn-bg-gray"
            title="Cancel"
            handler={() => dispatch(actions.changeDeleteModalStatus('none'))}
          />
          <Button className="btn-bg-red" title="Yes" handler={deleteBook} />
        </div>
      </HideModal>
      {/* Add New Book Modal */}
      <HideModal
        id="modal-add"
        titleModal="Add new book"
        closeHandler={() => dispatch(actions.changeAddModalStatus('none'))}
        displayStatus={state.addModalStatus}
      >
        <AddNewBookForm />
      </HideModal>
      <Pagination />
    </main>
  )
}

export default Main