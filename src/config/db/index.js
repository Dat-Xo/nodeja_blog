const mongoose = require("mongoose")
// const config = require("config")
// const db = config.get("mongoURI")

async function connect() {
    try{
        await mongoose.connect("mongodb+srv://dat:1234@posts.ghruy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
        console.log('Successfully')
    } catch (error){
        console.log('fall')
    }
}

module.exports  = {connect}