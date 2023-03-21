import React, { useState, useEffect } from "react";

import "./layout.scss";
import { NavLink } from "react-router-dom";
import "./footer.scss";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin
} from "react-icons/ai";

import "./menumodal.scss";
import { IoCloseOutline } from "react-icons/io5";

import "./videomodal.scss";
import { BiLoaderAlt } from "react-icons/bi";

import "./navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { MemberModal } from "./members";

export function Navbar() {
  const [offset, setOffset] = useState(false);
  useEffect(() => {
    const onPageLoad = () => {
      setOffset(window.pageYOffset > 10);
    };

    window.addEventListener("scroll", () => {
      onPageLoad();
    });

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const openModal = () => {
    var element = document.getElementById("menu-modal");
    element.style.display = "flex";
  };

  return (
    <nav className={offset ? "navbar" : "navbar"}>
      <div className="content">
        <NavLink className="logo-container" to="/">
          <img
            className="logo"
            src={require("../images/02_KiddanLA_ENG_PNG.png")}
            alt="KiddanLA logo"
          />
        </NavLink>
        <div className="links-container">
          <ul className="links">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/work">Work</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
          </ul>
        </div>
        <div className="burger">
          <button onClick={openModal} className="">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export function VideoModal() {
  const [videoLoading, setVideoLoading] = useState(true);

  const closeModal = () => {
    var element = document.getElementById("video-modal");
    var vidframe = document.getElementById("modal__video");
    vidframe.src = "";
    element.style.display = "none";
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <div id="video-modal">
      <section className="modal__bg" onClick={closeModal}>
        <div className="modal__align">
          <div className="modal__content">
            <IoCloseOutline
              className="modal__close"
              arial-label="Close modal"
              onClick={closeModal}
            />
            <div className="modal__video-align">
              {videoLoading ? (
                <div className="modal__spinner">
                  <BiLoaderAlt className="modal__spinner-style" fadein="none" />
                </div>
              ) : null}
              <iframe
                id="modal__video"
                className="modal__video-style"
                onLoad={spinner}
                loading="lazy"
                width="800"
                height="500"
                src=""
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function MenuModal() {
  const closeModal = () => {
    var element = document.getElementById("menu-modal");
    element.style.display = "none";
  };

  return (
    <div id="menu-modal">
      <section className="modal__bg" onClick={closeModal}>
        <div className="modal__align">
          <div className="modal__content">
            <IoCloseOutline
              className="modal__close"
              arial-label="Close modal"
              onClick={closeModal}
            />
            <div className="modal__video-align">
              <ul className="links">
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/work">Work</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/team">Team</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="fr-container">
          <p className="heading">Contact</p>
          <p className="paragraph">
            Write to us at{" "}
            <a className="email" href="mailto:hello@kiddan.la">
              hello@kiddan.la.
            </a>
          </p>
        </div>
        <div className="fr-container">
          <p className="heading">Pages</p>
          <div className="links-container">
            <ul className="links">
              <li>
                <NavLink className="paragraph" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="paragraph" to="/work">
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink className="paragraph" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="paragraph" to="/team">
                  Team
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="fr-container">
          <p className="heading">Socials</p>
          <div className="social-icons">
            {/*<a href="https://facebook.com">
              <AiFillFacebook />
  </a>*/}
            <a href="https://instagram.com">
              <AiFillInstagram />
            </a>
            <a href="https://linkedin.com">
              <AiFillLinkedin />
            </a>
            {/*<a href="https://youtube.com">
              <AiFillYoutube />
            </a>*/}
          </div>
        </div>
      </div>
      <div>
        <p>© Kiddan LA 2023</p>
      </div>
    </div>
  );
}
export default function Layout({ children }) {
  return (
    <div className="page">
      <Navbar />
      <div className="page-content">{children}</div>
      <Footer />
      <VideoModal />
      <MenuModal />
      <MemberModal />
    </div>
  );
}
