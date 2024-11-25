// src/pages/StudentDashboard/MyDetails.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/myDetails.css";

const MyDetails = () => {
  // State to hold student details
  const [studentDetails, setStudentDetails] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    contactNumber: "",
    address: "",
  });

  // Load details from localStorage when the component mounts
  useEffect(() => {
    const savedDetails = JSON.parse(localStorage.getItem("studentDetails")) || {
      firstName: "John",
      lastName: "Doe",
      dob: "01/01/2000",
      gender: "Male",
      bloodGroup: "O+",
      contactNumber: "+1234567890",
      address: "123 Main St, Springfield",
    };

    setStudentDetails(savedDetails);
  }, []);

  return (
    <div className="my-details">
      <h2>My Details</h2>

      <div className="profile">
        <img
          src="/assets/profile-pic.png"
          alt="Student Profile"
          className="profile-pic"
        />
        <h3>{studentDetails.firstName} {studentDetails.lastName}</h3>
      </div>

      <div className="details">
        <p><strong>Date of Birth:</strong> {studentDetails.dob}</p>
        <p><strong>Gender:</strong> {studentDetails.gender}</p>
        <p><strong>Blood Group:</strong> {studentDetails.bloodGroup}</p>
        <p><strong>Contact Number:</strong> {studentDetails.contactNumber}</p>
        <p><strong>Address:</strong> {studentDetails.address}</p>
      </div>

      <div className="actions">
        <Link to="/student/edit-details" className="edit-btn">
          Edit Details
        </Link>
      </div>
    </div>
  );
};

export default MyDetails;
