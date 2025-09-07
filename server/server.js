const dotenv = require('dotenv');
const path = require('path');
const config = require('./config/config')
const {notFound, errorHandler} = require('./middleware/errorHandler.js')




const envPath = path.join(__dirname, '/.env');

dotenv.config({ path: envPath });

const PORT = config.server.port;

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
// app.use(cors({
//     origin: config.cors.origin,
//     credentials: config.cors.credentials
// }));
app.use(cors({
    origin: true,  // Allow all origins during development
    credentials: true
}));

// Import the jobs router
const jobsRouter = require('./routes/jobs');                
// Routes like GET /api/jobs
app.use(`${config.api.prefix}/jobs`, jobsRouter);                           


app.get(`${config.api.prefix}/test`, (req, res) => {
    res.json({ message: 'API is working!' });
});

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, (error) => {
    if (error) {
        console.error('Error starting server:', error);
    } else {
        console.log(`Server running on port ${PORT}`);
    }
});

console.log('Current working directory:', process.cwd());
console.log('Server file directory:', __dirname);