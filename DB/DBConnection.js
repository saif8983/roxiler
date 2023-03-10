const mongoose= require('mongoose')
require('dotenv').config();
const username = process.env.USER_NAME
const password = process.env.PASSWORD
const cluster = process.env.CLUSTER
const dbname = process.env.DB_NAME
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,{useNewUrlParser:true})
.then(()=>{console.log("connected")}).catch((err)=>{
    console.log(err)
}) 