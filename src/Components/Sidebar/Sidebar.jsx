import React from 'react';
import './sidebar.css';

const Sidebar = ({ onFilterClick }) => {
    return (
        <div className="sidebar">
            <div 
                className="filter-icon"
                // TODO: Add onClick event that calls onFilterClick handler
                // TODO: When clicked, should open the filter modal
            title="Filter Jobs"
            />
        </div>
    );
};

export default Sidebar;