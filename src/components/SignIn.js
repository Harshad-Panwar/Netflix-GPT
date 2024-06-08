import React, { useRef, useState } from "react";
import {
  checkValidConfirmPassword,
  checkValidEmail,
  checkValidName,
  checkValidPassword,
} from "../utils/validate";

const SignIn = ({ isSignUpForm }) => {
  const [emptyErr, setEmptyErr] = useState(null);
  const [nameValidationErr, setNameValidationErr] = useState(null);
  const [emailValidationErr, setEmailValidationErr] = useState(null);
  const [passwordValidationErr, setPasswordValidationErr] = useState(null);
  const [confirmPasswordValidationErr, setConfirmPasswordValidationErr] =
    useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const handleClick = () => {
    if (isSignUpForm) {
      if (
        name.current.value !== null &&
        email.current.value !== null &&
        password.current.value !== null &&
        confirmPassword.current.value !== null
      ) {
        setNameValidationErr(checkValidName(name.current.value));
        setEmailValidationErr(checkValidEmail(email.current.value));
        setPasswordValidationErr(checkValidPassword(password.current.value));
        setConfirmPasswordValidationErr(
          checkValidConfirmPassword(
            password.current.value,
            confirmPassword.current.value
          )
        );
      }
    } else {
      if (email.current.value !== null && password.current.value !== null) {
        setEmailValidationErr(checkValidEmail(email.current.value));
        setPasswordValidationErr(checkValidPassword(password.current.value));
      }
    }
  };

  return (
    <div className=" bg-black absolute w-1/3 left-1/3 top-24 text-white py-8 px-16 rounded-lg bg-opacity-75">
      <h1 className=" font-bold text-3xl pb-8">
        {isSignUpForm ? "Sign Up" : "Sign In"}
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {isSignUpForm && (
          
          <div>
            <input
            ref={name}
            className=" w-full px-3 py-4 rounded-sm bg-transparent border border-gray-500 my-3"
            placeholder="Name"
          />
            <p className=" text-sm font-semibold text-[#b70000]">
              {nameValidationErr}
            </p>
          </div>
        )}
        <input
          ref={email}
          className=" w-full px-3 py-4 rounded-sm bg-transparent border border-gray-500 my-3"
          placeholder="Email Address"
        />
        <p className=" text-sm font-semibold text-[#b70000]">
          {emailValidationErr}
        </p>
        <input
          ref={password}
          className=" w-full px-3 py-4 rounded-sm bg-transparent border border-gray-500 my-3"
          placeholder="Password"
        />
        <p className=" text-sm font-semibold text-[#b70000]">
          {passwordValidationErr}
        </p>
        {isSignUpForm && (
          <div>
            <input
              ref={confirmPassword}
              className=" w-full px-3 py-4 rounded-sm bg-transparent border border-gray-500 my-3"
              placeholder="Confirm Password"
            />
            <p className=" text-sm font-semibold text-[#b70000]">
              {confirmPasswordValidationErr}
            </p>
          </div>
        )}
        <button
          className="w-full p-2 rounded-sm bg-[#FA0100] mt-8"
          onClick={handleClick}
        >
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </button>
        <p className=" text-sm font-semibold text-[#b70000]">{emptyErr}</p>
      </form>
    </div>
  );
};

export default SignIn;
