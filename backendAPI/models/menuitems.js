const mongoose = require(‘mongoose’)

const menuItemsSchema = new mongoose.Schema({

category: { type: String },
itemName: { type: String },
ingredients: { type: String },
price: { type: String },
img: { type: String }

})

module.exports = mongoose.model(‘Menuitems’, menuItemsSchema)