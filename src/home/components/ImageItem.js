import React, { useState, Fragment } from "react";
import Modal from "../../shared/components/UIElements/Modal";

import "./ImageItem.css";
const ImageItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showImage = () => {
    setShowModal(true);
  };

  const cancelImage = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <Modal show={showModal} onCancel={cancelImage} img={props.img}></Modal>
      <li className="image-item__li-container" onClick={showImage}>
        <div className="image-item__inner-div" onClick={showImage}>
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
    </Fragment>
  );
};

export default ImageItem;
