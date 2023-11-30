const AuthorService = require('../services/author.service')

class AuthorController {
    async allAuthors(req, res, next) {
        try {
            const authors = await AuthorService.getAllAuthors()
            return res.json(authors)
        } catch (e) {
            next(e)
        }
    }

    async addNewAuthor(req, res, next) {
        try {
            const surname = req.body.surname
            const name = req.body.name
            const lastname = req.body.lastname
            const birthdate = req.body.birthdate


            console.log(surname, name, lastname, birthdate);
            const change = await AuthorService.addAuthor(surname, name, lastname, birthdate)

            return res.json(change)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new AuthorController()