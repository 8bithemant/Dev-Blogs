import React, { useEffect } from "react";
import { listArticles } from "../action/homeAction";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Heart from "../svg/heart.svg";
import Comment from "../svg/pharmacy.svg";
import Date from "../svg/writing.svg";
import {Helmet} from "react-helmet";

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

  useEffect(() => {
    dispatch(listArticles());

    return () => {};
  }, []);

  return loading ? (
    <div className="loading">
      <CircularProgress color="secondary" />
    </div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="main-box">
      <Helmet>
    <title>Hemant Joshi's Blog</title>
        <meta name="description" content="articles.description"/> 
        <meta property="og:title" content="articles.title"/>
	    	<meta property="og:url" content="hemant-blogs.netlify.app"/>
		    <meta property="og:description" content="articles.description"/>
		    <meta property="og:image" content="articles.cover_image"/> 
		    <meta property="og:type" content="Tech-Blog"/>
        
        </Helmet>
      <div className="home-banner">
        <div className="home-header">Hemant Joshi's Articles</div>
        <div className="home-description">
          <i>
            {" "}
            Hii, I am <a href="https://hemant.codes/">Hemant Joshi</a>{" "}
          </i>
          .<br /> I am 18 Year old Mern Stack Dev, I share a lot of daily
          content on Twitter, be sure to follow me <br />
          <a href="https://twitter.com/8bithemant/">
            <i>@8bithemant </i>
          </a>
        </div>
      </div>

      <div className="article-box">
        {articles.map((article) => (
          <Link
            className={classes.title}
            to={"/articles/hemant/" + article.slug}
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            <div key={article.id}>
              <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <div className="article-title">{article.title}</div>
                          <div className="article-info">
                            <img
                              src={Heart}
                              alt="React Logo"
                              className="article-svg"
                            />{" "}
                            <div className="article-info-1">
                              {" "}
                              {article.public_reactions_count}{" "}
                            </div>{" "}
                            <img
                              src={Comment}
                              alt="React Logo"
                              className="article-svg"
                            />{" "}
                            <div className="article-info-1">
                              {" "}
                              {article.comments_count}{" "}
                            </div>{" "}
                            <img
                              src={Date}
                              alt="React Logo"
                              className="article-svg"
                            />{" "}
                            <div className="article-info-1">
                              {article.readable_publish_date}{" "}
                            </div>
                          </div>
                          <div className="article-description">
                            {article.description}
                          </div>
                        </Grid>
                        <Grid item></Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </div>

              {/* <div className="main-box">
                    <div className="article-title">
                        <Link className="title" to ={'/articles/' + article.id + '/'}>{article.title}</Link>
                                </div>
                        <div className="article-date">{article.readable_publish_date}</div>
                        <div className="article-comments">{article.comments_count}</div>
                        <div className="article-reactions">{article.positive_reactions_count}</div>
                        

                        
                        <div className="article-tags">Tags: #{article.tag_list[0]},  #{article.tag_list[1]}, #{article.tag_list[2]}</div>
                    </div> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
