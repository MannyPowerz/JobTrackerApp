const { readJobsFile, writeJobsFile } = require('../data/dataHelpers.js');

const config = require('../config/config');

const allowedStatuses = config.jobs.allowedStatuses;

const getAllJobs = async (req, res) => {
    try {
        const jobs = await readJobsFile();
        res.status(200).json({success: true, data: jobs});
    } catch (error) {
        console.error('Error fetching jobs data:', error);
        res.status(500).json({ error: 'Failed to fetch jobs data' });
    }
};

const getJobById = async (req, res) => {
    try {
    // The job was already found by the middleware and attached to the request.
    const job = req.job;
    res.status(200).json({ success: true, data: job });
    } catch (error) {
        console.error('Error fetching job:', error);
        res.status(500).json({error: 'Failed to fetch job'})
    }
};

const createJob = async (req, res) => {
    try {
        const newJob = req.body;
        
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
};

const updateJob = async (req, res) => {
    try {
        const jobId = req.params.id;
        const updates = req.body;
        const jobs = await readJobsFile();

        // find the index of the job to update
        const jobIndex = jobs.findIndex(job => job.id === jobId);

        // Get the job object to update
        const jobToUpdate = jobs[jobIndex];

        for (const key of Object.keys(updates)) {
            jobToUpdate[key] = updates[key];
        }
        
        // Save the updated job back to the jobs array by indicating its index within the array
        jobs[jobIndex] = jobToUpdate;
        await writeJobsFile(jobs);
        res.status(200).json({ success: true, message: 'Job updated successfully', data: jobToUpdate });
    } catch (error) {
        console.error('Error updating job:', error);
        res.status(500).json({ error: 'Failed to update job' });
    }
};   

const deleteJob = async (req, res) => {
    try {
        // Extract Job ID from URL parameters
        const jobId = req.params.id;
        // Load Current Data from jobs.json
        const jobs = await readJobsFile();
        // Find the index of the job to delete
        const jobIndex = jobs.findIndex(job => job.id === jobId);
        // If the job is not found, return a 404 error to see if job exists
        if (jobIndex === -1) {
            return res.status(404).json({ error: 'Job not found' });
        }
        // Remove the 1 at the specifed index job from the array
        jobs.splice(jobIndex, 1);
        // Save the updated jobs array back to jobs.json
        await writeJobsFile(jobs);
        // Respond with a success message
        res.status(200).json({ success: true, message: 'Job deleted successfully' });
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error deleting job:', error);
        // Respond with a 500 Internal Server Error if something goes wrong
        res.status(500).json({ error: 'Failed to delete job' });
    }
};

module.exports = {
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob
};