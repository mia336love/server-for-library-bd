const cors = require("cors")
const express = require('express')
const app = express()
const port = 4000
const ReaderController = require('./src/controllers/reader.controller')
const AuthorController = require('./src/controllers/author.controller')
const BookController = require('./src/controllers/books.controller')
const GenreController = require('./src/controllers/genre.controller')
app.use(express.json());
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/authors/getAll', AuthorController.allAuthors)                 // works
app.get('/readers/getAll', ReaderController.getAllReaders)              // works
app.get('/books/getAll', BookController.getBooks)                       // works      
app.get('/genres/getAll', GenreController.getAllGenres)                 // works
app.get('/books/getMB', BookController.getMB)                           // works

app.post('/authors/addAuthor', AuthorController.addNewAuthor)           // works
app.post('/books/addBook', BookController.addNewBook)                   // works
app.post('/genres/addGenre', GenreController.addNewGenre)               // works
app.post('/genres/addGenreBook', GenreController.addGenreBook)          // works
app.post('/readers/addReader', ReaderController.addNewReader)           // works
app.post('/books/giveBook', BookController.giveBook)
app.post('/books/returnBook', BookController.returnBook)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})