
const { readJobsFile, writeJobsFile } = require('./dataHelpers.js'); // Replace with your actual file name

// Test data for writing
const testJobsData = [
    {
        id: 1,
        title: "Software Developer",
        company: "Tech Corp",
        location: "Remote",
        salary: "$80,000"
    },
    {
        id: 2,
        title: "Data Analyst",
        company: "Data Inc",
        location: "New York",
        salary: "$65,000"
    }
];

// Test for readJobsFile function
async function testReadJobsFile() {
    console.log('\n--- Testing readJobsFile() ---');
    try {
        const jobsData = await readJobsFile();
        console.log('✅ Read test successful');
        console.log('Returned Jobs Data:', jobsData);
        return jobsData;
    } catch (error) {
        console.error('❌ Read test failed:', error.message);
        return null;
    }
}

// Test for writeJobsFile function
async function testWriteJobsFile() {
    console.log('\n--- Testing writeJobsFile() ---');
    try {
        await writeJobsFile(testJobsData);
        console.log('✅ Write test successful');
        
        // Verify the write by reading the file back
        console.log('\n--- Verifying write by reading back ---');
        const verificationData = await readJobsFile();
        console.log('Verification data:', verificationData);
        
        return true;
    } catch (error) {
        console.error('❌ Write test failed:', error.message);
        return false;
    }
}

// Main test runner
async function runAllTests() {
    console.log('🧪 Starting Jobs File Tests...');
    
    // Test 1: Read existing file
    const readResult = await testReadJobsFile();
    
    // Test 2: Write new data
    const writeResult = await testWriteJobsFile();
    
    // Test 3: Read again to ensure write worked
    console.log('\n--- Final read test after write ---');
    await testReadJobsFile();
    
    console.log('\n📊 Test Summary:');
    console.log(`Read test: ${readResult ? '✅ PASSED' : '❌ FAILED'}`);
    console.log(`Write test: ${writeResult ? '✅ PASSED' : '❌ FAILED'}`);
}

// Run the tests
runAllTests()
    .then(() => {
        console.log('\n🏁 All tests completed');
    })
    .catch(error => {
        console.error('💥 Test runner error:', error);
    });