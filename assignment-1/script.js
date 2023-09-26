// Your JS code goes here
const topicList = [
  { id: 1, name: "Programming Language" },
  { id: 2, name: "Databse" },
  { id: 3, name: "DevOps" },
  { id: 4, name: "Frontend" },
  { id: 5, name: "Backend" },
];

const bookList = [
  {
    id: 1,
    name: "Refactoring",
    author: "Martin Fowler",
    topic: "Programming",
  },
];

const deleteModal = document.getElementById("modal-delete");
const addModal = document.getElementById("modal-add");
const closeButtons = document.getElementsByClassName("btn-close");
const deleteButtons = document.getElementsByClassName("btn-delete");
const confirmDeleteBookButton = document.getElementById(
  "btn-confirm-delete-book"
);
const newBookForm = document.getElementById("form-new-book");
const searchElement = document.querySelector(".search-bar input");
const tableRows = document.querySelectorAll("#table-body tr");
const selectTopics = document.getElementById("topic");

function openAddModal() {
  addModal.style.display = "block";
}

function closeModal(element) {
  element.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == deleteModal || event.target == addModal) {
    closeModal(deleteModal);
    closeModal(addModal);
  }
};

function openDeleteModal(id, name) {
  const bookNameElement = document.querySelector(".modal-delete__content p b");
  bookNameElement.innerHTML = name;
  deleteModal.style.display = "block";
  confirmDeleteBookButton.removeEventListener("click", () => deleteBook(id));
  confirmDeleteBookButton.addEventListener("click", () => deleteBook(id));
}
function deleteBook(id) {
  let books = JSON.parse(localStorage.getItem("books"));
  //let books = bookList;
  books = books.filter((book) => book.id !== id);
  localStorage.setItem("books", JSON.stringify(books));
  document.getElementById(id).remove();
  deleteModal.style.display = "none";
}
newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { elements } = newBookForm;
  const books = JSON.parse(localStorage.getItem("books"));
  books.sort((a, b) => a.id - b.id);
  const lastId = books[books.length - 1].id;
  const newBook = {
    id: parseInt(lastId) + 1,
    name: elements.name.value,
    author: elements.author.value,
    topic: topicList[elements.topic.value - 1].name,
  };
  books.push(newBook);
  elements.name.value = "";
  elements.author.value = "";
  elements.topic.value = 1;
  localStorage.setItem("books", JSON.stringify(books));
  renderTable(books);
  closeModal(addModal);
});
function search() {
  const books = JSON.parse(localStorage.getItem("books"));
  const searchedBook = books.filter((book) => {
    const bookName = book.name.toLowerCase().trim();
    const searchText = searchElement.value.toLowerCase().trim();
    if (bookName.includes(searchText)) {
      return book;
    }
  });
  renderTable(searchedBook);
}
function createDataToLocalStorage() {
  let bookExits = localStorage.getItem("books");
  if (bookExits === null || JSON.parse(bookExits).length <= 0) {
    localStorage.setItem("books", JSON.stringify(bookList));
  }
}
function getDataFromLocalStorage() {
  const books = JSON.parse(localStorage.getItem("books"));
  renderTable(books);
}
function renderTable(lst) {
  let tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";
  lst.map((book) => {
    const row = `
          <tr id="${book.id}">
            <td class="table-cell text-center">${book.id}</td>
            <td class="table-cell">${book.name}</td>
            <td class="table-cell">${book.author}</td>
            <td class="table-cell">${book.topic}</td>
            <td class="table-cell text-center">
                <button class="btn btn-bg-red btn-delete" onclick="openDeleteModal(${book.id}, '${book.name}')">DELETE</button>
            </td>
          </tr>
        `;
    tableBody.innerHTML += row;
  });
}
createDataToLocalStorage();
getDataFromLocalStorage();
topicList.map(function (topic) {
  const option = document.createElement("option");
  option.text = topic.name;
  option.value = topic.id;
  selectTopics.appendChild(option);
});
