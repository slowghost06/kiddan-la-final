import React, { useState, useEffect } from "react";
import { GetSheetData } from "./googlesheets";
import { MEMBERS_LIST } from "../../package.json";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import "./members.scss";
import Card from "react-bootstrap/Card";

import "./membercard.scss";

import { IoCloseOutline } from "react-icons/io5";

import "./membermodal.scss";
export function Membercard(props) {
  const openModal = () => {
    var dp = document.getElementById("dp");
    dp.src = props && props.image;
    var name = document.getElementById("name");
    name.innerText = props && props.name;
    var pos = document.getElementById("pos");
    pos.innerText = props && props.position;
    var desc = document.getElementById("desc");
    desc.innerText = props && props.desc;
    var element = document.getElementById("member-modal");
    element.style.display = "flex";
  };
  return (
    <div className="membercard">
      <Card onClick={openModal}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <div className="card-text">
            <Card.Title>{props.name}</Card.Title>
            <Card.Title className="position">{props.position}</Card.Title>
            {/*<Card.Title className="desc">{props.desc}</Card.Title>*/}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export function MemberModal() {
  const closeModal = () => {
    var element = document.getElementById("member-modal");
    element.style.display = "none";
  };

  return (
    <div id="member-modal">
      <section className="modal__bg" onClick={closeModal}>
        <div className="modal__align">
          <div className="modal__content">
            <IoCloseOutline
              className="modal__close"
              arial-label="Close modal"
              onClick={closeModal}
            />
            <div className="modal__video-align img-txt-side">
              <div className="img">
                <img id="dp" src="" alt="" />
              </div>
              <div className="txt">
                <p id="name" className="header"></p>
                <p id="pos" className="sub-title"></p>
                <p id="desc" className="paragraph"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Members() {
  const [rows, setRows] = useState();

  useEffect(() => {
    async function apiCall() {
      const apiResponse = await GetSheetData(MEMBERS_LIST);
      setRows(apiResponse && apiResponse.rows);
    }
    apiCall();
  }, []);

  return (
    <ResponsiveMasonry
      className="members"
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
    >
      <Masonry
        className="masonry"
        children={
          rows &&
          rows.map((ele) => (
            <Membercard
              key={ele._rawData[4]}
              image={ele._rawData[4]}
              name={ele._rawData[1]}
              position={ele._rawData[2]}
              desc={ele._rawData[3]}
            />
          ))
        }
      />
    </ResponsiveMasonry>
  );
}
