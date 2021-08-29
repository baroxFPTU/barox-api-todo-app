const mongoose = require('mongoose');

async function connectDB (URI) {
    try {
        await mongoose.connect(URI,{useNewUrlParser: true}, () => {
            console.log('Connected to database');
        });

    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB;