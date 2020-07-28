import React from "react";
import { Link } from "@material-ui/core";
import {GithubImage, LinkedInImage, TwitterImage} from '../img'

export default function Footer() {
  return (
    <div className="footer_area">
      <div className="footer_area p_120">
        <div className="container">
          <div className="row footer_inner">
            <aside className="col-lg-5 col-sm-6">
              <div className="f_widget ab_widget">
                <div className="f_title">
                  <div className="footer-main">Hemant...</div>
                </div>

                <div className="footer-1"> Hii, I am 18 years old.. </div>
                <div className="footer-2">
                  {" "}
                  Got a project? Lets connect, i work to learn!
                </div>

                <div className="footer-3">
                  NO Copyright Issue, Feel free to copy. If you need any help,
                  ping me!
                </div>

                <div className="footer-4">
                  Made with{" "}
                  <span role="img" aria-label="heart">
                    ❤
                  </span>{" "}
                  and JavaScript in India.
                </div>
              </div>
            </aside>

            <aside className="col-lg-5 col-sm-6">
              <div className="f_widget news_widget">
                <div className="f_title">
                  <div className="footer-main">Hii,</div>
                </div>
                <div className="footer-5">
                  The website is not completely built.
                </div>
                <Link
                  target="_blank"
                  href="https://www.buymeacoffee.com/hemant"
                >
                  <img
                    src={require("../img/buymeacoffee.png")}
                    alt="BuyMeCoffe"
                    className="bmc-button"
                  />
                </Link>
                <div className="footer-6">
                  Source code on my github ├──{" "}
                  <Link
                    href="https://github.com/8bithemant/Responsive-Portfolio"
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Hemant Joshi{" "}
                  </Link>
                </div>
                <div className="footer-7">
                  Make sure to{" "}
                  <span role="img" aria-label="star">
                    ⭐
                  </span>{" "}
                </div>
              </div>
            </aside>

            <div className="col-lg-2">
              <aside className="f_widget social_widget">
                <div className="f_title">
                  <div className="footer-main">Social</div>
                </div>
                <div className="footer-8">Let's Connect.</div>
                <div className="social">
                  <li>
                    <Link href="https://github.com/8bitHemant">
                      <img
                        alt="github Profile"
                        src={GithubImage}
                        style={{ height: "30px", width: "25px" }}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/8bitHemant">
                      <img
                        alt="Twitter"
                        src={TwitterImage}
                        style={{ height: "30px", width: "25px" }}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://linkedin.com/in/hemant-j-85518a195">
                      <img
                        alt="linkedIn"
                        src={LinkedInImage}
                        style={{ height: "30px", width: "25px" }}
                      />
                    </Link>
                  </li>
                </div>
                <div className="footer-9">I may be slow to respond!</div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
