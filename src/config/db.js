const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)

        console.log('Database is connected successfully')
    } catch(err){
        console.log('MongoDB ❌ Not Connected ',err)
        process.exit(1)
    }
    
}

module.exports = connectDB ;