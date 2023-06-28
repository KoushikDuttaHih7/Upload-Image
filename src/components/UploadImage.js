import "../App.css";
import React, { useState } from "react";

const UploadImage = () => {
  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");
  // const [copyURL, setCopyURL] = useState("");

  const submitImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "React-Image-Upload");
    data.append("cloud_name", "koushikduttahih7");

    fetch("https://api.cloudinary.com/v1_1/koushikduttahih7/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setImageURL(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className='container'>
        <div className='select-Image'>
          <label for='images' class='drop-container'>
            <span class='drop-title'>Drop files here</span>
            or
            <input
              type='file'
              id='images'
              accept='image/*'
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
        </div>
        <br />
        <div>
          <button className='button-66' onClick={submitImage}>
            Upload Image
          </button>
        </div>
        <br />
        <div>
          {imageURL && (
            <>
              <button
                className='button-59'
                onClick={() => {
                  navigator.clipboard.writeText(imageURL);
                }}
              >
                {imageURL}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UploadImage;
