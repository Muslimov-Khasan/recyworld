import Nav from "../Nav/Nav";
import "./footer.scss";
import Twitter from "../../assets/images/twitter.svg";
import Insta from "../../assets/images/instagram.svg";
import YouTube from "../../assets/images/youtube.svg";
import Facebook from "../../assets/images/Facebook.svg";

 const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__inner">
          <h2>Recyworld</h2>
          <Nav />
          <ul className="site-footer__socials">
            <li>
              <a href="https://twitter.com" target={"_blank"}>
                <img src={Twitter} alt="Twitter icon" width={25} height={25} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target={"_blank"}>
                <img src={Insta} alt="Instagram icon" width={25} height={25} />
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target={"_blank"}>
                <img
                  src={Facebook}
                  alt="Facebook icon"
                  width={25}
                  height={25}
                />
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target={"_blank"}>
                <img src={YouTube} alt="YouTube icon" width={25} height={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="site-footer__bottom bottom">
        <div className="container">
          <div className="bottom__left">
            <a href="#">Privacy</a>
            <a href="#">Terms and condition</a>
          </div>
          <div className="bottom__right">
            <small>&copy; 2003 Ali Lorem ipsum dolor</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
