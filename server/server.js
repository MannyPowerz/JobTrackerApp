const dotenv = require('dotenv')
const path = require('path');

const envPath = path.join(__dirname, '/.env');

dotenv.config({ path: envPath });

const PORT = process.env.PORT

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Import the jobs router
const jobsRouter = require('./routes/jobs');                
// Routes like GET /api/jobs
app.use('/api/jobs', jobsRouter);                           


app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

app.listen(PORT, (error) => {
    if (error) {
        console.error('Error starting server:', error);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});

console.log('Current working directory:', process.cwd());
console.log('Server file directory:', __dirname);