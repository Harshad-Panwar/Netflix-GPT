import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=6",
        API_Options
      );
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
      // console.log(json.results);
    } catch (error) {
      console.log("getTopRatedMovies : " + error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;