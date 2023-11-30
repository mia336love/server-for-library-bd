const { and } = require('sequelize')
const BookService = require('../services/books.service')

class BookController {
    async getBooks(req, res, next) {
        try {
            const books = await BookService.getAllBooks()
            return res.json(books)
        } catch (e) {
            next(e)
        }
    }

    async getMB(req, res, next) {
        try {
            const books = await BookService.getMooving()
            return res.json(books)
        } catch (e) {
            next(e)
        }
    }


    async addNewBook(req, res, next) {
        try {
            const bName = req.body.bName
            const count = req.body.count
            const genre = req.body.genre
            const aSurname = req.body.aSurname
            const aName = req.body.aName
            const aLastname = req.body.aLastname

            console.log(bName, count, genre, aSurname, aName, aLastname);
            const change = await BookService.addBook(bName, count, genre, aSurname, aName, aLastname)

            return res.json(change)
        } catch (e) {
            next(e)
        }
    }

    async giveBook(req, res, next) {
        try {
            // console.log(req.body);
            const {rName, rSurname, rLastName, bName} = req.body

            // console.log(rName, rSurname, rLastName, bName);
            const change = await BookService.giveNewBook(rName, rSurname, rLastName, bName)

            return res.json(change)
        } catch (e) {
            next(e)
        }
    }

    async returnBook(req, res, next) {
        try {
            const rName = req.body.rName
            const rSurname = req.body.rSurname
            const rLastName = req.body.rLastName
            const bName = req.body.bName

            console.log(rName, rSurname, rLastName, bName);
            const change = await BookService.returnBookToLib(rName, rSurname, rLastName, bName)

            return res.json(change)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new BookController()