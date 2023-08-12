import React from "react";
import styles from "./styles.module.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const pagesWithoutNavbar = ['/signin', '/signup', '/create_account/secondary_school', '/create_account/higher_institution'];
  const hideNavbar = pagesWithoutNavbar.includes(location.pathname);
  return (
    <>
    {!hideNavbar &&
    <footer>
      <div className={styles.contents}>
        <div className="box">
          <h4>
            <Link to="/about">About us</Link>
          </h4>
          <p>
            <Link to="/location">Our Location</Link>
          </p>
          <p>
            <Link to="/executives">Executives</Link>
          </p>
          <p>
            <Link to="/partners">Partners</Link>
          </p>
        </div>
        <div className="box">
          <h4>Our Policy</h4>
          <p>club's Policy</p>
          <p>FAQ</p>
          <p>
            <Link to="/calendar">Events</Link>
          </p>
        </div>
        <div className="box">
          <h4>
            <Link to="/projects">Projects</Link>
          </h4>
          <p>
            <Link to="/gallery">Gallery</Link>
          </p>
          <p>
            <Link to="/blog">Blog</Link>
          </p>
        </div>
      </div>

      <div className={styles.social}>
        <p>
          <small>Follow us on social media</small>
        </p>
        <div className={styles.icons}>
          <br />
          <i>
            <a href="https://www.instagram.com/ui_ecovanguard_club/">
              <FaInstagram />
            </a>
          </i>
          <i>
            <a href="https://www.linkedin.com/company/ecovanguard-club-ui/">
              <FaLinkedin />
            </a>
          </i>
          <br />
        </div>
      </div>
    </footer>
    }
    </>
  );
};

export default Footer;
