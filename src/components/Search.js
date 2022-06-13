import { Results } from "./Results";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

export const Search = () => {
  return (
    <div>
      {/* <Navigate to="/search" /> */}
      <Routes>
        <Route exact path="/search" element={<Results/>}/> 
        <Route exact path="/images" element={<Results/>}/>
        <Route exact path="/news" element={<Results/>}/>
        <Route exact path="/videos" element={<Results/>}/>
      </Routes>
    </div>
  );
};
