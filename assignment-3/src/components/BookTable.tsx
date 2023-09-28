import { useContext } from 'react'
import RowInTable from './RowInTable'
import { StoreContext, actions } from '../store'

const BookTable = () => {
  const { state, dispatch } = useContext(StoreContext)
  const borderStyle: string =
    state.theme === 'dark' ? 'border-white' : 'border-black'
  return (
    <table className={`table_book ${borderStyle}`}>
      <thead>
        <tr>
          <th className={borderStyle}>ID</th>
          <th className={borderStyle}>Name</th>
          <th className={borderStyle}>Author</th>
          <th className={borderStyle}>Topic</th>
          <th className={borderStyle}>Action</th>
        </tr>
      </thead>
      <tbody id="table-body">
        {state.viewBookList.map((book) => (
          <RowInTable
            key={book.id}
            book={book}
            deleteHandler={() => {
              dispatch(actions.changeDeleteModalStatus('block'))
              dispatch(actions.selectedBook(book))
            }}
          />
        ))}
      </tbody>
    </table>
  )
}

export default BookTable
