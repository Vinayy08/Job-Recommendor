const mongoose = require('mongoose');

const uri = 'mongodb+srv://vinaybc1234:I8PBXrx5toyjSKEQ@job-recommendation-db.oi5vc.mongodb.net/job-recommendation-db?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(uri, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log('MongoDB connected to Atlas...');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err.message);
        process.exit(1); 
    }
};

module.exports = connectDB;
