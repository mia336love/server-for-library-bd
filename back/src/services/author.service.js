const ApiErrors = require('../exeptios/ApiErrors')
const { getAllAu, addNewAuthor } = require('../models/db.js')

class AuthorService {
    async getAllAuthors () {
        const allAuthors = await getAllAu()
        
        return allAuthors.rows;
    }

    async addAuthor(surname, name, lastname, birthdate) {
        if (!surname && !name && !birthdate) {
            throw ApiErrors.BadRequest("Empty body")
        }

        const author = await addNewAuthor(surname, name, lastname, birthdate)

        return author
    }
}

module.exports = new AuthorService()