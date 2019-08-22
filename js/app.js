document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const bookForm = document.querySelector('#new-item-form');
  bookForm.addEventListener('submit', addNewBook);

  const deleteButton = document.querySelector('#delete-button');
  deleteButton.addEventListener('submit', deleteAllBooks);
})

const addEntryElement = function(text, element) {
  entry = document.createElement(element);
  entry.textContent = text;
  return entry
}

const appendEntries = function(entries) {
  
}


const addNewBook = function(event) {
  event.preventDefault();
  const title = this.title.value;
  const author = this.author.value;
  const category = this.category.value;

  const readingList = document.querySelector('#reading-list');

  titleEntry = addEntryElement(this.title.value, 'h2');
  authorEntry = addEntryElement(this.author.value, 'h3');
  categoryEntry = addEntryElement(this.category.value, 'h4');

  // const titleEntry = document.createElement('h2');
  // titleEntry.textContent = title;
  // const authorEntry = document.createElement('h3')
  // authorEntry.textContent = author;
  // const categoryEntry = document.createElement('h4')
  // categoryEntry.textContent = category;

  const bookEntry = document.createElement('div')
  bookEntry.textContent = ""
  bookEntry.appendChild(titleEntry);
  bookEntry.appendChild(authorEntry);
  bookEntry.appendChild(categoryEntry);
  readingList.appendChild(bookEntry);
  bookEntry.classList.add('entry');

  // bookEntry.textContent = `${titleEntry} ${authorEntry} ${categoryEntry}`
  // bookEntry.textContent = `Title:${title} Author: ${author} Category: ${category}`;
  // readingList.appendChild(bookEntry);
  // bookEntry.classList.add('entry');
  event.target.reset();
}

const deleteAllBooks = function(event) {
  event.preventDefault();
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = "";
}
