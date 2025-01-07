import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./GeneratedCardImage.css";

export default function GeneratedCardImage({ loading, imageUrl }) {
  return (
    <div className="generated-card-container">
    <div className="generated-card-placeholder">
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} spin className="loader-icon" />
      ) : imageUrl ? (
        <img src={imageUrl} alt="Generated" className="generated-image" />
      ) : (
        <p>Write a prompt to generate an image</p>
      )}
    </div>
  </div>
  );
}
