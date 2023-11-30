const ApiErrors = require('../exeptios/ApiErrors')
const { getAllBks, addNewBook, giveBook, returnBook, getMB, getBooksAuthor } = require('../models/db.js')

class BookService {
    async getAllBooks() {
        const allBooks = await getAllBks()

        return allBooks.rows;
    }

    async getMooving() {
        const mooving = await getMB()

        return mooving.rows;
    }

    async addBook(bName, count, genre, aSurname, aName, aLastname) {
        if (!bName && !count && !genre && !aSurname && !aName && !aLastname) {
            throw ApiErrors.BadRequest("Empty body")
        }

        const book = await addNewBook(bName, count, genre, aSurname, aName, aLastname)

        return book
    }

    async giveNewBook(rName, rSurname, rLastName, bName) {
        if (!rName && !rSurname && !bName) {
            throw ApiErrors.BadRequest("Empty body")
        }

        const book = await giveBook(rName, rSurname, rLastName, bName)

        return book
    }

    async returnBookToLib(rName, rSurname, rLastName, bName) {
        if (!rName && !rSurname && !bName) {
            throw ApiErrors.BadRequest("Empty body")
        }

        const book = await returnBook(rName, rSurname, rLastName, bName)

        return book
    }

}

module.exports = new BookService()