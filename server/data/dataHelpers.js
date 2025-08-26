const fsPromises = require('fs/promises');
const path = require('path');

async function readJobsFile() {
    try 
    {
        const data = await fsPromises.readFile(path.join(__dirname, 'jobs.json'), 'utf8');
        console.log('Jobs data read successfully');
        return JSON.parse(data);
    }
    catch (error) 
    {
        console.error('Error reading jobs file:', error);
        throw error;
    }
}

async function writeJobsFile(jobsData) {
    try         
    {   
        const filePath = path.join(__dirname, 'jobs.json');
        // writeFile parameters:
            // path: The file path where the data will be written (string).
            // data: The content to write into the file (string, Buffer, etc.).
            // options: (Optional) An object or string specifying encoding, mode, and flags (e.g., { encoding: 'utf8', flag: 'w' }).
        await fsPromises.writeFile(filePath, JSON.stringify(jobsData, null, 2), 'utf8')
        console.log('Jobs data written successfully to jobs.json');
    } 
    catch (error) 
    {
        console.error('Error writing jobs file:', error);
        throw error;
    }
}


module.exports = { readJobsFile, writeJobsFile };

