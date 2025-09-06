const express = require('express');
const router = express.Router();

const {validateJobExists, validateRequiredFields, validateJobStatus, validateUpdateFields } = require('../middleware/validation.js')


// Import controller functions
const {
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob
} = require('../controllers/jobController.js');

// Define routes and connect them to controller functions
router.get('/', getAllJobs);           // GET /api/jobs
router.get('/:id',validateJobExists, getJobById);        // GET /api/jobs/:id
router.post('/', validateRequiredFields, createJob);           // POST /api/jobs
router.patch('/:id',validateUpdateFields, updateJob);       // PATCH /api/jobs/:id
router.delete('/:id',validateJobExists ,deleteJob);      // DELETE /api/jobs/:id

module.exports = router;