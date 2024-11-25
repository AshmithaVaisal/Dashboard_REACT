import React from "react";
import { Link } from "react-router-dom";
import "../../styles/FacultyDashboard.css";
// import profilePic from "../../assets/profile-pic.png"; // Import profile pic

const FacultyDashboard = () => {
  // Dummy data for faculty name (this can be dynamic based on login details)
  const facultyName = "Dr. John Smith";
  const profilePic = "/assets/profile-pic.png";  

  return (
    <div className="faculty-dashboard">
      <div className="faculty-profile">
        <h1>Welcome to Faculty Dashboard</h1>
        <img src={profilePic} alt="Faculty Profile" className="profile-pic" />
        <h3 className="faculty-name">{facultyName}</h3>
      </div>

      <div className="faculty-links">
        <Link to="/faculty/add-student" className="dashboard-link">
          Add Student
        </Link>
        <Link to="/faculty/student-details" className="dashboard-link">
          View Student Details
        </Link>
        
        <Link to="/student/dashboard" className="dashboard-link-student">
          Go to Students Dashboard
        </Link>
        
      </div>
    </div>
  );
};

export default FacultyDashboard;
