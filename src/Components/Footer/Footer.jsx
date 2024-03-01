import logo from "./foter_img/logo.svg";
import appstore from "./foter_img/appstore.svg";
import googleplay from "./foter_img/googleplay.svg";
import facebook from "./foter_img/facebook.svg";
import facebook_hover from "./foter_img/facebook_hover.svg";
import instagramm from "./foter_img/instagramm.svg";
import instagramm_hover from "./foter_img/instagramm_hover.svg";
import twitter from "./foter_img/twitter.svg";
import twitter_hover from "./foter_img/twitter_hover.svg";
import youtube from "./foter_img/youtube.svg";
import youtube_hover from "./foter_img/youtube_hover.svg";
import signin from "./foter_img/signin.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_left">
          <ul className="footer_left_list">
            <li>
              <a href="">
                <img
                  src={logo}
                  alt=""
                />
              </a>
            </li>
            <li>
              <p>
                Hot Africa, we offer original, exclusive
                <br /> and premium stories. Everything you <br />
                want to watch, anytime, anywhere and
                <br /> as much.
              </p>
            </li>
            <li>
              <a href="">
                <img
                  src={appstore}
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src={googleplay}
                  alt=""
                />
              </a>
            </li>
            <li className="facebook">
              <a href="">
                <img
                  onMouseOver={(e) => (e.currentTarget.src = facebook_hover)}
                  onMouseOut={(e) => (e.currentTarget.src = facebook)}
                  src={facebook}
                  alt=""
                />
              </a>
              <a href="">
                <img
                  onMouseOver={(e) => (e.currentTarget.src = instagramm_hover)}
                  onMouseOut={(e) => (e.currentTarget.src = instagramm)}
                  src={instagramm}
                  alt=""
                />
              </a>
              <a href="">
                <img
                  onMouseOver={(e) => (e.currentTarget.src = twitter_hover)}
                  onMouseOut={(e) => (e.currentTarget.src = twitter)}
                  src={twitter}
                  alt=""
                />
              </a>
              <a href="">
                <img
                  onMouseOver={(e) => (e.currentTarget.src = youtube_hover)}
                  onMouseOut={(e) => (e.currentTarget.src = youtube)}
                  src={youtube}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="">Terms of use</a>
              <a href="">Privacy Policy</a>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <p>Copyright © 2022 Hot Africa. All rights reserved.</p>
            </li>
          </ul>
        </div>
        <div className="footer_right">
          <ul className="footer_right_list">
            <li className="footer_list_title">
              <img
                src={signin}
                alt=""
              />
              <a href="">Sign in</a>
            </li>
            <li className="list_info">
              <a href="">Person data</a>
              <a href="">Choosing a Plan</a>
              <a href="">Payment</a>
            </li>
          </ul>
          <ul>
            <li className="footer_list_title">
              <a href="">Movies</a>
            </li>
            <li className="list_info">
              <a href="">Lock Upp</a>
              <a href="">Pavitra Rishta</a>
              <a href="">Girgit</a>
              <a href="">Hai Taubba Season 3</a>
              <a href="">Cartel</a>
              <a href="">Crimes And Confessions</a>
              <a href="">Puncch Beat Season 2</a>
              <a href="">Broken But Beautiful Season 3</a>
            </li>
          </ul>
          <ul>
            <li className="footer_list_title">
              <a href="">Series</a>
            </li>
            <li className="list_info">
              <a href="">X.X.X. Season 2</a>
              <a href="">Gandii Baat Season 5</a>
              <a href="">Gandii Baat Season 6</a>
              <a href="">Broken But Beautiful Season 1</a>
              <a href="">Broken But Beautiful Season 2</a>
              <a href="">Class Of 2020</a>
              <a href="">Bekaaboo Season 1</a>
              <a href="">Ragini MMS Returns Season 2</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
