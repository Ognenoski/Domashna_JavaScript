class Book {
    constructor(title, author, genre, isAvailable, image) {
        this.title = title
        this.author = author
        this.genre = genre
        this.isAvailable = isAvailable
        this.image = image
    }

borrowBook(){
    this.isAvailable = false
}
returnBook(){
    this.isAvailable = true
}
}
const book1 = new Book("Harry Potter", "J.K. Rowling", "Fantasy", true,"harrypotter.jpeg")
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", "Fantasy", true,"thehobit.avif")
const book3 = new Book("Clean Code", "Robert C. Martin", "Programming", false,"cleancode.jpg")
const book4 = new Book("The Alchemist", " Paulo Coelho", "Novel", true,"thealchemist.jpg")
const book5 = new Book("Atomic Habits", "James Clear", "Self-Help", false,"Habits.avif")

class Library {
    constructor(name) {
        this.name = name
        this.books = []
    }
    addBook(book) {
        this.books.push(book)
    }
    showAvailableBooks(){
    const AvailableBooks = this.books.filter(book => book.isAvailable)
return AvailableBooks
}
borrowBook(title){
    const book = this.books.find(book => book.title === title)
    if (book){
        book.borrowBook()
    }
}
returnBook(title) {
    const book = this.books.find(book => book.title === title)

    if (book) {
        book.returnBook()
    }
}
}
const library = new Library("City Library")

library.addBook(book1)
library.addBook(book2)
library.addBook(book3)
library.addBook(book4)
library.addBook(book5)

const booksContainer = document.getElementById("books")

function renderBooks() {

    booksContainer.innerHTML = ""

    library.books.forEach(book => {

        booksContainer.innerHTML += `
            <div>
            <img src="${book.image}" alt="${book.title}" width="150">
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Genre: ${book.genre}</p>
                <p> Status:${book.isAvailable ? "Available" : "Borrowed"}</p>

                ${
                    book.isAvailable
                    ? `<button onclick="borrowBook('${book.title}')">Borrow</button>`
                    : `<button onclick="returnBook('${book.title}')">Return</button>`
                }
            </div>
        
        `
    })
}
function borrowBook(title) {
    library.borrowBook(title)
    renderBooks()
}
function returnBook(title){
    library.returnBook(title)
    renderBooks()
}

renderBooks()