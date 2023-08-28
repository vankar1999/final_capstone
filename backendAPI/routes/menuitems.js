const Menuitems = require('../models/menuitems')

//POST
module.exports = function (router) {
    router.post('/menuitems', function (req, res) {
        const menuitem2 = new Menuitems(req.body)
        menuitem2.save()
            .then((item) => res.json(item))
            .catch(err => res.status(400).json('Error: ' + err));
    })

}

