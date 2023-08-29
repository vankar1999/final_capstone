const router = require('express').Router();
const Menuitems = require('../models/menuitems')

//To get all items
router.route('/').get((req,res) =>{
    Menuitems.find()
    .then(menuitems => res.json(menuitems))
    .catch(err => res.status(400).json('Error: ' + err));
});

//To ADD
router.route('/').post((req,res) => {
    const category = req.body.category;
    const itemName = req.body.itemName;
    const ingredients = req.body.ingredients;
    const price = req.body.price;
    const img = req.body.img;

    const newMenu = new Menuitems({
        category,
        itemName,
        ingredients,
        price,
        img,

    })

    newMenu.save()
    .then(() => res.json('Menu item added'))
    .catch(err => res.status(400).json('Error: ' + err));
})

//Find by ID, not used at the moment
router.route('/:id').get((req,res) => {
    Menuitems.findById(req.params.id)
    .then(menu => res.json(menu))
    .catch(err => res.status(400).json('Error: ' + err));
});

//To DELETE
router.route('/:id').delete((req,res) => {
    Menuitems.findByIdAndDelete(req.params.id)
    .then(() => res.json('Menu item deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//To UPDATE
router.route('/:id').put((req,res) => {
    Menuitems.findById(req.params.id)
    .then(menu => {
        menu.category = req.body.category;
        menu.itemName = req.body.itemName;
        menu.ingredients = req.body.ingredients;
        menu.price = req.body.price;
        menu.img = req.body.img;

        menu.save()
        .then(() => res.json('Menu item updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
