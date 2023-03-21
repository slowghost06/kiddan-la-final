import React from "react";
import Layout from "../components/layout";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin
} from "react-icons/ai";
export default function Contact() {
  return (
    <Layout>
      <div className="page-display page-contact">
        {/*<p className="title">Find us here!</p>*/}
        <p className="sub-title">Email</p>
        <p className="paragraph">
          Write to us at{" "}
          <a className="email" href="mailto:hello@kiddan.la">
            hello@kiddan.la.
          </a>
        </p>
        <p className="sub-title">Socials</p>
        <div className="fr-container">
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
        <p className="sub-title">Address</p>
        <p className="paragraph" style={{ textAlign: "center" }}>
          Unit No. 905, 9th Floor,
          <br />
          Aston Building, Lokhandwala Road,
          <br />
          Andheri West, Mumbai
          <br />
          PIN-400053
        </p>
      </div>
    </Layout>
  );
}
