const db = require('../database/db')

class Play {
    static async getAllPlays(){
        const query = 'SELECT * FROM plays'
        const { rows }= await db.query(query)
        return rows 
    }
    static async createPlay(play){
        const { play_name, dates, actors, price, director} = play

        const query = 'INSERT INTO plays (play_name, dates, actors, price, director) VALUES ($1, $2, $3, $4, $5) RETURNING *'
        const values = [play_name, dates, actors, price, director]
        const {rows} = await db.query(query, values)
        return rows[0]
    }
    static async getPlayById(id){
        const query = 'SELECT * FROM plays WHERE play_id =$1'
        const {rows} = await db.query(query, [id])
        return rows[0]
    }

    static async updatePlay(id, play){
        const { play_name, dates, actors, price, director} = play
        const query = 'UPDATE plays SET play_name = $1, dates = $2, actors= $3, price= $4, director = $5 WHERE play_id =$6 RETURNING *'
        const values = [play_name, dates, actors, price, director, id]
        const {rows} = await db.query(query, values)
        return rows[0]
}
    static async deletePlay(id){
        const query= 'DELETE FROM plays WHERE play_id = $1'
        await db.query(query, [id])     //id is expected as an array of variables not 
    }

}
module.exports = Play
