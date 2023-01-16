const { default: mongoose } = require('mongoose')

require('../DB/DBConnection.js')
const productSchema=new mongoose.Schema({
    name: String,
    category: String,
    price: Number,
    status: String,
    saleAmount: Number,
    dateOfSale: Date
})
const productTransition= mongoose.model('Data',productSchema)
module.exports=productTransition