import React from 'react';
import '../NotesModal/notes-modal.css';

const NotesModal = ({ job, onClose, onSubmit }) => {
  // TODO: Create state for editing notes using useState
  // TODO: Initialize with job.notes or empty string
    const [editingNotes, setEditingNotes] = React.useState(job.notes);

  // TODO: Create submit handler function
  // TODO: Call onSubmit with job.id and current editing notes
  // TODO: Call onClose to close the modal
  // TODO: Validate that notes are not empty before submitting
    const handleSubmit = () => {
        if (editingNotes.trim() === '') {   
            alert('Notes cannot be empty');
            return;
        }    
        onSubmit(job.id, editingNotes);
        onClose();
    }       

  // TODO: Create input change handler
  // TODO: Update editing notes state when user types in textarea
    const handleChange = (event) => {
        setEditingNotes(event.target.value);
    };

    return (
        <div className="modal-overlay" /* TODO: Add onClick event to close modal when clicking overlay */>
            <div className="modal" onClick={(event) => event.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">
                        Write any significant information regarding the job application
                    </h2>
                    <button 
                        className="close-btn"
                        // TODO: Add onClick event to call onClose handler
                        onClick={onClose}
                    >
                        <img src="/images/close-icon.png" alt="Close Icon" />
                        {/* Close button to exit the modal */}
                    </button>
                </div>
                
                <div className="form-group">
                    <textarea
                        className="form-textarea"
                        placeholder="Type notes here ..."
                        // TODO: Set value to current editing notes state
                        // TODO: Add onChange event to update editing notes state
                        value={editingNotes}
                        onChange={handleChange} 
                    />
                </div>
                
                <button 
                    className="submit-btn" 
                    // TODO: Add onClick event to call submit handler
                    onClick={handleSubmit}
                >
                Submit
                </button>

            </div>
        </div>
    );
};

export default NotesModal;