
// Global error handler for any uncaught errors
const errorHandler = (err, req, res, next) => {
    // Log the error stack for debugging
    console.error(err.stack); 
    // Send a generic, user-friendly 500 Internal Server Error message
    res.status(500).json({ error: 'Something went wrong' });
};

// Handles requests that fall through all other routes (404 Not Found)
const notFound = (req, res, next) => {
    res.status(404).json({ error: 'Route not found' });
};

module.exports = {
    errorHandler,
    notFound
}