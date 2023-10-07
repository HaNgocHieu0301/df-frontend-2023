'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { StoreContext, actions } from '../../../store'
import Layout from '../../../sections/Layout'
import { Modal } from '../../../components'
import { Book } from '../../../types/book.type'

export default function BookDetail() {
  const Router = useRouter()
  const { state, dispatch } = useContext(StoreContext)
  const params = useParams()
  const book: Book | undefined = state.bookList.find(
    (book) => book.id === parseInt(params['bookid'] as string, 10),
  )
  const deleteBook = () => {
    dispatch(actions.selectedBook({ id: -1, name: '', author: '', topic: '' }))
    dispatch(actions.changeDeleteModalStatus('none'))
    dispatch(actions.deleteBook(state.selectedBook.id))
    Router.push('/books')
  }
  return (
    <Layout>
      <div className="m-4 dark:text-white">
        <Link className="text-red-700" href="/">
          &lt; Back
        </Link>
        <h1 className="font-bold text-2xl my-4">{book?.name}</h1>
        <h2>
          <span className="font-bold">Author:</span> {book?.author}
        </h2>
        <h2>
          <span className="font-bold">Topic:</span> {book?.topic}
        </h2>
        <button
          className="my-4 underline underline-offset-2 text-red-700"
          onClick={() => {
            dispatch(actions.changeDeleteModalStatus('block'))
            dispatch(actions.selectedBook(book as Book))
          }}
        >
          Delete
        </button>
      </div>
      <Modal
        id="modal-delete"
        titleModal="Delete Book"
        displayStatus={state.deleteModalStatus}
      >
        <div className=" py-[6px] px-[55px] text-center modal-delete__content">
          <p>
            Do you want to delete
            <b id="delete-name"> {state.selectedBook.name}</b> book?
          </p>
        </div>
        <div className="flex justify-center gap-4 m-6">
          <button
            className="btn bg-blue-600"
            onClick={() => dispatch(actions.changeDeleteModalStatus('none'))}
          >
            Cancel
          </button>
          <button className="btn bg-red-600" onClick={deleteBook}>
            Yes
          </button>
        </div>
      </Modal>
    </Layout>
  )
}
