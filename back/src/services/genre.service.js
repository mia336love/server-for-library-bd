const ApiErrors = require('../exeptios/ApiErrors')
const { getAllGenres, addNewGenre, addGenreBook } = require('../models/db.js')

class GenreService {
    async getGenres() {
        const allGenres = await getAllGenres()

        return allGenres.rows;
    }

    async addGenre(name) {
        if (!name) {
            throw ApiErrors.BadRequest("Empty body")
        }
        const genre = await addNewGenre(name)

        return genre
    }

    async addNewGenreBook(bName, gName) {
        if (!bName && !gName) {
            throw ApiErrors.BadRequest("Empty body")
        }

        const genreBook = await addGenreBook(bName, gName)

        return genreBook
    }
}

module.exports = new GenreService()