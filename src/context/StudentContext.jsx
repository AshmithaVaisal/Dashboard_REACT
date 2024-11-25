import React, { createContext, useState } from "react";

// Create the Student Context
export const StudentContext = createContext();

// Provide the context to children
export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentContext.Provider>
  );
};
