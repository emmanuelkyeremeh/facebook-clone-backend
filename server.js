const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 8080




app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://emmanuelkyeremeh:1234567qazplm@kepler.eequm.mongodb.net/Kepler?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error',console.error.bind(console,'connection error: '))
db.once('open',()=>{
    console.log('Connected succesfully!')
})



const postRouter = require('./routes/Posts')
app.use('/posts',postRouter)


app.get('/', (req, res) => res.send('Facebook clone backend'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))