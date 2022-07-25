const addBookBtn = document.querySelector('#addBookBtn');
const bookTitleInput = document.querySelector('#input-title');
const bookPagesInput = document.querySelector('#input-pages');
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
    console.table(myLibrary);
}

addBookBtn.addEventListener('click', addBookToLibrary);