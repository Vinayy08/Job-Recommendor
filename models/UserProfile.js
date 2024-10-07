const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    skills: {
        type: [String], 
        required: true
    },
    experience_level: {
        type: String,
        enum: ['Junior', 'Intermediate', 'Senior'],
        required: true
    },
    preferences: {
        desired_roles: {
            type: [String],
            required: true
        },
        locations: {
            type: [String], 
            required: true
        },
        job_type: {
            type: String, 
            enum: ['Full-Time', 'Part-Time', 'Contract'],
            required: true
        }
    }
});

const UserProfile = mongoose.model('UserProfile', UserProfileSchema);

module.exports = UserProfile;
