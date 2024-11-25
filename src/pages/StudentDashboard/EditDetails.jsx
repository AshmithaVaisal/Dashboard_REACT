import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/editDetails.css";  // Optional, if you want custom styles

const EditDetails = () => {
  // State to hold form data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate(); // For navigation after form submission

  // Load saved details from localStorage when the component mounts
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

    setFirstName(savedDetails.firstName);
    setLastName(savedDetails.lastName);
    setDob(savedDetails.dob);
    setGender(savedDetails.gender);
    setBloodGroup(savedDetails.bloodGroup);
    setContactNumber(savedDetails.contactNumber);
    setAddress(savedDetails.address);
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save updated details to localStorage
    const updatedDetails = {
      firstName,
      lastName,
      dob,
      gender,
      bloodGroup,
      contactNumber,
      address,
    };
    
    localStorage.setItem("studentDetails", JSON.stringify(updatedDetails));

    // Log the updated details (optional)
    console.log("Updated Details: ", updatedDetails);

    // Redirect to My Details page after save
    navigate("/student/my-details");
  };

  return (
    <div className="edit-details">
      <h2>Edit My Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input 
            type="date" 
            value={dob} 
            onChange={(e) => setDob(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <select 
            value={gender} 
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Blood Group</label>
          <input 
            type="text" 
            value={bloodGroup} 
            onChange={(e) => setBloodGroup(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Contact Number</label>
          <input 
            type="text" 
            value={contactNumber} 
            onChange={(e) => setContactNumber(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
          />
        </div>

        <button type="submit" className="save-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditDetails;