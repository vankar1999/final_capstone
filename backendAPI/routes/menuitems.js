const Menuitems = require('../models/menuitems')




module.exports = function (router) {
    //GET
    router.get('/menuitems', async function (req, res) {
        const menu2 = await Menuitems.find() 
        res.json(menu2);

    }),

    //POST
    router.post('/menuitems', function (req, res) {
        const menuitem2 = new Menuitems(req.body)
        menuitem2.save()
            .then((item) => res.json(item))
            .catch(err => res.status(400).json('Error: ' + err));
    })


}

