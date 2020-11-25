const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    avatar:{
        type: String,
        required:true
    },
    name: {
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:false
    },
    ImgUrl: {
        type:String,
        required:true
    }
})
const Post = mongoose.model('Post',postSchema)
module.exports= Post
