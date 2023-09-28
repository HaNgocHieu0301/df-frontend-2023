import Button from './Button'
import { Book } from '../types'

interface RowInTableProps {
  book: Book
  deleteHandler: () => void
}

const RowInTable: React.FC<RowInTableProps> = ({ book, deleteHandler }) => {
  return (
    <tr id={book.id.toString()}>
      <td className="table-cell text-center">{book.id}</td>
      <td className="table-cell">{book.name}</td>
      <td className="table-cell">{book.author}</td>
      <td className="table-cell">{book.topic}</td>
      <td className="table-cell text-center">
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
