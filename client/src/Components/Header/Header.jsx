// components/Header.js
import React from 'react';
import './Header.css';
import searchIcon from '/images/search-icon.jpg';
import addIcon from '/images/add-icon.png';

const Header = ({ searchTerm, onSearchChange, onAddJobClick }) => {
    return (
        <div className="header">
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Enter Company Name"
                    // TODO: Set value to searchTerm prop
                    value={searchTerm}
                    // TODO: Add onChange event that calls onSearchChange with input value
                    onChange={(event) => onSearchChange(event.target.value)}
                    // TODO: Should filter jobs by company name as user types
                />
                <img 
                    src={searchIcon} 
                    className="search-icon"
                    alt="Search Icon"
                />
            </div>
        
            <button 
                className="add-job-btn"
                // TODO: Add onClick event that calls onAddJobClick handler
                // TODO: When clicked, should open the add job modal
                onClick={onAddJobClick}
            >
                <img
                    src={addIcon}
                    className="add-icon"
                    alt="Add Job Icon"
                />
                Add Job
            </button>
        </div>
    );
};

export default Header;