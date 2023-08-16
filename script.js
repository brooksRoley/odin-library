const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    const libraryContainer = document.getElementById("library-container");
    libraryContainer.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.classList.add("fade-in");

        const titleElement = document.createElement("p");
        titleElement.textContent = `Title: ${book.title}`;

        const authorElement = document.createElement("p");
        authorElement.textContent = `Author: ${book.author}`;

        const pagesElement = document.createElement("p");
        pagesElement.textContent = `Pages: ${book.pages}`;

        const readStatusElement = document.createElement("p");
        readStatusElement.textContent = `Read: ${book.read ? "Yes" : "No"}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => removeBook(index));

        const toggleReadButton = document.createElement("button");
        toggleReadButton.textContent = "Toggle Read";
        toggleReadButton.addEventListener("click", () => toggleReadStatus(index));

        bookCard.appendChild(titleElement);
        bookCard.appendChild(authorElement);
        bookCard.appendChild(pagesElement);
        bookCard.appendChild(readStatusElement);
        bookCard.appendChild(removeButton);
        bookCard.appendChild(toggleReadButton);

        libraryContainer.appendChild(bookCard);
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

document.getElementById("new-book-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = event.target.title.value;
    const author = event.target.author.value;
    const pages = event.target.pages.value;
    const read = event.target.read.checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();

    event.target.reset();
});

// Example initial books
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 320, true);
addBookToLibrary("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 336, false);

displayBooks();
