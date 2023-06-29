const db = require('../database/db')

class Theatre {
    static async getAllTheatres(){
        const query = 'SELECT * FROM theatres'
        const { rows }= await db.query(query)
        return rows 
    }
    static async createTheatre(theatre){
        const { theatre_name, theatre_location, phone_number, capacity} = theatre

        const query = 'INSERT INTO theatres (theatre_name, theatre_location, phone_number, capacity) VALUES ($1, $2, $3, $4) RETURNING *'
        const values = [theatre_name, theatre_location, phone_number, capacity]
        const {rows} = await db.query(query, values)
        return rows[0]
    }
    static async getTheatreById(id){
        const query = 'SELECT * FROM theatres WHERE theatre_id =$1'
        const {rows} = await db.query(query, [id])
        return rows[0]
    }

    static async updateTheatre(id, theatre){
        const { theatre_name, theatre_location, phone_number, capacity} = theatre
        const query = 'UPDATE theatres SET theatre_name = $1, theatre_location = $2, phone_number= $3, capacity= $4  WHERE theatre_id =$5 RETURNING *'
        const values = [theatre_name, theatre_location, phone_number, capacity, id]
        const {rows} = await db.query(query, values)
        return rows[0]
}
    static async connectPlay(id, play_name){
        const play = await db.query(('SELECT play_id FROM plays WHERE play_name = $1'), [play_name])
        const play_id = play[rows][0]['play_id']
        const query = 'UPDATE theatres SET play_id=$1 WHERE theatre_id = $2 RETURNING *'
        const values = [play_id, id]
        const {rows} = await db.query(query, values)
        return rows[0]
    }
    static async deleteTheatre(id){
        const query= 'DELETE FROM theatres WHERE theatre_id = $1'
        await db.query(query, [id])     //id is expected as an array of variables not 
    }

}
module.exports = Theatre
