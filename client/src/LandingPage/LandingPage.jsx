import React from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center">
        <div className="flex-1 flex flex-col justify-center items-center  gap-3">
          Manager
          <button className="bg-blue-500 text-white p-2" onClick={() => navigate("/manager/login")}>Login</button>
          <button className="bg-blue-500 text-white p-2" onClick={() => navigate("/manager/register")}>Signup</button>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-3">
          Student
          <button className="bg-blue-500 text-white p-2" onClick={() => navigate("/student/login")}>Login</button>
          <button className="bg-blue-500 text-white p-2" onClick={() => navigate("/student/register")}>Signup</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
