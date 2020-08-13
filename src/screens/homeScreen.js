import React, { useEffect, useState } from "react";
import { listArticles } from "../action/homeAction";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Heart from "../svg/heart.svg";
import Comment from "../svg/pharmacy.svg";
import Date from "../svg/writing.svg";
import { Helmet } from "react-helmet";
import ForkMeOnGithub from "fork-me-on-github";
import Button from "@material-ui/core/Button";
import config from "../DevtoConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: "50px",
    },
    flexGrow: 1,
    marginBottom: "7%",
  },

  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    minWidth: "100%",
    backgroundColor: "#ffffff",
    boxShadow: "0.5px #e4e4e4 solid",
    position: "relative",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  title: {
    fontSize: "25px",
    fontFamily: "Big Caslon,Book Antiqua,Palatino Linotype,Georgia,serif",
    color: "#222222",
  },
  svg: {
    height: "30px",
    width: "24px",
    paddingLeft: "9px",
  },
  svgcomment: {
    paddingLeft: "10px",
    height: "45px",
    width: "26px",
  },
}));

export default function HomeScreen(props) {
  const articleList = useSelector((state) => state.articleList);
  const { articles, loading, error } = articleList;

  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClick = (more) => {
    setMore(!more);
  };

  useEffect(() => {
    dispatch(listArticles());

    return () => {};
  }, [dispatch]);
  const [more, setMore] = useState(false);
  const numberOfArticles = more ? articles.length : 6;

  return loading ? (
    <div className="loading">
      <CircularProgress color="secondary" />
    </div>
  ) : error ? (
    <div>
      <ForkMeOnGithub
        repo="https://github.com/8bithemant/Dev-Blogs"
        colorOctocat="white"
        isPride
        alt="fork"
      />
      <div className="home-banner">
        <div className="home-header">{config.bannerName}'s Articles</div>
        <div className="home-description">
          <i>
            Hii, I am <a href={config.website}>{config.bannerName}</a>
          </i>
          .<br /> {config.about} <br />
          <a href={config.twitter}>
            <i>{config.userNameTwitter}</i>
          </a>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <h1> {error}</h1>
      </div>
    </div>
  ) : (
    <div className="main-box">
      <Helmet>
        <title>{config.bannerName}'s Blog</title>
        <meta name="description" content="articles.description" />
        <meta property="og:title" content="articles.title" />
        <meta property="og:url" content="hemant-blogs.netlify.app" />
        <meta property="og:description" content="articles.description" />
        <meta property="og:image" content="articles.cover_image" />
        <meta property="og:type" content="Tech-Blog" />
      </Helmet>
      <ForkMeOnGithub
        repo="https://github.com/8bithemant/Dev-Blogs"
        colorOctocat="white"
        isPride
      />
      <div className="home-banner">
        <div className="home-header">{config.bannerName}'s Articles</div>
        <div className="home-description">
          <i>
            Hii, I am <a href={config.website}>{config.bannerName}</a>
          </i>
          .<br /> {config.about} <br />
          <a href="https://twitter.com/8bithemant/">
            <i>{config.userNameTwitter}</i>
          </a>
        </div>
      </div>

      <div className="articles-box">
        {articles.slice(0, numberOfArticles).map((article, index) => (
          <Link
            key={index}
            className={classes.title}
            to={`/articles/${article.slug}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div key={article.id}>
              <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <div className="articles-title">{article.title}</div>
                          <div className="articles-info">
                            <img
                              src={Heart}
                              alt="React Logo"
                              className="articles-svg"
                            />
                            <div className="articles-info-1">
                              {article.public_reactions_count}
                            </div>
                            <img
                              src={Comment}
                              alt="React Logo"
                              className="articles-svg"
                            />
                            <div className="articles-info-1">
                              {article.comments_count}
                            </div>
                            <img
                              src={Date}
                              alt="React Logo"
                              className="articles-svg"
                            />{" "}
                            <div className="articles-info-1">
                              {article.readable_publish_date}{" "}
                            </div>
                          </div>
                          <div className="articles-description">
                            {article.description}
                          </div>
                        </Grid>
                        <Grid item />
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="loadmore-button">
        <Button
          onClick={() => handleClick(more)}
          variant="contained"
          color="secondary"
          className="loadmore"
        >
          {more ? "Show Less" : "Show More"}
        </Button>
      </div>
    </div>
  );
}
