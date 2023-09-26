import { useState, useContext } from "react";
import { StoreContext, actions } from "../store";
import { Button, FormGroup } from "../components";
const AddNewBookForm = (props) => {
  const [state, dispatch] = useContext(StoreContext);
  const addNewBook = (e) => {
    e.preventDefault();
    state.viewBookList.sort((a, b) => a.id - b.id);
    const lastId = state.bookList[state.bookList.length - 1].id;
    const newBook = {
      id: parseInt(lastId) + 1,
      name: "",
      author: "",
      topic: "",
    };
    const name = document.getElementById("name");
    const author = document.getElementById("author");
    const topic = document.getElementById("topic");
    newBook.name = name.value;
    newBook.author = author.value;
    newBook.topic = state.topicList[topic.value - 1].name;
    dispatch(actions.addNewBook(newBook));
    dispatch(actions.changeAddModalStatus("none"));
    name.value = "";
    author.value = "";
    topic.value = 1;
  };
  return (
    <form className="form" action="" id="form-new-book">
      <FormGroup id="name" title="Book name">
        <input type="text" id="name" placeholder="Book name" />
      </FormGroup>
      <FormGroup id="author" title="Author">
        <input type="text" id="author" placeholder="Author name" />
      </FormGroup>
      <FormGroup id="topic" title="Topic">
        <select className="" id="topic">
          {topicList.map((topic, index) => (
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
  );
};

export default AddNewBookForm;
