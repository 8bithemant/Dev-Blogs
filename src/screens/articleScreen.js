import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { detailsArticle } from "../action/homeAction";
import { useSelector, useDispatch } from "react-redux";
import "github-markdown-css";
import MarkdownView from "react-showdown";
import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Box from '@material-ui/core/Box';
import Slide from "@material-ui/core/Slide";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Twitter } from "react-sharingbuttons";
import config from "../DevtoConfig";
// import ForkMeOnGithub from 'fork-me-on-github';
// import Header from '../component/navbar'

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ArticleScreen(props) {
  const articleDetails = useSelector((state) => state.articleDetails);
  const { articles, loading, error } = articleDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsArticle(props.match.params.slug));

    return () => {};
  }, [dispatch, props.match.params.slug]);

  return (
    <div>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <div className="header">
            <Toolbar style={{ backgroundColor: "black" }}>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <div className="articles-header-a">{config.bannerName} </div>
              </Link>
            </Toolbar>
          </div>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

      {loading ? (
        <div className="loading">
          <CircularProgress color="secondary" />
        </div>
      ) : error ? (
        <div style={{ textAlign: "center" }}>
          <h1> {error}</h1>
        </div>
      ) : (
        <div className="container-sm">
          <div className="container-md">
            <img
              alt={articles.title}
              src={articles.cover_image || articles.social_image}
              class="img-fluid"
            />
          </div>

          <div className="main">
            <div className="article-title">{articles.title}</div>
          </div>

          <div className="body">
            <div class="markdown-body">
              <MarkdownView
                markdown={articles.body_markdown}
                options={{ tables: true, emoji: true }}
              />
            </div>
          </div>

          <Helmet>
            <title>{articles.title}</title>
            <meta name="description" content={articles.description} />
            <meta property="og:title" content={articles.title} />
            <meta property="og:url" content="hemant-blogs.netlify.app" />
            <meta property="og:description" content={articles.description} />
            <meta property="og:image" content={articles.cover_image} />
            <meta property="og:type" content="Tech-Blog" />
          </Helmet>
          <div className="share">
            Share on{" "}
            <Twitter
              url={window.location.href}
              shareText={`Hi, check this Awesome Blog post by @${config.userNameTwitter} #100daysofocde #DevCommunity`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleScreen;
