const express = require('express');
const router = express.Router();

const { readJobsFile } = require('../data/dataHelpers.js');

router.get('/', async (req, res) => {
    try {
        const jobs = await readJobsFile();
        res.status(200).json({success: true, data: jobs});
    } catch (error) {
        console.error('Error fetching jobs data:', error);
        res.status(500).json({ error: 'Failed to fetch jobs data' });
    }
});

module.exports = router;  