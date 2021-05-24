import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Articles from "./components/Articles";
import Article from "./components/Article";
import Footer from "./components/Footer";
import {SignIn} from "./components/SignIn";
import HeaderPage from "./components/HeaderPage";
import Login from "./components/Login";
import ArticlesByCategory from "./components/ArticlesByCategory";
import SavedArticles from "./components/SavedArticles";
import Logout from "./components/Logout";
import SignUp from "./components/SignUp";
import AddArticleUser from "./components/AddArticleUser";
import EditArticle from "./components/EditArticle";
import HistoryPage from "./components/HistoryPage";
import SingleHistory from "./components/SingleHistory";


function App() {

  return (
      <>
      <Router>
          <Switch>
              <Route path="/" exact>
                  <HeaderPage/>
                  <Articles/>
                  <Footer/>
              </Route>
              <Route path="/article" exact>
                  <HeaderPage/>
                  <Article/>
                  <Footer/>
              </Route>
              <Route path="/articles" exact>
                  <HeaderPage/>
                  <ArticlesByCategory/>
                  <Footer/>
              </Route>
              <Route path="/saved" exact>
                  <HeaderPage/>
                  <SavedArticles/>
                  <Footer/>
              </Route>
              <Route path="/sign-in" exact>
                  <SignIn/>
              </Route>
              <Route path="/sign-up" exact>
                  <SignUp/>
              </Route>
              <Route path="/login" exact>
                  <Login/>
              </Route>
              <Route path="/logout" exact>
                  <Logout/>
              </Route>
              <Route path="/add-article" exact>
                  <HeaderPage/>
                  <AddArticleUser/>
              </Route>
              <Route path="/edit-article" exact>
                  <HeaderPage/>
                  <EditArticle/>
              </Route>
              <Route path="/history-page" exact>
                  <HeaderPage/>
                  <HistoryPage/>
              </Route>
              <Route path="/history" exact>
                  <HeaderPage/>
                  <SingleHistory/>
              </Route>
          </Switch>
      </Router>

      </>
  );
}

export default App;
