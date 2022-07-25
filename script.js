const addBookBtn = document.querySelector('#addBookBtn');
const bookTitleInput = document.querySelector('#input-title');
const bookPagesInput = document.querySelector('#input-pages');
const libraryGrid = document.querySelector('.library');

let myLibrary = [
    {
        title: 'Book1',
        pages: 55
    },
];

function Book(title, pages){
    this.title = title;
    this.pages = pages;
}

function addBookToLibrary(){
    const newBook = new Book(bookTitleInput.value, bookPagesInput.value);
    myLibrary.push(newBook);
    createBookCard(newBook);
}

addBookBtn.addEventListener('click', addBookToLibrary);

function createBookCard(book){
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const pages = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    bookCard.classList.add('card');

    title.textContent = book.title;
    pages.textContent = book.pages;
    readBtn.textContent = 'READ';
    removeBtn.textContent = 'REMOVE';

    bookCard.appendChild(title);
    bookCard.appendChild(pages);
    bookCard.appendChild(readBtn);
    bookCard.appendChild(removeBtn);
    libraryGrid.appendChild(bookCard);
}

function loadBooks(library){
    for(let i = 0; i < library.length; i++){
        createBookCard(library[i]);
    }
}

loadBooks(myLibrary);

