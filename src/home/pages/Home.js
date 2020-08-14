import React, { Fragment } from "react";
import MainNavigation from "../../shared/components/Navigation/MainNavigation";
import ImageList from "../components/ImageList";
const Home = () => {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <ImageList></ImageList>
    </Fragment>
  );
};

export default Home;
