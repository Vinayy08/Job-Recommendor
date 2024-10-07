# Job Recommendation Service

This project is a Node.js-based backend service that recommends jobs based on user profiles. It filters and sorts job postings from a MongoDB database based on the user's skills, experience, desired roles, location, and job type.

## Features
- Recommend jobs based on skills, experience, and preferences.
- Easy-to-use REST API for job recommendation.
- MongoDB Atlas integration for job postings and user profiles.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v12 or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (Free tier available)
- [Git](https://git-scm.com/)

## Setup Instructions

### 1. Clone the Repository
First, clone the repository to your local machine:
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies
Run the following command to install the required npm packages:
```bash
npm install
```

### 3. Configure MongoDB Atlas

- **Create a MongoDB Cluster on Atlas:**
  1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
  2. Sign in or create a new account.
  3. Create a new cluster using the free tier.

- **Create a Database:**
  1. Create a database called `job-recommendation-db` on MongoDB Atlas.
  2. Create collections for `job_postings` and `user_profiles`.

- **Get the Connection String:**
  1. Once your database is set up, click on "Connect" and choose "Connect Your Application."
  2. Copy the connection string. It will look like this:
     ```
     mongodb+srv://<username>:<password>@cluster0.mongodb.net/job-recommendation-db?retryWrites=true&w=majority
     ```


### 4. Run the Application
Run the following command to start the server:
```bash
npm start
```
This will start the server at `http://localhost:5000`.

### 5. API Endpoints

#### Get All Job Postings
**Endpoint:** `GET /job-postings`

Fetches all available job postings from the database.

#### Recommend Jobs
**Endpoint:** `POST /jobs/job-recommendations`

Provides job recommendations based on the user's profile.

**Sample Request Body:**
```json
{
  "name": "Jane Doe",
  "skills": ["Python", "Django", "REST APIs"],
  "experience_level": "Intermediate",
  "preferences": {
    "desired_roles": ["Backend Developer", "Software Engineer"],
    "locations": ["Remote", "New York"],
    "job_type": "Full-Time"
  }
}
```

**Sample Response:**
```json
[
  {
    "job_title": "Backend Developer",
    "company": "Tech Solutions Inc.",
    "location": "Remote",
    "job_type": "Full-Time",
    "required_skills": ["Python", "Django", "REST APIs"],
    "experience_level": "Intermediate"
  },
  {
    "job_title": "Software Engineer",
    "company": "Innovative Tech Corp.",
    "location": "New York",
    "job_type": "Full-Time",
    "required_skills": ["Python", "Microservices", "SQL"],
    "experience_level": "Intermediate"
  }
]
```

