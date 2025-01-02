import React, { useState } from "react";
import GenerateImageForm from "../components/GenerateImageForm.jsx";
import GeneratedCardImage from "../components/GeneratedCardImage.jsx";

export default function CreatePost() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [GeneratedCardLoading, setGeneratedCardLoading] = useState(false);
  const [CreateCardLoading, setCreateCardLoading] = useState(false);

  const [post, setPost] = useState({
    prompt: "",
    author: "",
    photo: "",
  });

  return (
    <div className="d-flex align-content-center my-5">
      <div className="container  my-5">
        <div className="row">
          <div className="col-md-6">
            <GenerateImageForm
              setImageUrl={setImageUrl}
              setLoading={setLoading}
              post={post}
              setPost={setPost}
              CreateCardLoading={CreateCardLoading}
              GeneratedCardLoading={GeneratedCardLoading}
              setGeneratedCardLoading={setGeneratedCardLoading}
              setCreateCardLoading={setCreateCardLoading}
            />
          </div>
          <div className="col-md-6">
            <GeneratedCardImage
              loading={loading}
              loadingCard={GeneratedCardLoading}
              imageUrl={imageUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
