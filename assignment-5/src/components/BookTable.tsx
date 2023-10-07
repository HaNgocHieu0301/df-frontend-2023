'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { StoreContext, actions } from '../store';

const BookTable = () => {
  const { state, dispatch } = useContext(StoreContext);
  return (
    <div className="m-4">
      <table className="w-full border-2 border-black border-collapse dark:border-white dark: text-white">
        <thead>
          <tr>
            <th className="border border-black text-black dark:border-white dark:text-white">ID</th>
            <th className="border border-black text-black dark:border-white dark:text-white">
              Name
            </th>
            <th className="border border-black text-black dark:border-white dark:text-white">
              Author
            </th>
            <th className="border border-black text-black dark:border-white dark:text-white">
              Topic
            </th>
            <th className="border border-black text-black dark:border-white dark:text-white">
              Action
            </th>
          </tr>
        </thead>
        <tbody id="table-body">
          {state.viewBookList.map((book) => (
            <tr key={book.id} id={book.id.toString()}>
              <td className="border border-black text-black dark:border-white dark:text-white text-center">
                {book.id}
              </td>
              <td className="border border-black text-black dark:border-white dark:text-white ">
                {book.name}
              </td>
              <td className="border border-black text-black dark:border-white dark:text-white ">
                {book.author}
              </td>
              <td className="border border-black text-black dark:border-white dark:text-white ">
                {book.topic}
              </td>
              <td className="border border-black text-black dark:border-white dark:text-white text-center">
                <button
                  className="btn bg-red-500 text-white font-bold ml-1"
                  onClick={() => {
                    dispatch(actions.changeDeleteModalStatus('block'));
                    dispatch(actions.selectedBook(book));
                  }}
                >
                  DELETE
                </button>
                <Link
                  href={`/books/${book.id}`}
                  className="btn bg-red-500 text-white font-bold ml-1"
                >
                  DETAIL
                </Link>
                <button
                  className="btn bg-red-500 text-white font-bold ml-1"
                  onClick={() => {
                    dispatch(actions.changeUpdateModalStatus('block'));
                    dispatch(actions.selectedBook(book));
                  }}
                >
                  EDIT
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
