import React, { Fragment } from "react";

import "./ImageItem.css";
const ImageDetail = (props) => {
  return (
    <li className="image-item__li-container">
      <div className="image-item__inner-div">
        <a className="image-item__link" href="#">
          <div
            className="image-item__img"
            style={{
              backgroundImage: `url(${props.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h1 className="image-item__title">{props.title}</h1>
          <p className="image-item__description">{props.description}</p>
        </a>
      </div>
    </li>
  );
};

export default ImageDetail;

{
  /**
backgroundImage:
                "url(" +
                "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
                ")", */
}
