const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    avatar:{
        type: String,
        required: false
    },
    name: {
        type:String,
        required:false
    },
    caption:{
        type:String,
        required:false
    },
    ImgUrl: {
        type:String,
        required:false
    }
})
const Post = mongoose.model('Post',postSchema)
module.exports= Post
