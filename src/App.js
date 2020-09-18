import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/homeScreen";
import ArticleScreen from "./screens/articleScreen";
import Footer from "./component/footer";
import NotFound from "./screens/notfound";
import ThemeSwitch from "./component/ThemeSwitch";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <ThemeSwitch />
        {/* <main className="main">
      <div className="content"> */}
        <Switch>
          <Route path="/" exact={true} component={HomeScreen} />
          <Route
            path="/articles/:slug"
            exact={true}
            component={ArticleScreen}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        {/* </div>
    </main> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
