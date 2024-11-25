import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext"; // Import the context provider
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import MyDetails from "./pages/StudentDashboard/MyDetails";
import EditDetails from "./pages/StudentDashboard/EditDetails";
import ViewSubjects from "./pages/StudentDashboard/ViewSubjects";
import AddStudent from "./pages/FacultyDashboard/AddStudent";
import FacultyDashboard from "./pages/FacultyDashboard/FacultyDashboard";
import StudentDetails from "./pages/FacultyDashboard/StudentDetails"; // Import StudentDetails page

function App() {
  return (
    <StudentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<FacultyDashboard />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
          <Route path="/student/my-details" element={<MyDetails />} />
          <Route path="/student/edit-details" element={<EditDetails />} />
          <Route path="/student/view-subjects" element={<ViewSubjects />} />
          <Route path="/faculty/add-student" element={<AddStudent />} />
          <Route path="/faculty/student-details" element={<StudentDetails />} />
        </Routes>
      </Router>
    </StudentProvider>
  );
}

export default App;
