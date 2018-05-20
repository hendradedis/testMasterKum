import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import homeScreen from "./screen/homescreen";
import UserProfile from './screen/UserProfile';
import ViewPost from "./screen/ViewPost"
import ViewGallery from './screen/ViewGallery'

const BasicExample = () => (
  <Router>
    <div>
      <nav className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">KumparanSosial</a>
          </div>

          <div className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div className="container">
        <Route exact path="/" component={homeScreen} />
        <Route path="/profile/:userId" component={UserProfile} />
        <Route path="/commment/:postId" component={ViewPost} />
        <Route path="/albums/:albumId/:title" component={ViewGallery} />
      </div>
    </div>
  </Router>
);



export default BasicExample;