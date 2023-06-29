const Theatres = require('../models/Theatres')

class  TheatresController{
    static async getAllTheatres(req, res){
        try{
            const data = await Theatres.getAllTheatres()
            res.status(200).json(data)
        }catch(error){
            console.log(error)
            res.status(500).json({error: `Internal Server Error - ${error}` })
        }
    }
    static async createTheatre(req, res){
        const theatre = req.body
        try{
            const newTheatre = await Theatres.createTheatre(theatre)
            res.status(201).json(newTheatre)
        }catch(error){
            res.status(500).json({Error: `Error - ${error}`})
        }
    }

    static async getTheatreById(req, res){
        const {id} = req.params
        try{
            const theatre = await Theatres.getTheatreById(id)
            //CHALLENGE turn this if statement into a Ternary Block
            if (theatre){
                res.status(200).json(theatre)
            }else{
                res.status(404).json({error: `Theatre not found!`})
            }
        }catch(error){
            res.status(500).json({error: `Opps something went wrong - ${error}`})
        }
    }
    static async updateTheatre(req, res){
        const {id} = req.params
        const newTheatre = req.body  //ask why above for id it is required as an object from req.params but for newTheatre you can get it as a req.body 
        try{
            const theatre = await Theatres.updateTheatre(id, newTheatre)
            if (theatre){
                res.status(200).json(theatre)
            }else{
                res.status(404).json({error: `Theatre not found!`})
            }
        }catch(error){
            res.status(500).json({error: `Opps something went wrong - ${error}`})
        }
    }
    static async connectPlay(req,res){
        const {id} = req.params
        const playName = req.body
        console.log(playName['play_name'])
        try{
            const theatre = await Theatres.connectPlay(id, playName)
            res.status(200).json(theatre)
        }catch(error){
            res.status(500).json({Error: `Error Code - ${error}`})
        }
    }
    static async deleteTheatre(req,res){
        const {id} = req.params
        try{
            await Theatres.deleteTheatre(id)
            res.status(204).end()  // when we send the status code response expects another output such as json but end() stops it from needing anything else//readability 
        }catch(error){
            res.status(500).json({Error: `Error Code - ${error}`})
        }
    }

}

module.exports = TheatresController
