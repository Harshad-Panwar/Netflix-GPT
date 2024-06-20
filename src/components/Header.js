import React, { useEffect } from "react";
import logo from "../utils/Netflix_Logo_PMS.png";
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../redux/userSlice";
import { setToggleMovieTrailer } from "../redux/movieSlice";
import { toggleShowGptSearch } from "../redux/gptSlice";
import { Supported_Languages } from "../utils/constants";
import lang from "../utils/languageConstants";
import { changeSelectedLang } from "../redux/appConfigSlice";

const Header = ({ setSignUp }) => {
  const user = useSelector((store) => store.user);
  const viewTrailer = useSelector((store) => store.movies.toggleMovieTrailer);

  const showGpt = useSelector((store) => store.gpt.showGptSearch);

  const selectedlang = useSelector(store => store.appConfig.selectedLang);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleSelectLang = (e) => {
    dispatch(changeSelectedLang(e.target.value));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed Up/In
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
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
    <div className="bg-gradient-to-b from-black w-full absolute flex justify-between px-10 sm:px-2 items-center pt-2 z-20">
      <div>
        <h1 className="text-xl text-white absolute font-bold pt-9 px-[70px] opacity-90 sm:hidden">
          GPT
        </h1>
        <img className=" w-44 sm:w-28" src={logo} alt="logo" />
      </div>
      <div className=" flex gap-6 sm:gap-3">
      {user === null ? (
        <div className="flex gap-6 sm:gap-3">
          <button
            className=" w-20 sm:w-16 sm:text-xs bg-[#FA0100] p-2 text-white text-sm font-bold rounded-lg hover:bg-opacity-80 "
            onClick={() => setSignUp(false)}
          >
            {lang[selectedlang].signIn}
          </button>
          <button
            className=" w-20 sm:w-16 sm:text-xs bg-[#FA0100] p-2 text-white text-sm font-bold rounded-lg hover:bg-opacity-80"
            onClick={() => setSignUp(true)}
          >
            {lang[selectedlang].signUp}
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-6 sm:gap-3">
          <h1 className="text-white font-bold text-sm sm:hidden">
          {lang[selectedlang].headerWelcome} {user.displayName}
          </h1>
          <img
            className=" w-10 sm:hidden rounded-md"
            src={user.photoURL}
            alt="profile Photo"
          />
          {(viewTrailer || showGpt) && (
            <button
              className=" w-20 sm:w-16 sm:text-[10px] sm:p-1 bg-[#FA0100] p-2 text-white text-sm font-bold rounded-lg hover:bg-opacity-80"
              onClick={() => {
                if (viewTrailer) {
                  dispatch(setToggleMovieTrailer());
                } else if (showGpt) {
                  dispatch(toggleShowGptSearch());
                }
              }}
            >
              {lang[selectedlang].home}
            </button>
          )}
          <button
            className=" w-20 sm:w-16 sm:text-[10px] sm:p-1 bg-[#FA0100] p-2 text-white text-sm font-bold rounded-lg hover:bg-opacity-80"
            onClick={handleSignOut}
          >
            {lang[selectedlang].signOut}
          </button>
        </div>
      )}
        <select className=" w-24 sm:w-16 sm:text-[10px] sm:p-1 bg-black p-2 bg-opacity-50 text-white text-sm font-bold rounded-lg" onChange={handleSelectLang}>
            {Supported_Languages.map(lang => <option key={lang.identifier} value={lang.identifier} >{lang.language}</option>)}
        </select>
      </div>
    </div>
  );
};

export default Header;
