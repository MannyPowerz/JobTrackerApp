import React from 'react';

const JobTable = ({ jobs }) => {
    return (
        <div>
            <h2>Job Table Coming Soon...</h2>
            <p>Jobs count: {jobs ? jobs.length : 0}</p>
        </div>
    );
};

export default JobTable;