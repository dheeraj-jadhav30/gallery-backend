const imagekit = require('@imagekit/nodejs')

const imagekitInstance = new imagekit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})



const uploadImage = async (buffer) => {
    const result = await imagekitInstance.files.upload({
        file:buffer.toString('base64') ,
        fileName:'image.jpg'
    })

    return result 
}

module.exports = uploadImage ;