import axios from "axios";
import React, { useEffect, useState } from "react";

function ImageApi() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-repo-i7xh.onrender.com/image")
      .then((res) => {
        console.log("------>", res.data.images);
        const images = res.data.images;
        console.log("images------->", images);
        setImages(images);
      })
      .catch((err) => {
        console.log("error occured", err);
      });
  }, []);

  console.log("setted images", images);

  return (
    <div style={{margin:'0 auto', width:'1200px'} } className="image-grid">
      {images.length > 0 && (
        <div className="grid-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={image.alt}
              className="grid-item"
              style={{ width: "240px", height: "240px" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageApi;
