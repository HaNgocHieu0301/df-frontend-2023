import { useContext } from 'react'
import Button from './Button'
import { Book } from '../types'
import { StoreContext } from '../store'

interface RowInTableProps {
  book: Book
  deleteHandler: () => void
}

const RowInTable: React.FC<RowInTableProps> = ({ book, deleteHandler }) => {
  const { state } = useContext(StoreContext)
  const borderStyle = state.theme === 'dark' ? 'border-white' : 'border-black'
  return (
    <tr id={book.id.toString()}>
      <td className={`${borderStyle} text-center`}>{book.id}</td>
      <td className={borderStyle}>{book.name}</td>
      <td className={borderStyle}>{book.author}</td>
      <td className={borderStyle}>{book.topic}</td>
      <td className={`${borderStyle} text-center`}>
        <Button
          className="btn-bg-red btn-delete"
          title="DELETE"
          handler={deleteHandler}
        />
      </td>
    </tr>
  )
}

export default RowInTable
