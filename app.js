const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database/db');
const UserProfile = require('./models/UserProfile');
const JobPosting = require('./models/JobPosting');
const JobRecommendation = require('./routes/recommendations')

const app = express();
connectDB(); 

app.use(bodyParser.json());

app.get('/job-postings', async (req, res) => {
    try {
        const jobs = await JobPosting.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).send('Error retrieving job postings');
    }
});

app.use('/jobs', JobRecommendation);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
