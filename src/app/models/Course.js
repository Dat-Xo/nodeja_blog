const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');



const Schema = mongoose.Schema;

const Course = new Schema({
    name: String,
    description: String,
    image: String,
    videoId:String,
    level: String,
    content: String,
    slug: { type: String, slug: 'name', unique: true }
},{
    timestamps: true,
});

//Add plug in
mongoose.plugin(slug)
Course.plugin(mongooseDelete, { 
    deletedAt : true,
    overrideMethods: 'all' })


module.exports = mongoose.model('Course', Course);