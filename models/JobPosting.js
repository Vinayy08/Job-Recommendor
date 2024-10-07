const mongoose = require('mongoose');

const JobPostingSchema = new mongoose.Schema({
    job_title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    required_skills: {
        type: [String], 
        required: true
    },
    location: {
        type: String, 
        required: true
    },
    job_type: {
        type: String, 
        enum: ['Full-Time', 'Part-Time', 'Contract'],
        required: true
    },
    experience_level: {
        type: String, 
        enum: ['Junior', 'Intermediate', 'Senior'],
        required: true
    }
});


const JobPosting = mongoose.model('JobPosting', JobPostingSchema);

module.exports = JobPosting;
