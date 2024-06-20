import { Login_BG } from "../utils/constants";
import Header from "./Header";
import SignIn from "./SignIn";
import React, { useState } from "react";

const Login = () => {
  
  const [isSignUpForm, setIsSignUpForm] = useState(false);

  return (
    <div>
      <img
        className=" fixed object-cover w-full h-screen"
        src={Login_BG}
        alt="bg-img"
      />
      <div className=" absolute bg-black opacity-50 w-full h-screen"></div>
      <Header setSignUp={setIsSignUpForm} />
      <SignIn isSignUpForm={isSignUpForm} />
    </div>
  );
};

export default Login;
