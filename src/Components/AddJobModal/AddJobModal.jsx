// components/AddJobModal.js
import React from 'react';
import './add-job-modal.css';

const AddJobModal = ({ onClose, onSubmit }) => {
    // TODO: Create state for form data using useState
    const [formData, setFormData] = React.useState({
    // TODO: Initialize with object containing:
    // TODO: - company: empty string
        company: '',
    // TODO: - jobTitle: empty string  
        jobTitle: '',
    // TODO: - status: 'Applied' (default)
        status: 'Applied',
    // TODO: - notes: empty string
        notes: ''
    })

    // TODO: Create array of available status options
    // TODO: Include: 'Applied', 'Interviewing', 'Offer', 'Rejected'
    const statusOptions = ['Applied', 'Interviewing', 'Offer', 'Rejected'];

    // TODO: Create submit handler function
    // TODO: Validate that company and jobTitle are not empty
    // TODO: If valid, call onSubmit with current form data
    // TODO: Reset form data to initial state
    // TODO: If invalid, show error or prevent submission
    const handleSubmit = () => {
        if (
            formData.company && formData.jobTitle
        ) {
            onSubmit && onSubmit(formData);
                setFormData({ 
                    company: '',
                    jobTitle: '',
                    status: 'Applied',
                    notes: '' 
                });
        }
        else {
            alert('Please fill in all required fields.');   
        };
    };



    // TODO: Create input change handler function
    // TODO: Accept field name and new value as parameters
    // TODO: Update form data state for the specified field
    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="modal-overlay" /* TODO: Add onClick event to close modal when clicking overlay */>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">Add New Job Application</h2>
                    <button 
                        className="close-btn" 
                        // TODO: Add onClick event to call onClose handler
                        onClick={onClose}
                    >
                        <img 
                            src="./images/close-icon.png" 
                            alt="Close Icon" 
                        />
                    </button>
                </div>
                
                <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <input
                        type="text"
                        className="form-input"
                        // TODO: Set value to formData.company
                        value={formData.company}
                        // TODO: Add onChange event to update company field
                        onChange={(event) => handleInputChange('company', event.target.value)}
                        placeholder="Enter company name"
                    />
                </div>
                
                <div className="form-group">
                    <label className="form-label">Job Title</label>
                    <input
                        type="text"
                        className="form-input"
                        // TODO: Set value to formData.jobTitle
                        value={formData.jobTitle}
                        // TODO: Add onChange event to update jobTitle field
                        onChange={(event) => handleInputChange('jobTitle', event.target.value)}
                        placeholder="Enter job title"
                    />
                </div>
                
                <div className="form-group">
                    <label className="form-label">Status</label>
                    <select
                        className="form-select"
                        // TODO: Set value to formData.status
                        value={formData.status}
                        // TODO: Add onChange event to update status field
                        onChange={(event) => handleInputChange('status', event.target.value)}
                    >
                        {/* TODO: Map through status options to create option elements */}
                        {statusOptions.map(option => (
                            <option 
                                key={option} 
                                value={option}
                            >
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                
                <div className="form-group">
                    <label className="form-label">Notes</label>
                    <textarea
                        className="form-textarea"
                        // TODO: Set value to formData.notes
                        value={formData.notes}
                        // TODO: Add onChange event to update notes field
                        onChange={(event) => handleInputChange('notes', event.target.value)}
                        rows="4"   
                        placeholder="Add any notes about this application..."
                    />
                </div>
                
                <button 
                    className="submit-btn" 
                    // TODO: Add onClick event to call submit handler
                    onClick={handleSubmit}
                >
                    Add Job
                </button>
            </div>
        </div>
    );
};

export default AddJobModal;