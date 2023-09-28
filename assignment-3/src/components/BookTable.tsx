import { useContext } from 'react'
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
          <tr id={book.id.toString()}>
            <td className={`${borderStyle} text-center`}>{book.id}</td>
            <td className={borderStyle}>{book.name}</td>
            <td className={borderStyle}>{book.author}</td>
            <td className={borderStyle}>{book.topic}</td>
            <td className={`${borderStyle} text-center`}>
              <button
                className="btn btn-bg-red btn-delete"
                onClick={() => {
                  dispatch(actions.changeDeleteModalStatus('block'))
                  dispatch(actions.selectedBook(book))
                }}
              >
                DELETE
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BookTable
