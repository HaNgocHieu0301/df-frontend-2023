import { useContext } from 'react'
import { StoreContext, actions } from '../store'
import Button from './Button'

const SearchBar = () => {
  const { dispatch } = useContext(StoreContext)
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Book"
        onKeyUp={(e) => {
          dispatch(actions.search(e.currentTarget.value))
        }}
      />
      <Button
        className="btn-bg-blue"
        title="Add Book"
        handler={() => dispatch(actions.changeAddModalStatus('block'))}
      />
    </div>
  )
}

export default SearchBar
