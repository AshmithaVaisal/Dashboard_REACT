import React, { useContext } from "react";
import { StudentContext } from "../../context/StudentContext";
import "../../styles/StudentDetails.css";

const StudentDetails = () => {
  const { students, setStudents } = useContext(StudentContext); // Access shared state

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  const handleEdit = (index) => {
    const updatedName = prompt("Edit First Name:", students[index].firstName);
    if (updatedName) {
      const updatedStudents = [...students];
      updatedStudents[index].firstName = updatedName;
      setStudents(updatedStudents);
    }
  };

  return (
    <div className="student-details">
      <h2>Student Details</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.dob}</td>
              <td>{student.gender}</td>
              <td>{student.contactNumber}</td>
              <td>{student.address}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDetails;
