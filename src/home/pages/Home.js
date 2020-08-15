import React, { Fragment, useEffect, useState } from "react";
import ImageList from "../components/ImageList";
import axios from "../../axios";

import "./Home.css";

const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      let resData;
      try {
        axios
          .get("/images.json")
          .then((res) => {
            resData = Object.keys(res.data).map((key) => {
              return res.data[key];
            });
            console.log(resData);
            setImages(resData);
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    };
    fetchImages();
  }, []);

  return (
    <Fragment>
      <ImageList images={images}></ImageList>
      {/*<footer className="footer">Made by wony</footer> */}
    </Fragment>
  );
};

export default Home;
