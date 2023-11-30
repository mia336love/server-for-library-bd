const GenreService = require('../services/genre.service')

class GenreController {
    async getAllGenres(req, res, next) {
        try {
            const genres = await GenreService.getGenres()
            return res.json(genres)
        } catch (e) {
            next(e)
        }
    }

    async addNewGenre(req, res, next) {
        try {
            const name = req.body.name

            console.log(name);
            const change = await GenreService.addGenre(name)
            res.json(change)
            // return res.json(change)
        } catch (e) {
            next(e)
        }
    }

    async addGenreBook(req, res, next) {
        try {
            const bName = req.body.bName
            const gName = req.body.gName

            console.log(bName, gName);
            const change = await GenreService.addNewGenreBook(bName, gName)

            return res.json(change)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new GenreController()