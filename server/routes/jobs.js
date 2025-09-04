const express = require('express');
const router = express.Router();

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
router.get('/:id', getJobById);        // GET /api/jobs/:id
router.post('/', createJob);           // POST /api/jobs
router.patch('/:id', updateJob);       // PATCH /api/jobs/:id
router.delete('/:id', deleteJob);      // DELETE /api/jobs/:id

module.exports = router;