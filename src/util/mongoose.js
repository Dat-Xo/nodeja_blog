module.exports ={ 
    mutipleMongoosetoObject : function (mongooseArray){
        return mongooseArray.map(mongoose => mongoose.toObject())
    },
    mongoosetoObject : function (mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    },
}