import React, { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Header from './Components/Header/Header.jsx';
import JobTable from './Components/JobTable/JobTable.jsx';
import FilterModal from './Components/FilterModal/FilterModal.jsx';
import NotesModal from './Components/NotesModal/NotesModal.jsx';
import AddJobModal from './Components/AddJobModal/AddJobModal.jsx';
// import AddJobModal from './Components/AddJobModal/AddJobModal.jsx';

const App = () => {
  // TODO: Create state for jobs array using useState
  // TODO: Initialize with sample data or empty array
  // TODO: Sample data structure should be array of objects with:
  // TODO: - id (unique number)
  // TODO: - company (string - company name)
  // TODO: - jobTitle (string - position title)
  // TODO: - status (string - 'Applied', 'Interviewing', 'Offer', 'Rejected')
  // TODO: - applicationDate (string - MM/DD/YYYY format)
  // TODO: - notes (string - application notes)
    const [jobs, setJobs] =  useState([
    {
      id: 1,
      company: 'Apple',
      jobTitle: 'Software Developer',
      status: 'Rejected',
      applicationDate: '07/03/2025',
      notes: 'Improve on OA coding skills and system design preparation'
    },
    {
      id: 2,
      company: 'Amazon',
      jobTitle: 'Software Developer',
      status: 'Applied',
      applicationDate: '07/05/2025',
      notes: 'Practice More Leetcode problems, especially dynamic programming'
    },
    {
      id: 3,
      company: 'Alphabet',
      jobTitle: 'Software Developer',
      status: 'Interviewing',
      applicationDate: '07/16/2025',
      notes: 'Try Looking at their recent projects and company culture'
    },
    {
      id: 4,
      company: 'Meta',
      jobTitle: 'Software Developer',
      status: 'Rejected',
      applicationDate: '07/08/2025',
      notes: 'Understand Product sense questions better for next time'
    },
    {
      id: 5,
      company: 'Nvidia',
      jobTitle: 'Software Developer',
      status: 'Rejected',
      applicationDate: '07/02/2025',
      notes: 'Be more likeable in behavioral interviews'
    },
    {
      id: 6,
      company: 'Netflix',
      jobTitle: 'Software Developer',
      status: 'Offer',
      applicationDate: '07/11/2025',
      notes: 'Email when ready to discuss compensation and start date'
    }
  ]);

  // TODO: Create state for search functionality
  // TODO: - searchTerm (string for filtering by company name)

  // TODO: Create state for filter functionality  
  // TODO: - activeFilters (array of status strings to filter by)
  const [activeFilters, setActiveFilters] = useState(['Applied', 'Interviewing', 'Offer', 'Rejected']);

  // TODO: Create state for modal visibility
  // TODO: - showNotesModal (boolean)
  const [showNotesModal, setShowNotesModal] = useState(false);
    // TODO: - selectedJob (object - currently selected job for editing)
  const [selectedJob, setSelectedJob] = useState(null);

  // TODO: - showAddJobModal (boolean
  const [showAddJobModal, setShowAddJobModal] = useState(false);
  // TODO: - showFilterModal (boolean)
  const [showFilterModal, setShowFilterModal] = useState(false);

  // TODO: Create handler for opening notes modal
  // TODO: - Accept job object as parameter
  // TODO: - Set selectedJob to the clicked job
  // TODO: - Set showNotesModal to true
  const handleNotesClick = (job) => {
    setSelectedJob(job);
    setShowNotesModal(true);
  };

  // TODO: Create handler for updating job status
  // TODO: - Accept jobId and newStatus as parameters
  // TODO: - Update the jobs array by finding job with matching id
  // TODO: - Change the status property to newStatus
  // Updates the status of a specific job in the jobs array
  // jobId: the id of the job to update
  // newStatus: the new status value to set
  const handleStatusChange = (jobId, newStatus) => {
    setJobs(prevJobs =>
      // Loop through all jobs in the array
      prevJobs.map(job =>
        // If this job's id matches the one we want to update...
        job.id === jobId
          // ...create a new object with all the same properties(spread operator), but update status
          ? { ...job, status: newStatus } // Only this job's status is changed
          // Otherwise, return the job unchanged
          : job
      )
    );
  };

  // TODO: Create handler for adding new job
  // TODO: - Accept newJob object as parameter
  // TODO: - Generate new unique id
  // TODO: - Add current date as applicationDate
  // TODO: - Add newJob to jobs array
  // TODO: - Close the add job modal

  // TODO: Create handler for updating filters
  // TODO: - Accept filters array as parameter 
  // TODO: - Update activeFilters state
  const handleFilterChange = (filters) => {
    setActiveFilters(filters);
  };


  // TODO: Create handler for search functionality
  // TODO: - Accept searchTerm string as parameter
  // TODO: - Update searchTerm state
  const [searchTerm, setSearchTerm] = useState('');


  // TODO: Create handler for filter click (opens filter modal)
  // TODO: - Set showFilterModal to true
  // TODO: - This is called when filter icon in sidebar is clicked
  const handleClickFilterClick = () => {
    setShowFilterModal(true);
  };


  // TODO: Create handler for opening add job modal
  // TODO: - Set showAddJobModal to true
  // TODO: - This is called when "Add Job" button is clicked
  const handleAddJobClick = () => {
    setShowAddJobModal(true);
  };
  // TODO: Create handler for closing modals
  // TODO: - Set all modal states to false (showNotesModal, showAddJobModal, showFilterModal)
  // TODO: - Reset selectedJob to null
  // TODO: - This can be reused for all modal close actions

  // TODO: Create handler for notes submission
  // TODO: - Accept jobId and newNotes as parameters
  // TODO: - Update the jobs array by finding job with matching id
  // TODO: - Update the notes property with newNotes
  // TODO: - Close the notes modal
  const handleNotesSubmit = (jobId, newNotes) => { 
    setJobs(prevJobs => 
      prevJobs.map(job => 
        // If this job's id matches the one we want to update...
        // notes is updated with newNotes
        job.id === jobId ? { ...job, notes: newNotes } : job
      )
    )
    setShowNotesModal(false);
  };

  // TODO: Create filtering logic for jobs display
  // TODO: - Filter jobs by searchTerm (company name includes search)
  // TODO: - Filter jobs by activeFilters (status matches selected filters)
  const filteredJobs = jobs.filter(job => {
    // Filter by search term
    const matchesSearch = job.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by active filters
    const matchesFilter = activeFilters.includes(job.status);
    
    // Return true if both conditions are met
    return matchesSearch && matchesFilter;
  });
  // TODO: - Return filtered array to pass to JobTable



  return (
    <div className="app">
      <Sidebar
        // TODO: Pass filter click handler as prop
        onFilterClick={handleClickFilterClick}
      />
      
      <div className="main-content">
        <Header 
          // TODO: Pass searchTerm state as prop (note the difference in prop name and state name)
          searchTerm={searchTerm}
          // TODO: Pass search change handler as prop (note change depending on paramter for setSearchTerm depding on value change in child component)
          onSearchChange={(term) => setSearchTerm(term)}
          // TODO: Pass add job click handler as prop
          onAddJobClick={handleAddJobClick}
        />
        
        <JobTable 
          // TODO: Replace with your filtered jobs array
          jobs={filteredJobs}
          // TODO: Pass status change handler as prop
          onStatusChange={handleStatusChange}
          // TODO: Pass notes click handler as prop
          onNotesClick={handleNotesClick}
        />
      </div>

      {/* TODO: Conditionally render NotesModal when showNotesModal is true */}
      {/* TODO: Pass selectedJob, close handler, and submit handler as props */}
      {showNotesModal && selectedJob && (
        <NotesModal
          job={selectedJob}
          onClose={() => setShowNotesModal(false)}
          onSubmit={handleNotesSubmit}
        />
      )}

      {/* TODO: Conditionally render AddJobModal when showAddJobModal is true */}
      {/* TODO: Pass close handler and submit handler as props */}
      {showAddJobModal && (
        <AddJobModal
          onClose={() => setShowAddJobModal(false)}
          onSubmit={(newJob) => {
            // Generate a new unique id for the job
            const newJobWithId = {
              ...newJob,
              id: jobs.length + 1, // Simple id generation based on current length
              applicationDate: new Date().toLocaleDateString('en-US') // Current date in MM/DD/YYYY format
            };
            setJobs([...jobs, newJobWithId]); // Add the new job to the jobs array
            setShowAddJobModal(false); // Close the modal after adding
          }}
        
        />
      )} 

      {/* TODO: Conditionally render FilterModal when showFilterModal is true */}
      {/* TODO: Pass activeFilters, close handler, and filters change handler as props */}
      {showFilterModal && (
        <FilterModal
          onClose={() => setShowFilterModal(false)}
          activeFilters={activeFilters}
          onFiltersChange={handleFilterChange}
        />
      )}
    </div>
  );
};

export default App;