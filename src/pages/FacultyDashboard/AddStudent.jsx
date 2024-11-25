// src/pages/FacultyDashboard/AddStudent.jsx
import React, { useState , useContext} from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../../context/StudentContext"; // Import context
import "../../styles/AddStudent.css";

const AddStudent = () => {
  // State for form inputs
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    contactNumber: "",
    address: "",
  });

  // Access global students state from context
  const { students, setStudents } = useContext(StudentContext); // Use useContext here

  // State to show success message
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const navigate = useNavigate();

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setStudents([...students, student]); // Add new student to the list in context
    setStudent({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      contactNumber: "",
      address: "",
    }); // Reset the form
    // Show success message
    setShowSuccessMessage(true);

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  // Handle navigation back to the dashboard
  const goBackToDashboard = () => {
    navigate("/faculty/dashboard"); // Replace with the correct dashboard route
  };

  return (
    <div className="add-student">
      <h2>Add Student</h2>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="success-message">
          Student created successfully!
        </div>
      )}

      <form className="student-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={student.firstName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={student.lastName}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={student.dob}
          onChange={handleInputChange}
          required
        />
        <select
          name="gender"
          value={student.gender}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={student.contactNumber}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={student.address}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit">Add Student</button>
        <button className="back-button" onClick={goBackToDashboard}>Back to Dashboard</button>
      </form>

      {/* Table to display students
      <div className="students-table">
        <h3>Student List</h3>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Contact Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stud, index) => (
              <tr key={index}>
                <td>{stud.firstName}</td>
                <td>{stud.lastName}</td>
                <td>{stud.dob}</td>
                <td>{stud.gender}</td>
                <td>{stud.contactNumber}</td>
                <td>{stud.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default AddStudent;
