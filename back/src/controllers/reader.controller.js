const { raw } = require('express')
const ReaderService = require('../services/reader.service')

class ReaderController {
    // async getUserChanges(req, res, next) {
    //     try {
    //         const changes = await ReaderService.getChanges(req.params.id)

    //         console.log("КОНТРОЛЛЕР: ", changes.rows, req.params.id);


    //         return res.json(changes.rows)
    //     } catch (e) {
    //         next(e)
    //     }
    // }

    async getAllReaders(req, res, next) {
        try {
            const readers = await ReaderService.getReaders()

            return res.json(readers)
        } catch (e) {
            next(e)
        }
    }

    async addNewReader(req, res, next) {
        try {
            const rSurname = req.body.rSurname
            const rName = req.body.rName
            const rLastname = req.body.rLastname
            const rPassport = req.body.rPassport
            const rPhone = req.body.rPhone

            console.log(rSurname, rName, rLastname, rPassport, rPhone);
            const change = await ReaderService.addReader(rSurname, rName, rLastname, rPassport, rPhone)

            return res.json(change)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new ReaderController()