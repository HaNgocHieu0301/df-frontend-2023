import { useContext } from 'react';
import { StoreContext, actions } from '../store';

const SearchBar = () => {
  const { dispatch } = useContext(StoreContext);
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Book"
        onKeyUp={(e) => {
          dispatch(actions.search(e.currentTarget.value));
        }}
      />
      <button
        className="btn btn-bg-blue"
        onClick={() => dispatch(actions.changeAddModalStatus('block'))}
      >
        Add Book
      </button>
    </div>
  );
};

export default SearchBar;
