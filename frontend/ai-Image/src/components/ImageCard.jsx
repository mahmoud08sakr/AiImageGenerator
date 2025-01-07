import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDownload } from '@fortawesome/free-solid-svg-icons';
import './ImageCard.css';
import saveAs from 'file-saver'; 
export default function ImageCard() {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/posts/getAllPosts');
      const data = await response.json();
      if (data.success) {
        setPosts(data.data); 
      } else {
        alert('Failed to fetch posts');
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      alert('An error occurred while fetching posts.');
    }
  };

  useEffect(() => {
    fetchPosts(); 
  }, []);

  const handleDownload = (url) => {
    saveAs(url, 'image.jpg'); 
  };

  return (
    <div className="row">
      {posts.map((post, index) => (
        <div key={index} className="col-md-4">
          <div className="card">
            <div className="card-body image-container">
              <LazyLoadImage
                src={post.photo} 
                alt={post.prompt} 
                className="card-img"
              />
              <div className="overlay">
                <h5 className="card-title">{post.prompt}</h5>
                <div className="author">
                  <FontAwesomeIcon icon={faUser} className="author-icon" />
                  <p className="author-text">{post.name}</p> 
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="download-icon"
                    title="Download Image"
                    onClick={() => handleDownload(post.photo)} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
