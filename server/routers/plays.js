const express = require('express')
const playsController = require('../controllers/Plays-Controller')

const router = express.Router()

router.get('/', playsController.getAllPlays)
router.post('/', playsController.createPlay)
router.get('/:id', playsController.getPlayById)
router.put('/:id', playsController.updatePlay)                                          //patch to partially update something but put to completely update the whole thing
router.delete('/:id', playsController.deletePlay)

module.exports = router
