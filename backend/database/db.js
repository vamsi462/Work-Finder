const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://vamsi999:4uLP1zEEcax4e4SX@cluster0.4irvd.mongodb.net/<dbname>?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }

        )
        console.log("connected to mongoDB")
    } catch {
        console.log(error)
    }
}

module.exports = connectDB;