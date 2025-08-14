import React from 'react';
import './filter-modal.css';
import closeIcon from '/images/close-icon.png';

// FilterModal component receives:
// - onClose: function to close the modal
// - activeFilters: array of currently selected filters
// - onFiltersChange: function to update filters in parent
const FilterModal = ({ onClose, activeFilters, onFiltersChange }) => {
    // Array of all possible status options for jobs
    const statusOptions = ['Applied', 'Interviewing', 'Offer', 'Rejected'];

  // TODO: Create toggle filter handler function
// IF IT IS APART OF THE ACTIVE FILTERS TOGGLE OUT OF IT, IF IT IS NOT TOGGLE IN TO INTO THE ACTIVE FILTERS  
    // Toggles a status filter on or off
    // If the status is already selected, remove it from the filters
    // If the status is not selected, add it to the filters
    const toggleFilter = (status) => {
        // If status is already in activeFilters, remove it
        // This creates a new array without the selected status
        const updatedFilters = activeFilters.includes(status) ? activeFilters.filter(filter => filter !== status) // Remove status from filters
        // Removing a filter means you no longer want to see jobs with this status
        // Otherwise, add the status to the filters
        : [...activeFilters, status]; // Add status to filters
        // Adding a filter means you want to include jobs with this status in your results
  // TODO: Accept status string as parameter
  // TODO: If status is already in activeFilters, remove it
  // TODO: If status is not in activeFilters, add it
  // TODO: Call onFiltersChange with updated filters array
        onFiltersChange(updatedFilters); // Update the filters in the parent component
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" 
                // TODO: Add onClick event to close modal when clicking overlay
                onClick={(event) => event.stopPropagation()}
                // Prevents clicks on the modal content from closing it
            >
                <div className="modal-header">
                    <h2 className="modal-title">Add Filter(s) to display Job based on Status</h2>
                    <button 
                        className="close-btn"
                        // TODO: Add onClick event to call onClose handler
                        onClick={onClose}
                    >
                        {/* Close button to exit the modal */}
                        <img src={closeIcon} alt="Close Icon" />
                    </button>
                </div>
                
                <div className="filter-options">

                    {statusOptions.map(status => (
                        <div 
                            key={status} 
                            className="filter-option"
                        >
                            <div
                                className={`filter-checkbox ${activeFilters.includes(status) ? 'checked' : ''}`}
                                onClick={() => toggleFilter(status)}
                            />
                            <span>{status}</span>
                        </div>
                    ))}
                </div>
                {/* TODO: Each option should have:
                    - Checkbox div with 'checked' class if status is in activeFilters
                    - Click handler that calls toggle filter function
                    - Status name label */}
                
                
                <button 
                className="submit-btn" 
                // TODO: Add onClick event to call onClose handler
                // TODO: This applies the current filter selections
                onClick={onClose}
                >
                    <img src="" alt="" />
                    Update Filter
                </button>
            </div>
        </div>
    );
};

export default FilterModal;