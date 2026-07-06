
const express = require('express')
const multer = require('multer')
const postModel = require('./models/post.model')
const uploadImage = require('./services/storage.services')
const cors = require('cors')


const app = express() 

app.use(express.json()) 
app.use(cors())
const upload = multer({
    storage:multer.memoryStorage()
})

//create-post route
app.post('/create-post',upload.single('image') , async (req,res) => {

    const {caption} = req.body 
    const buffer = req.file.buffer 

    const result = await uploadImage(buffer) 
    console.log(result) 

    const post = await postModel.create({
        url: result.url ,
        caption : caption
    })

    res.status(200).json({
        msg:"post created successfully",
        post 
    })

    console.log('post created successfully')


    
})

// get-posts route
app.get('/posts' , async (req,res) => {

        const posts = await postModel.find()

        // console.log(posts)

        if(posts.length > 0){
            return res.status(200).json({
                msg:"posts fetched successfully",
                posts
            })
        }else{
            return res.status(404).json({
                msg:"no posts found"
            })
        }
})

// singgle post route
app.get('/posts/:id',async (req,res) => {

    const id = req.params.id ;
    

    const post = await postModel.findById(
        id
     )

     if(post) {
        return res.status(200).json({
            msg:"post fetched successfully",
            post
        })
     }else{
        return res.status(404).json({
            msg:"post not found",
        })
     }
    

})

// delete post route
app.delete('/posts/:id' , async (req,res) => {
    const id = req.params.id 

    const post = await postModel.findByIdAndDelete(id) 

    console.log(post)

    if(post){
        return res.status(200).json({
            success:true ,
            message:"post deleted successfully",
            data:post
        })
    }else{
        return res.status(404).json({
            success:false ,
            message:"post not found"
        })
    }
})

app.patch('/posts/:id' , async (req , res) => {
    const id = req.params.id 

    const caption = req.body.caption 
    console.log(caption)

    const post = await postModel.findByIdAndUpdate(id , {
        caption:caption
    } , {new:true})

    if(post){
        return res.status(200).json({
            success:true ,
            message:"post updated successfully" ,
            data:post
        })
    }else{
        return res.status(404).json({
            success:false ,
            message:"post not found"
        })
    }
})

module.exports = app ;