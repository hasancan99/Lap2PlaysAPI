const Plays = require('../models/Plays')

class  PlaysController{
    static async getAllPlays(req, res){
        try{
            const data = await Plays.getAllPlays()
            res.status(200).json(data)
        }catch(error){
            console.log(error)
            res.status(500).json({error: `Internal Server Error - ${error}` })
        }
    }
    static async createPlay(req, res){
        const play = req.body
        try{
            const newPlay = await Plays.createPlay(play)
            res.status(201).json(newPlay)
        }catch(error){
            res.status(500).json({Error: `Error - ${error}`})
        }
    }

    static async getPlayById(req, res){
        const {id} = req.params
        try{
            const play = await Plays.getPlayById(id)
            //CHALLENGE turn this if statement into a Ternary Block
            if (play){
                res.status(200).json(play)
            }else{
                res.status(404).json({error: `play not found!`})
            }
        }catch(error){
            res.status(500).json({error: `Opps something went wrong - ${error}`})
        }
    }
    static async updatePlay(req, res){
        const {id} = req.params
        const newPlay = req.body  //ask why above for id it is required as an object from req.params but for newplay you can get it as a req.body 
        try{
            const play = await Plays.updatePlay(id, newPlay)
            if (play){
                res.status(200).json(play)
            }else{
                res.status(404).json({error: `play not found!`})
            }
        }catch(error){
            res.status(500).json({error: `Opps something went wrong - ${error}`})
        }
    }
    static async deletePlay(req,res){
        const {id} = req.params
        try{
            await Plays.deletePlay(id)
            res.status(204).end()  // when we send the status code response expects another output such as json but end() stops it from needing anything else//readability 
        }catch(error){
            res.status(500).json({Error: `Error Code - ${error}`})
        }
    }

}

module.exports = PlaysController
