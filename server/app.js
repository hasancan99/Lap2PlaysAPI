const express = require('express')
const cors = require('cors')



//routes import
const playRoutes = require('./routers/plays.js')
const theatreRoutes = require('./routers/theatres.js')


const app = express()

//MIDDLEWARE
app.use(express.json())
app.use(cors())

//route connect to app
app.use('/plays', playRoutes)  //if we type /countries this will go to the country routes file 
app.use('/theatres',theatreRoutes)

app.get("/", (req, res) => {
    res.json({
        name: "Plays",
        description: "Find and view plays around you!"
    })
})


module.exports = app
