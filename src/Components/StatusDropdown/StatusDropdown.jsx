import React from 'react';
import './status-dropdown.css';

const StatusDropdown = ({ job, onStatusChange }) => {
  // TODO: Create state for dropdown open/close using useState
  // TODO: Initialize as false (closed)
    const [dropdownIsOpen, setDropdownIsOpen] = React.useState(false);

  // TODO: Create array of available status options
  // TODO: Include: 'Applied', 'Interviewing', 'Offer', 'Rejected'
    const statusOptions = ['Applied', 'Interviewing', 'Offer', 'Rejected'];

  // TODO: Create function to get color for each status
  // TODO: Return '#ff4757' for 'Rejected'
  // TODO: Return '#2ed573' for 'Offer'  
  // TODO: Return '#ffa726' for 'Interviewing'
  // TODO: Return '#5352ed' for 'Applied'
  // TODO: Return '#666' for default

    const getStatusColor = (status) => {
        switch (status) {
        case 'Rejected': return '#ff4757';
        case 'Offer': return '#2ed573';
        case 'Interviewing': return '#ffa726';
        case 'Applied': return '#5352ed';
        default: return '#666';
        }
    };

  // TODO: Create function to get CSS class for each status
  // TODO: Return 'status-rejected' for 'Rejected'
  // TODO: Return 'status-offer' for 'Offer'
  // TODO: Return 'status-interviewing' for 'Interviewing' 
  // TODO: Return 'status-applied' for 'Applied'
  // TODO: Return empty string for default


    const getStatusClass = (status) => {
        switch (status) {
        case 'Rejected': return 'status-rejected';
        case 'Offer': return 'status-offer';
        case 'Interviewing': return 'status-interviewing';
        case 'Applied': return 'status-applied';
        default: return '';
        }
    };

    return (
        <div className="dropdown-container">
          <button
            className={`dropdown-toggle ${getStatusClass(job.status)}`}
            style={{ 
                color: getStatusColor(job.status),
                fontWeight: '600'
            }}
            // TODO: Add onClick event to toggle dropdown open/close state
            onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
          >
              {job.status}
          </button>

          {dropdownIsOpen && (
          <div className="dropdown-menu">
            {statusOptions.map(status => (
              <div
                key={status}
                className="dropdown-item"
                style={{ color: getStatusColor(status) }}
                onClick={() => {
                  // Calls onStatusChange with job.id and status
                  // This triggers handleStatusChange(jobId, newStatus) in App.jsx
                  // job.id is passed as jobId, status as newStatus
                  // Result: Only the selected job's status is updated in parent state
                  onStatusChange && onStatusChange(job.id, status);
                  setDropdownIsOpen(false);
                }}
              >
                {status}
              </div>
            ))}
          </div>
        )} 
        
  
        {/* TODO: Conditionally render dropdown menu based on setDropdownIsOpen state */}
        {/* TODO: Map through status options and create clickable items */}
        {/* TODO: Each item should call onStatusChange with job.id and selected status 

        {/* TODO: Each item should close dropdown after selection */}
        {/* TODO: Apply appropriate color styling to each option */}
        </div>
    );
};

export default StatusDropdown;