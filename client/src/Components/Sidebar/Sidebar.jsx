import React from 'react';
import './sidebar.css';
import filterIcon from '/images/filter-icon.png';


const Sidebar = ({ onFilterClick }) => {
    return (
        <div className="sidebar">
            <button 
                className="filter-icon"
                title="Filter Jobs"
                // TODO: Add onClick event that calls onFilterClick handler
                // TODO: When clicked, should open the filter modal
                onClick={onFilterClick}
            >
                <img src={filterIcon} 
                alt="Filter Icon"/>  

            </button>
        </div>
    );
};

export default Sidebar;