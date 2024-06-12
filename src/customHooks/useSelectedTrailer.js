import { useDispatch } from "react-redux";
import { addSelectedMovie } from "../redux/movieSlice";
import { useEffect, useCallback } from "react";
import { API_Options } from "../utils/constants";

const useSelectedTrailer = () => {
  const dispatch = useDispatch();

  const selectTrailer = useCallback(async (id) => {
    if (!id) return;

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_Options
      );
      const json = await response.json();

      const trailerVideos = json.results.filter((video) => video.type === "Trailer");
      const trailer = trailerVideos.length ? trailerVideos[0] : json.results[0];

      dispatch(addSelectedMovie(trailer));
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  }, [dispatch]);

  return selectTrailer;
};

export default useSelectedTrailer;
