import React from "react";
import Login from "./Login";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Browse from "./Browse";
import MovieTrailer from "./MovieTrailer";
import ErrorPage from "./ErrorPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/browse/trailer",
    element: <MovieTrailer />,
    errorElement: <ErrorPage />,
  }
]);

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
