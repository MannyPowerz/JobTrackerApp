import React from 'react';
import './filter-modal.css';

const FilterModal = ({ onClose, activeFilters, onFiltersChange }) => {
  // TODO: Create array of available status options
  // TODO: Include: 'Applied', 'Interviewing', 'Offer', 'Rejected'

  // TODO: Create toggle filter handler function
  // TODO: Accept status string as parameter
  // TODO: If status is already in activeFilters, remove it
  // TODO: If status is not in activeFilters, add it
  // TODO: Call onFiltersChange with updated filters array

    return (
        <div className="modal-overlay" /* TODO: Add onClick event to close modal when clicking overlay */>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
            <h2 className="modal-title">Add Filter(s) to display Job based on Status</h2>
            <button 
                className="close-btn" 
                // TODO: Add onClick event to call onClose handler
            />
            </div>
            
            <div className="filter-options">
            {/* TODO: Map through status options to create filter checkboxes */}
            {/* TODO: Each option should have:
                - Checkbox div with 'checked' class if status is in activeFilters
                - Click handler that calls toggle filter function
                - Status name label */}
            </div>
            
            <button 
            className="submit-btn" 
            // TODO: Add onClick event to call onClose handler
            // TODO: This applies the current filter selections
            >
            Update Filter
            </button>
        </div>
        </div>
    );
};

export default FilterModal;