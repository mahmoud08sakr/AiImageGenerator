import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";
import { GenerateImage } from "../api/index.js";

export default function GenerateImageForm({
  setImageUrl,
  setLoading,
  post,
  setPost,
  setGeneratedCardLoading,
  setCreateCardLoading,
}) {
  const [isPromptFilled, setIsPromptFilled] = useState(false);

  const postImageFunction = async () => {
    if (!post.author || !post.prompt || !post.photo) {
      alert("Please fill in all required fields: author, prompt, and image.");
      return;
    }
  
    try {
      setCreateCardLoading(true);
  
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: post.author,
          prompt: post.prompt,
          photo: post.photo,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Backend post failed:", errorData);
        alert(`Failed to add post: ${errorData.message || "Unknown error"}`);
        return;
      }
  
      const data = await response.json();
      alert("Post added successfully!");
      setPost({ author: "", prompt: "", photo: "" }); 
      setImageUrl(null); 
    } catch (error) {
      console.error("Error posting image:", error.message);
      alert("An error occurred. Please try again.");
    } finally {
      setCreateCardLoading(false);
    }
  };
  


  const generateImageFunction = async () => {
    setLoading(true);
    setGeneratedCardLoading(true);
    setCreateCardLoading(true);
    try {
      const response = await GenerateImage({ prompt: post.prompt });
      console.log("API Response:", response);
      if (response?.data?.photo) {
        const photoData = `data:image/jpeg;base64,${response.data.photo}`;
        setPost({
          ...post,
          photo: photoData, 
        });
        setImageUrl(photoData); 
      } else {
        console.error("No photo data received from API.");
        alert("Failed to generate image. Please try again.");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
      setGeneratedCardLoading(false);
      setCreateCardLoading(false);
    }
  };

  const handlePromptChange = (e) => {
    const newPrompt = e.target.value;
    setPost({ ...post, prompt: newPrompt });
    setIsPromptFilled(newPrompt.trim() !== "");
  };

  return (
    <div>
      <div>
        <h3>Generate Image With Prompt</h3>
        <h5>Write your prompt according to your imagination</h5>
        <div className="my-5">
          <label htmlFor="author">Author</label>
          <input
            name="author"
            id="author"
            className="form-control my-1"
            placeholder="Enter your name"
            onChange={(e) => setPost({ ...post, author: e.target.value })}
            required
          />
          <label htmlFor="prompt">Image Prompt</label>
          <textarea
            name="prompt"
            id="prompt"
            className="form-control my-1"
            placeholder="Enter your prompt"
            onChange={handlePromptChange}
          />
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-outline-primary my-3"
              onClick={generateImageFunction}
              disabled={!isPromptFilled}
            >
              <FontAwesomeIcon icon={faImage} className="me-2" />
              Generate Image
            </button>
            <button
              className="btn btn-outline-primary my-3 mx-3"
              disabled={!isPromptFilled || !post.photo}
              onClick={postImageFunction} 
            >
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Post Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
