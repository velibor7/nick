import React, { Fragment } from "react";
import MainNavigation from "../../shared/components/Navigation/MainNavigation";
import ImageList from "../components/ImageList";
const Home = () => {
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
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <ImageList images={images}></ImageList>
    </Fragment>
  );
};

export default Home;
