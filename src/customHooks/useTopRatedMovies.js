import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=6",
      API_Options
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;