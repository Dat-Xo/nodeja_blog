const Course = require('../models/Course')
const { mutipleMongoosetoObject } = require('../../util/mongoose')
class SideController{

    //[GET] /news
    home(req,res,next) {

        Course.find({})
            .then(courses =>{ 
                // courses.map(course => course.toObject())
                res.render('home',{ 
                    courses :mutipleMongoosetoObject(courses)
                })
            })
            .catch(next)

        // res.render('home')
    }

    //[GET] /news
    search(req,res) {
        res.render('search')
    }

}

module.exports = new SideController