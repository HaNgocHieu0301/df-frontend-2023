import { useContext } from 'react';
import { StoreContext, actions } from '../store';

const SearchBar = () => {
  const { dispatch } = useContext(StoreContext);
  return (
    <div className="flex justify-end gap-6 m-5 search-bar">
      <input
        className="border border-black rounded-md pl-[15px] min-w-[16em]"
        type="text"
        placeholder="Search Book"
        onKeyUp={(e) => {
          dispatch(actions.search(e.currentTarget.value));
        }}
      />
      <button
        className="btn bg-blue-600 text-white font-bold"
        onClick={() => dispatch(actions.changeAddModalStatus('block'))}
      >
        Add Book
      </button>
    </div>
  );
};

export default SearchBar;
