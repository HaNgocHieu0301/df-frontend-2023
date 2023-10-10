import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { StoreContext, actions } from '../store';
import { Book } from '../types/book.type';

const BookSchema = z.object({
  name: z.string().min(5, 'Book name must be at least 5 characters'),
  author: z.string().regex(/^[a-zA-Z ]+$/, 'Author name must contain only letters and spaces'),
  topic: z.string().min(1, 'Please select a topic'),
});
type BookSchemaType = z.infer<typeof BookSchema>;

const BookForm = ({ btnTitle }) => {
  const { state, dispatch } = useContext(StoreContext);
  let topicId: number = 1;
  if (state.topicList) {
    topicId = state.topicList.findIndex((topic) => topic.name === state.selectedBook.topic) + 1;
  }
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm<BookSchemaType>({
    resolver: zodResolver(BookSchema),
  });

  const onSubmit = handleSubmit(async (formValues) => {
    if (state.selectedBook.id === -1) {
      addNewBook(formValues);
    } else {
      updateBook(formValues);
    }
  });

  const addNewBook = (formValues: BookSchemaType) => {
    const lastId: number =
      state.bookList.length > 0 ? state.bookList[state.bookList.length - 1].id : 0;
    const newBook: Book = {
      id: parseInt(lastId.toString(), 10) + 1,
      name: formValues.name,
      author: formValues.author,
      topic: state.topicList[parseInt(formValues.topic, 10) - 1]?.name || '',
    };

    dispatch(actions.addNewBook(newBook));
    dispatch(actions.changeAddModalStatus('none'));
    dispatch(
      actions.selectedBook({
        id: -1,
        name: '',
        author: '',
        topic: '',
      }),
    );
    dispatch(actions.changeCurrentPage(1));
  };

  const updateBook = (formValues: BookSchemaType) => {
    const updatedBook = state.bookList.find((book) => book.id === state.selectedBook.id);
    if (!updatedBook) return;
    updatedBook.name = formValues.name;
    updatedBook.author = formValues.author;
    updatedBook.topic = state.topicList[parseInt(formValues.topic, 10) - 1]?.name || '';
    dispatch(actions.updateBook());
    // dispatch(actions.changeViewBookList(state.bookList));
    dispatch(actions.changeUpdateModalStatus('none'));
    dispatch(actions.changeAddModalStatus('none'));
    dispatch(
      actions.selectedBook({
        id: -1,
        name: '',
        author: '',
        topic: '',
      }),
    );
  };

  useEffect(() => {
    reset();
  }, [state.selectedBook, reset]);

  return (
    <form
      className="flex flex-col gap-8 my-0 mx-auto w-[80%] box-border py-5 relative form"
      id="form-new-book"
    >
      <div className="form-group text-black">
        <label htmlFor="name" className="font-semibold inline-block mb-3">
          Book name *
        </label>
        <input
          id="name"
          className="border-2 border-[#ced4da] rounded-sm h-8 w-full"
          type="text"
          placeholder="Book name"
          {...register('name')}
          value={state.selectedBook?.name}
          onChange={(event) =>
            dispatch(actions.selectedBook({ ...state.selectedBook, name: event.target.value }))
          }
        />
        {errors.name && <span className="text-red-500">{errors.name?.message}</span>}
      </div>
      <div className="form-group text-black">
        <label htmlFor="author" className="font-semibold inline-block mb-3">
          Author *
        </label>
        <input
          id="author"
          className="border-2 border-[#ced4da] rounded-sm h-8 w-full"
          type="text"
          placeholder="Author name"
          {...register('author')}
          value={state.selectedBook?.author}
          onChange={(event) =>
            dispatch(actions.selectedBook({ ...state.selectedBook, author: event.target.value }))
          }
        />
        {errors.author && <span className="text-red-500">{errors.author?.message}</span>}
      </div>
      <div className="form-group text-black">
        <label htmlFor="topic" className="font-semibold inline-block mb-3">
          Topic
        </label>
        <select
          id="topic"
          className="w-full border-2 border-[#ced4da] rounded-sm h-8 w-100 py-[1px] px-[2px]"
          {...register('topic')}
          value={topicId}
          onChange={(event) =>
            dispatch(
              actions.selectedBook({
                ...state.selectedBook,
                topic: state.topicList[parseInt(event.target.value, 10) - 1]?.name,
              }),
            )
          }
        >
          {state.topicList.map((topic, index) => (
            <option key={index} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>
        {errors.topic && <span className="text-red-500">{errors.topic?.message}</span>}
      </div>
      <div className="text-center">
        <button className="btn bg-red-600" onClick={onSubmit}>
          {btnTitle}
        </button>
      </div>
    </form>
  );
};

export default BookForm;
