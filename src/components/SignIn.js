import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkValidData } from "../utils/validate";
import viewIcon from "../utils/view.png";
import hideIcon from "../utils/hidden.png";
import { useDispatch } from "react-redux";
import {addUser} from "../redux/userSlice";
import { Profile_LOGO } from "../utils/constants";


const SignIn = ({ isSignUpForm }) => {

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    const nameValue = isSignUpForm ? name.current?.value : "";
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const confirmPasswordValue = isSignUpForm
      ? confirmPassword.current?.value
      : "";

    const isvalid = checkValidData(
      isSignUpForm,
      nameValue,
      emailValue,
      passwordValue,
      confirmPasswordValue
    );

    setErrorMessage(isvalid);

    if (isSignUpForm && isvalid === null) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          setErrorMessage("Account Created Successfully !");

          updateProfile(user, {
            displayName: nameValue,
            photoURL: Profile_LOGO,
          })
            .then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser;

              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else if (!isSignUpForm && isvalid === null) {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          setErrorMessage("Logged In Successfully !");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

  return (
    <div className=" bg-black absolute w-1/3 left-1/3 top-28 text-white py-8 px-16 rounded-lg bg-opacity-75">
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
          </div>
        )}
        <input
          ref={email}
          className=" w-full px-3 py-4 rounded-sm bg-transparent border border-gray-500 my-3"
          placeholder="Email Address"
        />
        <div className="flex items-center">
          <input
            ref={password}
            type={showPassword ? "text" : "password"}
            className=" w-full px-3 py-4 rounded-sm bg-transparent border border-gray-500 my-3"
            placeholder="Password"
          />
          <img
            className=" w-5 absolute right-20"
            src={showPassword ? viewIcon : hideIcon}
            alt="icon"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        {isSignUpForm && (
          <div>
            <input
              ref={confirmPassword}
              className=" w-full px-3 py-4 rounded-sm bg-transparent border border-gray-500 my-3"
              placeholder="Confirm Password"
            />
          </div>
        )}
        <p className=" text-sm font-semibold text-[#b70000]">{errorMessage}</p>
        <button
          className="w-full p-2 rounded-sm bg-[#FA0100] mt-8"
          onClick={handleClick}
        >
          {isSignUpForm ? "Sign Up" : "Sign In"}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
