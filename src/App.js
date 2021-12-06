import React, { useState } from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import BlogPosts from "./pages/BlogPosts/BlogPosts";
import BlogPost from "./pages/BlogPost/BlogPost";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
    <>
      <NavBar
          isAuthenticated={isAuthenticated}
          toggleAuthentication={toggleIsAuthenticated}
      />

      <Switch>
          <Route exact path="/">
              <HomePage />
          </Route>

          <Route exact path="/login">
              <LoginPage
                isAuthenticated={isAuthenticated}
                toggleAuthentication={toggleIsAuthenticated}
              />
          </Route>

          <Route exact path="/blogposts">
              {isAuthenticated ? <BlogPosts /> : <Redirect to="/"/>}
          </Route>

          <Route path="/blogposts/:blogId">
              {isAuthenticated ? <BlogPost /> : <Redirect to="/" />}
          </Route>
      </Switch>
    </>
  );
}

export default App;