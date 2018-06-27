import React from "react";

import Header from "./Header";
import Cover from "./Cover";
import Menu from "./Menu";
import Post from "./Post";
import Profile from "./Profile";

export default props => {
  return (
    <div>
      <Header />
      <Cover />
      <Menu />
      <div className="container">
        <div className="row">
          <div className="col-xs-3">
            <Profile />
          </div>
          <div className="col-xs-6">
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};
