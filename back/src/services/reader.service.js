const { addNewAuthor } = require('../controllers/author.controller')
const ApiErrors = require('../exeptios/ApiErrors')
const { getAllRdrs, addNewReader } = require('../models/db.js')

class ReaderService {
    async getReaders() {

        const readers = await getAllRdrs()

        return readers.rows
    }

    async addReader(rSurname, rName, rLastname, rBirthdate, rAddress, rPassport, rPhone) {
        if (!rSurname && !rName && !rBirthdate && !rAddress && !rPassport && !rPhone) {
            throw ApiErrors.BadRequest("Empty body")
        }

        const change = await addNewReader(rSurname, rName, rLastname, rBirthdate, rAddress, rPassport, rPhone)

        return change
    }
}

module.exports = new ReaderService()