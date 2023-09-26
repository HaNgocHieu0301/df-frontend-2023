import { RowInTable } from "../components";
import { useContext } from "react";
import { StoreContext, actions } from "../store";
const BookTable = () => {
  const [state, dispatch] = useContext(StoreContext);
  return (
    <table className="table-book">
      <thead>
        <tr>
          <th className="table-cell">ID</th>
          <th className="table-cell">Name</th>
          <th className="table-cell">Author</th>
          <th className="table-cell">Topic</th>
          <th className="table-cell">Action</th>
        </tr>
      </thead>
      <tbody id="table-body">
        {state.viewBookList.map((book) => (
          <RowInTable
            key={book.id}
            book={book}
            deleteHandler={() => {
              dispatch(actions.changeDeleteModalStatus("block"));
              dispatch(actions.selectedBook(book));
            }}
          />
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
