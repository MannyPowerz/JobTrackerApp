// components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ searchTerm, onSearchChange, onAddJobClick }) => {
    return (
        <div className="header">
        <div className="search-container">
            <input
            type="text"
            className="search-input"
            placeholder="Enter Company Name"
            // TODO: Set value to searchTerm prop
            // TODO: Add onChange event that calls onSearchChange with input value
            // TODO: Should filter jobs by company name as user types
            />
            <div className="search-icon" />
        </div>
        
        <button 
            className="add-job-btn"
            // TODO: Add onClick event that calls onAddJobClick handler
            // TODO: When clicked, should open the add job modal
        >
            <div className="add-icon" />
            Add Job
        </button>
        </div>
    );
};

export default Header;