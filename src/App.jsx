import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Header from './Components/Header/Header.jsx';
import JobTable from './Components/JobTable';
import NotesModal from './Components/NotesModal/NotesModal.jsx';
import AddJobModal from './Components/AddJobModal/AddJobModal.jsx';
import FilterModal from './Components/FilterModal/FilterModal.jsx';

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

  // TODO: Create state for search functionality
  // TODO: - searchTerm (string for filtering by company name)

  // TODO: Create state for filter functionality  
  // TODO: - activeFilters (array of status strings to filter by)

  // TODO: Create state for modal visibility
  // TODO: - showNotesModal (boolean)
  // TODO: - showAddJobModal (boolean) 
  // TODO: - showFilterModal (boolean)
  // TODO: - selectedJob (object - currently selected job for editing)

  // TODO: Create handler for opening notes modal
  // TODO: - Accept job object as parameter
  // TODO: - Set selectedJob to the clicked job
  // TODO: - Set showNotesModal to true

  // TODO: Create handler for updating job status
  // TODO: - Accept jobId and newStatus as parameters
  // TODO: - Update the jobs array by finding job with matching id
  // TODO: - Change the status property to newStatus

  // TODO: Create handler for adding new job
  // TODO: - Accept newJob object as parameter
  // TODO: - Generate new unique id
  // TODO: - Add current date as applicationDate
  // TODO: - Add newJob to jobs array
  // TODO: - Close the add job modal

  // TODO: Create handler for updating filters
  // TODO: - Accept filters array as parameter
  // TODO: - Update activeFilters state

  // TODO: Create handler for search functionality
  // TODO: - Accept searchTerm string as parameter
  // TODO: - Update searchTerm state

  // TODO: Create filtering logic for jobs display
  // TODO: - Filter jobs by searchTerm (company name includes search)
  // TODO: - Filter jobs by activeFilters (status matches selected filters)
  // TODO: - Return filtered array to pass to JobTable

  const sampleJobs = [
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
  ];

  return (
    <div className="app">
      <Sidebar 
        // TODO: Pass filter click handler as prop
      />
      
      <div className="main-content">
        <Header 
          // TODO: Pass searchTerm state as prop
          // TODO: Pass search change handler as prop
          // TODO: Pass add job click handler as prop
        />
        
        <JobTable 
          jobs={sampleJobs} // TODO: Replace with your filtered jobs array
          // TODO: Pass notes click handler as prop
          // TODO: Pass status change handler as prop
        />
      </div>

      {/* TODO: Conditionally render NotesModal when showNotesModal is true */}
      {/* TODO: Pass selectedJob, close handler, and submit handler as props */}

      {/* TODO: Conditionally render AddJobModal when showAddJobModal is true */}
      {/* TODO: Pass close handler and submit handler as props */}

      {/* TODO: Conditionally render FilterModal when showFilterModal is true */}
      {/* TODO: Pass activeFilters, close handler, and filters change handler as props */}
    </div>
  );
};

export default App;