const router = require('express').Router()
let Posts = require('../models/posts.model')

router.route('/').get((req,res)=>{
  Posts.find()
  .then(posts=> res.json(posts))
  .catch(err => res.status(400).json(`Error: ${err}`))
})

router.route('/create').post((req,res)=>{
  const avatar = req.body.avatar
  const name = req.body.name
  const ImgUrl  = req.body.ImgUrl
  const caption = req.body.caption

  const newPost = new Posts({
    avatar,
    name,
    ImgUrl,
    caption
  })
  newPost.save()
  .then(()=> res.json('Post Saved!'))
  .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router
