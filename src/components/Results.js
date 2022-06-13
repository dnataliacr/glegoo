import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";

import { useResultContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";
export const Results = () => {
  const { results, isLoading, getResults, searchTerms } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    getResults("/search/q=JavaSript");
  }, []);
  if (isLoading) return <Loading />;
  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {
            // results?.results?.map(({link, title}) => (
            // ))
          }
        </div>
      );
    case "/images":
      return "SEARCH";
    case "/videos":
      return "SEARCH";
    case "/news":
      return "SEARCH";

    default:
      return "Error";
  }
  return (
    <div>
      <h1> Results</h1>
    </div>
  );
};
