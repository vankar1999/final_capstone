const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.json()); //tell server that we expect to receive some sort of json string in the body

const Menuitems = require('./models/menuitems')

app.use('/api', require('./routes')) //missing piece when using the router

app.use(function (req, res) {
    const err = new Error('Not Found')
    err.status = 404
    res.json(err)
})

mongoose.connect("mongodb://127.0.0.1:27017/menu", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
    .then(() => console.log("Connected to DB"))
    .catch(console.error);

const port = process.env.PORT || 5000

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})
    