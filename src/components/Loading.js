import React from "react";
import loadingGIF from "../utils/loading.gif"

const Loading = () => {
  return (
    <div className=" flex items-center justify-center h-screen">
        <img src={loadingGIF} alt="Loading GIF" />
    </div>
  );
};

export default Loading;
