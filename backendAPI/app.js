const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const Menuitems = require('./models/menuitems')

const port = process.env.PORT || 5000

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})

// const menu = mongoose.model("menu",{    category: { type: String },
// itemName: { type: String },
// ingredients: { type: String },
// price: { type: String },
// img: { type: String }})

app.get("/menuitems", async (req, res) => {
    const menu2 = await Menuitems.find() 
    res.json(menu2);
})

app.use(cors());

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
