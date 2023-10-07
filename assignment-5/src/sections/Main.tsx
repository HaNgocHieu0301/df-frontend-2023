'use client';

import { useContext, useEffect } from 'react';
import { Modal, BookTable, BookForm, Pagination, SearchBar } from '../components';
import { StoreContext, actions } from '../store';
import { Book } from '../types/book.type';

const Main = () => {
  const { state, dispatch } = useContext(StoreContext);

  // if (window !== undefined) {
  //   window.onclick = (event) => {
  //     if (
  //       event.target === document.getElementById('modal-delete') ||
  //       event.target === document.getElementById('modal-add')
  //     ) {
  //       dispatch(actions.changeDeleteModalStatus('none'))
  //       dispatch(actions.changeAddModalStatus('none'))
  //     }
  //   }
  // }

  const deleteBook = () => {
    dispatch(actions.selectedBook({ id: -1, name: '', author: '', topic: '' }));
    dispatch(actions.changeDeleteModalStatus('none'));
    dispatch(actions.deleteBook(state.selectedBook.id));
  };

  useEffect(() => {
    const pagingPage = async (lst: Book[]) => {
      let curPage: number = state.currentPage;
      const totalPage: number = Math.ceil(lst.length / 5);
      dispatch(actions.changeTotalPage(totalPage));
      if (totalPage < curPage) {
        curPage = 1;
        dispatch(actions.changeCurrentPage(1));
      }
      const startIndex = (curPage - 1) * 5;
      const tmp = lst.slice(startIndex, startIndex + 5);
      dispatch(actions.changeViewBookList(tmp));
    };

    if (state.searchInput !== '') {
      const searchedBooks = state.bookList.filter((book) => {
        const bookName = book.name.toLowerCase().trim();
        return bookName.includes(state.searchInput.toLowerCase().trim()) ? book : null;
      });
      pagingPage(searchedBooks);
    } else {
      pagingPage(state.bookList);
    }
  }, [state.searchInput, state.currentPage, state.bookList, dispatch]);

  return (
    <main>
      <SearchBar />
      <BookTable />
      {/* Delete Modal */}
      <Modal id="modal-delete" titleModal="Delete Book" displayStatus={state.deleteModalStatus}>
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
      {/* Add New Book Modal */}
      <Modal id="modal-add" titleModal="Add new book" displayStatus={state.addModalStatus}>
        <BookForm btnTitle="Add New Book" />
      </Modal>
      {/* Update New Book Modal */}
      <Modal id="modal-update" titleModal="Update book" displayStatus={state.updateModalStatus}>
        <BookForm btnTitle="Update Book" />
      </Modal>
      <Pagination />
    </main>
  );
};
export default Main;
