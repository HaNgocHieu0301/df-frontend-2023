'use client'

import { useContext, useEffect } from 'react'
import Link from 'next/link'
import { StoreContext, actions } from '../store'
import { bookList as dm } from '../utils/constant'

const BookTable = () => {
  const { state, dispatch } = useContext(StoreContext)
  const borderStyle: string =
    state.theme === 'dark'
      ? 'border-white text-white'
      : 'border-black text-black'
  return (
    <div className="m-4">
      <table
        className={`w-full border-2 border-black border-collapse ${borderStyle}`}
      >
        <thead>
          <tr>
            <th className={`border border-black ${borderStyle}`}>ID</th>
            <th className={`border border-black ${borderStyle}`}>Name</th>
            <th className={`border border-black ${borderStyle}`}>Author</th>
            <th className={`border border-black ${borderStyle}`}>Topic</th>
            <th className={`border border-black ${borderStyle}`}>Action</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {state.viewBookList.map((book) => (
            <tr key={book.id} id={book.id.toString()}>
              <td className={`border ${borderStyle} text-center`}>{book.id}</td>
              <td className={`border ${borderStyle}`}>{book.name}</td>
              <td className={`border ${borderStyle}`}>{book.author}</td>
              <td className={`border ${borderStyle}`}>{book.topic}</td>
              <td className={`border ${borderStyle} text-center`}>
                <button
                  className="btn bg-red-500 text-white font-bold ml-1"
                  onClick={() => {
                    dispatch(actions.changeDeleteModalStatus('block'))
                    dispatch(actions.selectedBook(book))
                  }}
                >
                  DELETE
                </button>
                <Link
                  href={`/book/${book.id}`}
                  className="btn bg-red-500 text-white font-bold ml-1"
                >
                  DETAIL
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookTable
