import React from "react";
import { MenuModal, Navbar } from "../components/layout";
export default function Home() {
  return (
    <div className="page-home">
      <Navbar />
      <MenuModal />
      <div className="page-content">
        <div className="page-display">
          <div className="logo-home">
            {/*<div className="fir">
              <img
                src={require("../images/02_KiddanLA_ENG_PNG.png")}
                alt="KiddanLA logo"
              />
            </div>*/}
            <div className="sec">
              <img
                src={require("../images/01_KiddanLA_Punjabi_PNG.png")}
                alt="KiddanLA logo"
              />
              {/*<p className="sub-title" style={{ textAlign: "center" }}>
                Some motto we might want to add
          </p>*/}
            </div>
          </div>
          <div className="transition">
            <div className="fir">
              <img
                src={require("../images/02_KiddanLA_ENG_PNG.png")}
                alt="KiddanLA logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
