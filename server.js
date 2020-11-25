const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 8080
const postRouter = require('./routes/Posts')


const app = express()
app.use(express.json())
app.use(cors())
app.use('/posts',postRouter)

mongoose.connect('mongodb+srv://emmanuelkyeremeh:1234567qazplm@kepler.eequm.mongodb.net/Kepler?retryWrites=true&w=majority',{useNewUrlParser: true})
const db = mongoose.connection
db.on('error',console.error.bind(console,'connection error: '))
db.once('open',()=>{
    console.log('Connected succesfully!')
})



app.get('/', (req, res) => res.send('Facebook clone backend'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))