import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

import ForkMeOnGithub from "fork-me-on-github";
import { Link } from "react-router-dom";
import Footer from "../component/footer"

function Notfound() {
  return (
    <div>
      <ForkMeOnGithub
        repo="https://github.com/8bithemant/Dev-Blogs"
        colorOctocat="white"
        isPride
      />
      <div className="home-banner">
        <div className="home-header">Hemant Joshi's Articles</div>
        <div className="home-description">
          <i>
            Hii, I am <a href="https://hemant.codes/">Hemant Joshi</a>
          </i>
          .<br /> I am 18 Year old Mern Stack Dev, I share a lot of daily
          content on Twitter, be sure to follow me <br />
          <a href="https://twitter.com/8bithemant/">
            <i>@8bithemant </i>
          </a>
        </div>
      </div>

      <div style={{ textAlign: "center", fontSize: "40px", fontWeight: "900" }}>
        404{" "}
      </div>
      <Link
        to="/"
        style={{ textAlign: "center", fontSize: "40px", fontWeight: "900" }}
      >
        <div style={{ textAlign: "center" }}>Back to Home?</div>{" "}
      </Link>

      <div className="loading-1">
        <CircularProgress color="secondary" />
      </div>

      <Footer />
    </div>
  );
}

export default Notfound;
