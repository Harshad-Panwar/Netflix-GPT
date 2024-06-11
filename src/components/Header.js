import React, { useEffect } from "react";
import logo from "../utils/Netflix_Logo_PMS.png";
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../redux/userSlice";

const Header = ({ setSignUp }) => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed Up/In
        const {uid, email, displayName, photoURL} = user;

        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
      //userData?.reloadUserInfo?.email
    navigate("/browse");
  
  } else {
    // User is signed out
    dispatch(removeUser());
    navigate("/");  
  }
        
    });

    return () => unsubscribe();
  }, []);

  // const headerStyle = "bg-gradient-to-b from-black w-full absolute flex justify-between px-10 items-center pt-2 z-20";
  // const headerStyleSticky = "bg-gradient-to-b from-black w-full absolute flex justify-between px-10 items-center pt-2 z-20 sticky top-0";
  
  return (
    <div className="bg-gradient-to-b from-black w-full absolute flex justify-between px-10 items-center pt-2 z-20">
      <div>
        <h1 className="text-xl text-white absolute font-bold pt-9 px-[70px] opacity-90">
          GPT
        </h1>
        <img className=" w-44" src={logo} alt="logo" />
      </div>
      {user === null ? (
        <div className="flex gap-6">
          <button
            className=" w-20 bg-[#FA0100] p-2 text-white text-sm font-bold rounded-lg"
            onClick={() => setSignUp(false)}
          >
            Sign In
          </button>
          <button
            className=" w-20 bg-[#FA0100] p-2 text-white text-sm font-bold rounded-lg"
            onClick={() => setSignUp(true)}
          >
            Sign Up
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-6">
          <h1 className="text-white font-bold text-sm">Welcome {user.displayName}</h1>
          <img className=" w-10 rounded-md" src={user.photoURL} alt="profile Photo"/>
          <button
            className=" w-20 bg-[#FA0100] p-2 text-white text-sm font-bold rounded-lg"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
