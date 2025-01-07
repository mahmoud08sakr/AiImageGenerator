import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar.jsx";
import "./Home.css";
import SearchBar from "../components/SearchBar.jsx";
import ImageCard from "../components/ImageCard.jsx";
export default function Home() {
  return (
    <div>
      <div className="container text-center">
        <h2>Explore popular posts in the community</h2>
        <div className="fade">
          <h4>
            ✇ Generated by <spam className="ai">AI</spam> ✇
          </h4>
        </div>
      </div>
      <SearchBar />
      <div className="container text-center my-5">
      
      <ImageCard />
      
      </div>
    </div>
  );
}
