import React from "react";
import "../../styles/ViewSubjects.css";

const ViewSubjects = () => {
  // Static data for now (to be replaced by dynamic data later)
  const subjects = [
    { subjectName: "Mathematics", faculty: "Dr. John Smith" },
    { subjectName: "Physics", faculty: "Prof. Emily Johnson" },
    { subjectName: "Computer Science", faculty: "Dr. Robert Brown" },
  ];

  return (
    <div className="view-subjects">
      <h2>View Subjects</h2>
      {subjects.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Faculty</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td>{subject.subjectName}</td>
                <td>{subject.faculty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No subjects available at the moment.</p>
      )}
    </div>
  );
};

export default ViewSubjects;
