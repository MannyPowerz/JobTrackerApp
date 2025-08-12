// components/JobTable.js
import React from 'react';
import './job-table.css';
import StatusDropdown from '../StatusDropdown/StatusDropdown.jsx';

const JobTable = ({ jobs, onNotesClick, onStatusChange }) => {
  // TODO: Create helper function to truncate long notes
  // TODO: Accept notes string and maxLength number as parameters
  // TODO: If notes length > maxLength, return substring + "..."
  // TODO: Otherwise return original notes
    const truncateNotes = (notes, maxLength = 20) => {
        return notes.length > maxLength ? notes.substring(0, maxLength) + '...' : notes;
    };

    return (
        <div className="table-container">
            <table className="job-table">
                <thead className="table-header">
                    <tr>
                        <th>Company Name</th>
                        <th>Job Title</th>
                        <th>Status</th>
                        <th>Application Date</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                {jobs.map(job => (
                    <tr key={job.id} className="job-row">
                    <td>{job.company}</td>
                    <td>{job.jobTitle}</td>
                    <td className="status-cell">
                    {/*
                        Pass the current job object to StatusDropdown.
                        'job' (prop) here refers to a single job object, not the whole jobs array.
                        This allows StatusDropdown to display and update the status for only this job.
                    */}
                        <StatusDropdown 
                        job={job} // Passes the single job object for this row
                        onStatusChange={onStatusChange} // Handler to update status for this job
                    />
                    </td>
                    <td>{job.applicationDate}</td>
                    <td 
                        className="notes-cell"
                        // TODO: Add onClick event that calls onNotesClick with job object
                        onClick={() => onNotesClick(job)}
                        // TODO: Should open notes modal for editing this job's notes
                    >
                        {truncateNotes(job.notes)}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default JobTable;