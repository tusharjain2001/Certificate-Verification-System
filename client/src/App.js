import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import StudentLogin from "./Login/StudentLogin";
import ManagerLogin from "./Login/ManagerLogin";
import StudentRegister from "./SignUp/StudentRegister";
import ManagerRegister from "./SignUp/ManagerRegister";
import ManagerDash from "./Dashboard/ManagerDash";
import StudentDash from "./Dashboard/StudentDash";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/manager/login" element={<ManagerLogin />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/manager/register" element={<ManagerRegister />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/manager/dash" element={<ManagerDash />} />
        <Route path="/student/dash" element={<StudentDash />} />
        
        
        
      </Routes>
    </div>
  );
}

export default App;
