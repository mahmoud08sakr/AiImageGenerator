import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDownload } from '@fortawesome/free-solid-svg-icons';
import './ImageCard.css';
import saveAs from 'file-saver'; // Correct import for FileSaver

export default function ImageCard() {
  const handleDownload = (url) => {
    saveAs(url, 'image.jpg'); // Use FileSaver's saveAs function directly
  };

  return (
    <div className='row'>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body image-container">
            <LazyLoadImage
              src="https://imgs.search.brave.com/hsm1szF_VwmEjsdg6xvYv56yzpPa07hknZXzNHJo_HE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvcGMtcGljdHVy/ZXMtMGlzOXZxM2Rl/N2h3aHR4OS5qcGc"
              alt="random image"
              className="card-img"
            />
            <div className="overlay">
              <h5 className="card-title">Prompt</h5>
              <div className="author">
                <FontAwesomeIcon icon={faUser} className="author-icon" />
                <p className="author-text">Author</p>
                <FontAwesomeIcon
                  icon={faDownload}
                  className="download-icon"
                  title="Download Image"
                  onClick={() => saveAs('https://imgs.search.brave.com/hsm1szF_VwmEjsdg6xvYv56yzpPa07hknZXzNHJo_HE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvcGMtcGljdHVy/ZXMtMGlzOXZxM2Rl/N2h3aHR4OS5qcGc', 'image.jpg')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Repeat for other image cards */}
    </div>
  );
}
