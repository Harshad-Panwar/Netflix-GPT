import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        movieTrailer : null,
        toggleMovieTrailer : false,
        selectedMovie : null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        },
        setToggleMovieTrailer: (state) => {
            state.toggleMovieTrailer = !state.toggleMovieTrailer;
        },
        addSelectedMovie: (state, action) => {
            state.selectedMovie = action.payload;
        },
    }
});

export const {addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addMovieTrailer, addSelectedMovie, setToggleMovieTrailer} = movieSlice.actions;
export default movieSlice.reducer;