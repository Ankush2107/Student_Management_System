const mongoose = require('mongoose');

// MongoDB connection
mongoose.set('strictQuery', false);

const connectToDB = async () => {
    try {
        const { connection } = await mongoose.connect( 'mongodb+srv://ankushkumar210701:NEIHMsbdSN3gsO27@promote.j7zvkxg.mongodb.net/?retryWrites=true&w=majority' )
    
        if(connection) {
            console.log(`Connected to MongoDB: ${connection.host}`);
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectToDB;