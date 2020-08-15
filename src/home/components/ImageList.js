import React from "react";

import ImageItem from "./ImageItem";
import Spinner from "../../shared/components/UIElements/Spinner";

import "./ImageList.css";

const ImageList = (props) => {
  return (
    <div className="image-list">
      <ul className="image-list__grid">
        {props.images
          ? props.images.map((image) => (
              <ImageItem
                key={image.img}
                title={image.title}
                description={image.description}
                img={image.img}
              />
            ))
          : null}
      </ul>
    </div>
  );
};

export default ImageList;
