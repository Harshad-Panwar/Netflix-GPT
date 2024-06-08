import Header from "./Header";
import SignIn from "./SignIn";
import React, { useState } from "react";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false);
  return (
    <div>
      <div className=" absolute bg-black opacity-50 w-full h-screen"></div>
      <Header setSignUp={setIsSignUpForm} />
      <SignIn isSignUpForm={isSignUpForm} />
      <img
        className=" w-full h-screen"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="bg-img"
      />
    </div>
  );
};

export default Login;
