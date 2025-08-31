const express = require('express');
const router = express.Router();

const { readJobsFile, writeJobsFile } = require('../data/dataHelpers.js');

router.get('/', async (req, res) => {
    try {
        const jobs = await readJobsFile();
        res.status(200).json({success: true, data: jobs});
    } catch (error) {
        console.error('Error fetching jobs data:', error);
        res.status(500).json({ error: 'Failed to fetch jobs data' });
    }
});

const allowedStatuses = ['Applied', 'Interviewing', 'Offer', 'Rejected'];


router.post('/', async (req, res) => {
    try {
        const newJob = req.body;
        
        const requiredFields = ['company', 'jobTitle', 'status'];
        
        // Validate that all required fields are present and not empty. 
        for (const field of requiredFields) {
            // Check if the field is missing OR if it's an empty string.
                // This prevents adding jobs with incomplete data.
            if (!newJob[field] || newJob[field].trim() === '') {
                // If a field is invalid, return a 400 Bad Request error immediately.
                return res.status(400).json({ error: `Missing or invalid required field: '${field}'` });
            }
        }

        if (!allowedStatuses.includes(newJob.status)) {
            return res.status(400).json({ error: `Invalid status provided. Must be one of: ${allowedStatuses.join(', ')}` });
        }

        // Get the current date object
        const today = new Date();

        // Extract the month, day, and year
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();


        // Create the formatted date string
        const formattedDate = `${month}/${day}/${year}`;

        // Generate a simple unique ID for the new job

        const uid = function(){
        return Date.now().toString(36) + Math.random().toString(36).slice(2);
        }

        newJob.id = uid();

        newJob.applicationDate = formattedDate;

        const jobs = await readJobsFile();

        jobs.push(newJob);
        await writeJobsFile(jobs);

        res.status(201).json({ success: true, message: 'Job added successfully', data: newJob });
    } catch (error) {
        console.error('Error adding new job:', error);
        res.status(500).json({ error: 'Failed to add new job' });
    }
});


module.exports = router;  