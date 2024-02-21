import React, { useState } from 'react';
import { FaHome, FaSearch, FaStar, FaMapMarkerAlt, FaHeart, FaUser } from 'react-icons/fa';
import './Check.css'; // Make sure to adjust the import path for your styles
import { Link, useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTabClick = (path) => {
    navigate(path);
    // Optionally, close the sidebar when a tab is clicked
    setIsSidebarOpen(true);
  };

  return (
  
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        ☰
      </div>
      <div className="tabs">
        <Tab icon={<FaHome />} text="Dashboard" onClick={() => handleTabClick('/')} isSidebarOpen={isSidebarOpen} />
        <Tab icon={<FaSearch />} text="Courses" onClick={() => handleTabClick('/Courses')} isSidebarOpen={isSidebarOpen} />
        <Tab icon={<FaStar />} text="Chats" onClick={() => handleTabClick('/Chats')} isSidebarOpen={isSidebarOpen} />
        <Tab icon={<FaMapMarkerAlt />} text="Grades" onClick={() => handleTabClick('/Grades')} isSidebarOpen={isSidebarOpen} />
        <Tab icon={<FaStar />} text="Schedule" onClick={() => handleTabClick('/Schedule')} isSidebarOpen={isSidebarOpen} />
        <Tab icon={<FaUser />} text="Setting" onClick={() => handleTabClick('/Setting')} isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
};

const Tab = ({ icon, text, onClick, isSidebarOpen }) => {
  return (
    <div className="tab" onClick={onClick}>
      {isSidebarOpen && icon}
      {isSidebarOpen && <span>{text}</span>}
    </div>
  );
};

export const Check = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

// Note: Avoid calling the component function when exporting
export default Check;
