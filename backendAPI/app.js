const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('express').Router()

const app = express()
app.use(cors());

const Menuitems = require('./models/menuitems')

const port = process.env.PORT || 5000

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})

//Current routes - subject to be moved 
app.get("/menuitems", async (req, res) => {
    const menu2 = await Menuitems.find() 
    res.json(menu2);
})

router.route('/add').post((req,res) => {
    const category = req.body.category;
    const itemname = req.body.itemname;
    const ingredients = req.body.ingredients;
    const price = req.body.price;
    const img = req.body.img;

} )

const newMenuItems = new Menuitems({
    category,
    itemname,
    ingredients,
    price,
    img,
});

newMenuItems.save()
    .then(() => res.json('Menu Added'))
    .catch(err => res.status(400).json('Error: ' + err));


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

module.exports = router;