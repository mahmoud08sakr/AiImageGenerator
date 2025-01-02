import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";
import { GenerateImage } from "../api/index.js";

export default function GenerateImageForm({
  setImageUrl,
  setLoading,
  post,
  setPost,
  CreateCardLoading,
  GeneratedCardLoading,
  setGeneratedCardLoading,
  setCreateCardLoading,
}) {
  // Local state to track if prompt has changed
  const [isPromptFilled, setIsPromptFilled] = useState(false);

  const generateImageFunction = async () => {
    setGeneratedCardLoading(true);
    setCreateCardLoading(true);
    await GenerateImage({ prompt: post.prompt }).then((res) => {
      setPost({
        ...post,
        photo: ` data:image/jpeg; base64 ,${res?.data?.photo}`,
      });
      setImageUrl(res.data.url);
      setGeneratedCardLoading(false);
      setCreateCardLoading(false);
    });
  };
  const handleGenerateImage = () => {
    setLoading(true); // Show loader
    setImageUrl(""); // Clear previous image
    // Simulate an image generation process (e.g., API call)
    setTimeout(() => {
      setImageUrl("https://picsum.photos/400/300"); // Simulate generated image URL
      setLoading(false); // Hide loader
    }, 3000); // 3-second delay
  };
  // Update post state and check if prompt is filled
  const handlePromptChange = (e) => {
    setPost({ ...post, prompt: e.target.value });
    setIsPromptFilled(e.target.value.trim() !== ""); // Enable buttons when prompt is not empty
  };
  return (
    <div>
      <div className="">
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
            disabled={!isPromptFilled} // Disable until prompt is filled
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
              onClick={handleGenerateImage}
              disabled={GeneratedCardLoading || !isPromptFilled} // Disable if loading or no prompt
            >
              <FontAwesomeIcon icon={faImage} className="me-2" />
              {GeneratedCardLoading ? "Generating..." : "Generate Image"}
            </button>
            <button
              className="btn btn-outline-primary my-3 mx-3"
              disabled={!isPromptFilled} // Disable until prompt is filled
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
