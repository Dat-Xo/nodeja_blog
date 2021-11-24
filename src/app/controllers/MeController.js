const Course = require('../models/Course')
const { mutipleMongoosetoObject } = require('../../util/mongoose')
class MeController{

    //[GET] /stored/courses
    storedCourses(req,res,next) {

        Promise.all([Course.find({}),Course.countDocumentsDeleted()])
            .then(([courses,deletedCount]) => res.render('me/stored-courses', {
                deletedCount,
                courses :mutipleMongoosetoObject(courses)
            }))
            .catch(next)
        
        // Course.countDocumentsDeleted()
        //     .then(deletedCount => {})
        //     .catch({})

        // Course.find({})
        //     .then(courses => res.render('me/stored-courses', {
        //         courses :mutipleMongoosetoObject(courses)
        //     }))
        //     .catch(next)
    }


    //[GET] trash/courses
    trashCourses(req, res, next){
        Course.findDeleted({})
            .then(courses => res.render('me/trash-courses', {
                courses :mutipleMongoosetoObject(courses)
            }))
            .catch(next)
    }

}

module.exports = new MeController