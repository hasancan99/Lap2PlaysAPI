const express = require('express')
const theatresController = require('../controllers/Theatre-Controller')

const router = express.Router()

router.get('/', theatresController.getAllTheatres)
router.post('/', theatresController.createTheatre)
router.get('/:id', theatresController.getTheatreById)
router.put('/:id', theatresController.updateTheatre)                                          //patch to partially update something but put to completely update the whole thing
router.patch('/:id', theatresController.connectPlay)
router.delete('/:id', theatresController.deleteTheatre)

module.exports = router
