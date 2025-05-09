import React, { useState } from "react";
import LoginForm from "./TeacherloginForm";
import SignupForm from "./TeachersignupForm";
import ForgotPasswordForm from "./TeacherForgotPasswordForm";

const TeacherLogin = () => {
  const [view, setView] = useState("login");

  return (
    <div className="flex h-screen">
      {/* Left Side - Image (Hidden on Mobile) */}
      <div className="w-1/2 sm:flex hidden items-center justify-center">
        <img 
          src={require("./teacher.jpeg")} 
          alt="Teacher Login" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Right Side - Forms (Full Width & Centered on Mobile) */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center px-6 sm:px-16">
        <div className="w-full max-w-md"> {/* Centers form in mobile */}
          {view === "login" && <LoginForm onSwitch={() => setView("signup")} onForgot={() => setView("forgot")} />}
          {view === "signup" && <SignupForm onSwitch={() => setView("login")} />}
          {view === "forgot" && <ForgotPasswordForm onSwitch={() => setView("login")} />}
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
