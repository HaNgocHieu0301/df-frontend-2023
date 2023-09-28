import { useContext } from 'react'
import { StoreContext, actions } from '../store'
import Button from './Button'
import FormGroup from './FormGroup'
import { Book } from '../types'

const AddNewBookForm = () => {
  const { state, dispatch } = useContext(StoreContext)
  const addNewBook = (e) => {
    e.preventDefault()
    state.viewBookList.sort((a, b) => a.id - b.id)
    let lastId: number = 0
    if (state.bookList.length > 0) {
      lastId = state.bookList[state.bookList.length - 1].id
    }
    let newBook: Book = {
      id: parseInt(lastId.toString(), 10) + 1,
      name: '',
      author: '',
      topic: '',
    }
    const nameInput: HTMLInputElement | null = document.getElementById(
      'name',
    ) as HTMLInputElement | null
    const authorInput: HTMLInputElement | null = document.getElementById(
      'author',
    ) as HTMLInputElement | null
    const topicSelect: HTMLSelectElement | null = document.getElementById(
      'topic',
    ) as HTMLSelectElement | null

    if (nameInput && authorInput && topicSelect) {
      newBook = {
        id: parseInt(lastId.toString(), 10) + 1,
        name: nameInput.value,
        author: authorInput.value,
        topic: state.topicList[parseInt(topicSelect.value, 10) - 1]?.name || '',
      }

      dispatch(actions.addNewBook(newBook))
      dispatch(actions.changeAddModalStatus('none'))

      // Clear input values
      nameInput.value = ''
      authorInput.value = ''
      topicSelect.value = '1'
    }
  }
  return (
    <form className="form" action="" id="form-new-book">
      <FormGroup title="Book name">
        <input type="text" id="name" placeholder="Book name" />
      </FormGroup>
      <FormGroup title="Author">
        <input type="text" id="author" placeholder="Author name" />
      </FormGroup>
      <FormGroup title="Topic">
        <select className="" id="topic">
          {state.topicList.map((topic, index) => (
            <option key={index} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>
      </FormGroup>
      <div className="text-center">
        <Button
          title="Create Book"
          className="btn-bg-red"
          handler={(event) => addNewBook(event)}
        />
      </div>
    </form>
  )
}

export default AddNewBookForm
