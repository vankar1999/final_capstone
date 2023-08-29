const router = require('express').Router();
const Menuitems = require('../models/menuitems')

router.route('/menuitems').get((req,res) =>{
    Menuitems.find()
    .then(menuitems => res.json(menuitems))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/menuitems').post((req,res) => {
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
    .then(() => res.json('Menu added'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/menuitems/:id').get((req,res) => {
    Menuitems.findById(req.params.id)
    .then(menu => res.json(menu))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/menuitems/:id').delete((req,res) => {
    Menuitems.findByIdAndDelete(req.params.id)
    .then(() => res.json('Menu Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/menuitems/:id').post((req,res) => {
    Menuitems.findById(req.params.id)
    .then(menu => {
        menu.category = req.body.category;
        menu.itemName = req.body.itemName;
        menu.ingredients = req.body.ingredients;
        menu.price = req.body.price;
        menu.img = req.body.img;

        menu.save()
        .then(() => res.json('Menu Updated'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})


// module.exports = function (router) {
//     //GET
//     router.get('/menuitems', async function (req, res) {
//         const menu2 = await Menuitems.find() 
//         res.json(menu2);

//     }),

//     //POST
//     router.post('/menuitems', function (req, res) {
//         const menuitem2 = new Menuitems(req.body)
//         menuitem2.save()
//             .then((item) => res.json(item))
//             .catch(err => res.status(400).json('Error: ' + err));
//     }),

//     router.delete('/menuitems/:id',(req,res) => {
//        const menu2 = await Menuitems.findById(req.params.id)

//     })


// }

module.exports = router;
