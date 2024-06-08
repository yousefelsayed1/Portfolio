import React from "react";
import Home from "../Pages/Home";
import Experience from "../Pages/Experience";
import Scroller from "../Components/Scroller/Scroller";

import { Fragment } from "react";

export const Layout = () => {
  return (
    <Fragment>
      <Home />
      <Experience />
      <Scroller />
    </Fragment>
  );
};
