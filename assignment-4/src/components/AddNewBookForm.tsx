import { useContext, useEffect, useRef } from 'react'
import { StoreContext, actions } from '../store'
import FormGroup from './FormGroup'
import { Book } from '../types/book.type'

const AddNewBookForm = () => {
  const { state, dispatch } = useContext(StoreContext)
  const nameRef = useRef<HTMLInputElement>(null)
  const authorRef = useRef<HTMLInputElement>(null)
  const topicRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {}, [state.bookList])
  const addNewBook = (e) => {
    e.preventDefault()
    //state.viewBookList.sort((a, b) => (a.id - b.id) as number)
    if (nameRef.current && authorRef.current && topicRef.current) {
      const lastId: number =
        state.bookList.length > 0
          ? state.bookList[state.bookList.length - 1].id
          : 0
      const newBook: Book = {
        id: parseInt(lastId.toString(), 10) + 1,
        name: nameRef.current.value,
        author: authorRef.current.value,
        topic:
          state.topicList[parseInt(topicRef.current.value, 10) - 1]?.name || '',
      }

      dispatch(actions.addNewBook(newBook))
      dispatch(actions.changeAddModalStatus('none'))

      // Clear input values
      nameRef.current.value = ''
      authorRef.current.value = ''
      topicRef.current.value = '1'
    }
  }
  return (
    <form
      className="flex flex-col gap-8 my-0 mx-auto w-[80%] box-border py-5 relative form"
      id="form-new-book"
    >
      <FormGroup title="Book name">
        <input
          className="border-2 border-[#ced4da] rounded-sm h-8 w-full"
          type="text"
          ref={nameRef}
          placeholder="Book name"
        />
      </FormGroup>
      <FormGroup title="Author">
        <input
          className="border-2 border-[#ced4da] rounded-sm h-8 w-full"
          type="text"
          ref={authorRef}
          placeholder="Author name"
        />
      </FormGroup>
      <FormGroup title="Topic">
        <select
          className="w-full border-2 border-[#ced4da] rounded-sm h-8 w-100 py-[1px] px-[2px]"
          ref={topicRef}
        >
          {state.topicList.map((topic, index) => (
            <option key={index} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>
      </FormGroup>
      <div className="text-center">
        <button
          className="btn bg-red-600"
          onClick={(event) => addNewBook(event)}
        >
          Create Book
        </button>
      </div>
    </form>
  )
}

export default AddNewBookForm
