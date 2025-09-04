const dotenv = require('dotenv');
const path = require('path');

// Load envioment 
const envPath = path.join(__dirname, '../.env');
dotenv.config({path : envPath});

const config = {
    // Server configuration
    server : {
        port: process.env.PORT || 3001,
        environment: process.env.NODE_ENV || 'development'
    }
    // API configuration
    ,api : {
        prefix: '/api',
        version: 'v1'
    }
    // File paths
    ,data : {
        jobsFilePath : path.join(__dirname, '../data/jobs.json')
    }
    // Job application settings
    ,jobs : {
        allowedStatuses : ['Applied', 'Interviewing', 'Offer', 'Rejected'],
        requiredFields : ['company', 'jobTitle', 'status', 'notes']
    }
    // CORS settings
    ,cors: {
        origin: process.env.CLIENT_URL || 'http://localhost:3000',
        credentials: true
    }
}
module.exports = config