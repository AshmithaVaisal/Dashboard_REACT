
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/StudentDashboard.css";

const StudentDashboard = () => {
  const studentName = "John Doe"; 
  const profilePic = "/assets/profile-pic.png";  

  return (
    <div className="student-dashboard">
      <h1>Welcome to Students Dashboard</h1>
      <div className="profile">
        <img src={profilePic} alt="Student Profile" className="profile-pic" />
        <h2>{studentName}</h2>
      </div>

      <nav className="navbar">
        <ul>
          
          <li>
            <Link to="/student/my-details">My Details</Link>
          </li>
          <li>
            <Link to="/student/view-subjects">View Subjects</Link>
          </li>
        </ul>
      </nav>

      <div className="dashboard-content">
        {/* Placeholder for subjects or content */}
        {/* You can add more sections like grades, etc. later */}
      </div>
    </div>
  );
};

export default StudentDashboard;
