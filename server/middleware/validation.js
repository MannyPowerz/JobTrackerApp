const { readJobsFile} = require('../data/dataHelpers');
const config = require('../config/config');

const validateRequiredFields = (req, res, next) => {
    const {company, jobTitle, status, notes} = req.body;
    const requiredFields = config.jobs.requiredFields;

    // Validate that all required fields are present and not empty. 
    for (const field of requiredFields) {
        // Check if the field is missing OR if it's an empty string.
            // This prevents adding jobs with incomplete data.
        if (!req.body[field] || req.body[field].trim() === '') {
            // If a field is invalid, return a 400 Bad Request error immediately.
            return res.status(400).json({ error: `Missing or invalid required field: '${field}'` });
        }
    }

    next();
}

const validateJobStatus = async (req, res, next) => {
    const newJob = req.body;

    const allowedStatuses = config.jobs.allowedStatuses;

    if (!allowedStatuses.includes(newJob.status)) {
        return res.status(400).json({ error: `Invalid status provided. Must be one of: ${allowedStatuses.join(', ')}` });
    }
    next();
}

const validateJobExists = async (req, res, next) => {
    try {
        // Extract Job ID from URL parameters
        const jobId = req.params.id;
        // Load Current Data from jobs.json
        const jobs = await readJobsFile();
        // Find the index of the job to delete
        const job = jobs.find(job => job.id === jobId);
        // If the job is not found, return a 404 error to see if job exists
        if (!job) {
            return res.status(404).json({error: 'Job not found'});
        }
        // Attach the found job to the request object so the controller can access it.
        req.job = job;

        next();
    } catch (error) {
        console.error('Error fetching job:', error);
        res.status(500).json({error: 'Failed to fetch job'})
    }
}

const validateUpdateFields = (req, res, next) => {
    const updates = req.body;
    // Only allow updates to specific fields
    const allowedUpdates = config.jobs.requiredFields;
    const allowedStatuses = config.jobs.allowedStatuses;


    for (const key of Object.keys(updates)) {
        // Check if the key is in the list of allowed updates
        if (allowedUpdates.includes(key)) {

            // If the key is 'status', validate its value
            // This ensures that the status remains one of the predefined valid options
            // If the value of status does not match one of the allowed statuses, return a 400 error
            if (key === 'status' && !allowedStatuses.includes(updates[key])) {
                return res.status(400).json({ error: `Invalid status provided. Must be one of: ${allowedStatuses.join(', ')}` });
            }
        }
    }
    // If all checks pass, move on to the next middleware/controller
    next();
}

module.exports = {
    validateRequiredFields,
    validateJobStatus,
    validateJobExists,
    validateUpdateFields 
}