const express = require('express');
const router = express.Router();
const JobPosting = require('../models/JobPosting');
const UserProfile = require('../models/UserProfile');

router.post('/job-recommendations', async (req, res) => {
    const { name, skills, experience_level, preferences } = req.body;

    if (!skills || !experience_level || !preferences || !preferences.desired_roles) {
        return res.status(400).json({ error: "Invalid input" });
    }

    try {
        const jobPostings = await JobPosting.find();

        const recommendedJobs = jobPostings.filter(job => {
            const skillMatch = skills.some(skill => job.required_skills.includes(skill));
            
            const experienceMatch = job.experience_level === experience_level;

            const jobTypeMatch = job.job_type === preferences.job_type;

            const roleMatch = preferences.desired_roles.includes(job.job_title);

            const locationMatch = preferences.locations.some(location => job.location === location);

            return roleMatch && (skillMatch || experienceMatch || locationMatch || jobTypeMatch);
        });

        recommendedJobs.sort((a, b) => {
            const aMatchCount = skills.filter(skill => a.required_skills.includes(skill)).length;
            const bMatchCount = skills.filter(skill => b.required_skills.includes(skill)).length;
            return bMatchCount - aMatchCount; // Sort by skill match count
        });

        res.json(recommendedJobs);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
