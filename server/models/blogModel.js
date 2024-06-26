const mongoose = require("mongoose")

const { DateTime } = require("luxon")

const Schema = mongoose.Schema


const postSchema = new Schema({

    title : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    tag : {
        type : String,
        required : true
    },
    image : {
        type : String,
        default : "/images/blogCoverImgs/blog1.png"
    },
    content : {
        type : String,
        required :  true
    }
})

postSchema.virtual('url').get(function(){
    return `story/${this._id}`
})

postSchema.virtual('urlrelated').get(function(){
    return `${this._id}`
})

postSchema.virtual("formattedDate").get(function(){
    return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED)
})

const post = mongoose.model('post', postSchema)

module.exports = post