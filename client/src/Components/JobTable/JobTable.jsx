import React from 'react';
import './job-table.css';
import StatusDropdown from '../StatusDropdown/StatusDropdown.jsx';
import NotesModal from '../NotesModal/NotesModal.jsx';

const JobTable = ({ jobs, onNotesClick, onStatusChange, onDeleteJob }) => {
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
                        <th>Actions</th> {/* TODO: New column for delete action */}
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
                    {/*
                        onStatusChange is passed from App.jsx as handleStatusChange.
                        When StatusDropdown calls onStatusChange(job.id, status),
                        it triggers handleStatusChange(jobId, newStatus) in App.jsx.
                        job.id (from this row) becomes jobId, and status becomes newStatus.
                        This updates only the status of the selected job in the parent state.
                    */}
                    {/*
                    onStatusChange is important here because it allows each job row to update its status.
                    This function is passed from the parent and lets JobTable communicate status changes back up.
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
                    <td className="actions-cell">
                        {/* TODO: Add delete button that calls onDeleteJob with job.id */}
                        {/* TODO: Should show confirmation before deleting */}
                        <button
                            className="delete-btn"
                            onClick={() => onDeleteJob(job.id)}
                            title="Delete job application"
                            aria-label={`Delete ${job.company} ${job.jobTitle} application`}
                        >
                            🗑️
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default JobTable;