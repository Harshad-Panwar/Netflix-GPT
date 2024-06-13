import React from "react";
import Login from "./Login";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Browse from "./Browse";
import { useInternetStatus } from "../customHooks/useInternetStatus";
import OfflineStatus from "./OfflineStatus";
import ErrorPage from "./ErrorPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/browse",
    element: <Browse />,
    errorElement: <ErrorPage />
  }
]);

const Body = () => {
  const internetStatus = useInternetStatus();

  if (internetStatus === false) {
    return <OfflineStatus />
  }

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
