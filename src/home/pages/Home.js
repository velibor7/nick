import React, { Fragment, useEffect, useState } from "react";
import MainNavigation from "../../shared/components/Navigation/MainNavigation";
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
      <MainNavigation></MainNavigation>
      <ImageList images={images}></ImageList>
      {/*<footer className="footer">Made by wony</footer> */}
    </Fragment>
  );
};

export default Home;

/*
const images = [
  {
    title: "Some title",
    description: "Some desc",
    img:
      "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    title: "Some title",
    description: "Some desc",
    img:
      "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    title: "Some title",
    description: "Some desc",
    img:
      "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    title: "Some title",
    description: "Some desc",
    img:
      "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    title: "Some title",
    description: "Some desc",
    img:
      "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    title: "Some title",
    description: "Some desc",
    img:
      "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    title: "Some title",
    description: "Some desc",
    img:
      "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    title: "Some title",
    description: "Some desc",
    img:
      "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    title: "Some title",
    description: "Some desc",
    img:
      "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    title: "Some title",
    description: "Some desc",
    img:
      "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    title: "Some title",
    description: "Some desc",
    img:
      "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  },
];
*/
