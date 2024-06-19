import{ API_Options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../redux/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (id) =>{
    const dispatch = useDispatch();

    const movieTrailer = useSelector(store => store.movies.movieTrailer);

    const getVideo = async () => {
    try {
      const video = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,API_Options);
    const json = await video.json();
    // console.log(json.results); 
  
    const trailerVideos = json.results.filter(video => video.type === "Trailer");
    // console.log(trailerVideos);
  
    const trailer = trailerVideos.length ? trailerVideos[0] : json.results[0];
    //   console.log(trailer);
      dispatch(addMovieTrailer(trailer));
    } catch (error) {
      console.log("useMovieTrailer : " + error);
    }
    }
  
    useEffect(()=>{
      !movieTrailer && getVideo();
    },[]);
}

export default useMovieTrailer;