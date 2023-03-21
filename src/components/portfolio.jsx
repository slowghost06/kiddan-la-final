import React, { useState, useEffect } from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./portfolio.scss";
import { GetSheetData } from "./googlesheets";
import { PORTFOLIO_LIST } from "../../package.json";
import ReactPaginate from "react-paginate";
import Card from "react-bootstrap/Card";

import "./playermodal.scss";

import "./videocard.scss";

function Videocard(props) {
  return (
    <div className="videocard">
      <Card>
        <Card.Img variant="top" src={props.thumbnail} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export function PlayerModal(props) {
  const openModal = () => {
    var element = document.getElementById("video-modal");
    var vidframe = document.getElementById("modal__video");
    vidframe.src = props.url;
    element.style.display = "flex";
  };

  return (
    <div className="playermodal">
      <button onClick={openModal} className="">
        <Videocard thumbnail={props.thumbnail} name={props.name} />
      </button>
    </div>
  );
}

export default function Portfolio({ itemsPerPage }) {
  const [rows, setRows] = useState();
  const [allRows, setAllRows] = useState();
  const [cats, setCats] = useState();

  useEffect(() => {
    async function apiCallGetRows() {
      const apiResponse = await GetSheetData(PORTFOLIO_LIST, "work");
      setRows(apiResponse && apiResponse.rows);
      setAllRows(apiResponse && apiResponse.rows);
      setCats(apiResponse && apiResponse.categories);
    }
    apiCallGetRows();
  }, []);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const content = rows && rows.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(rows && rows.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % rows.length;
    setItemOffset(newOffset);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleCatCLick = (event) => {
    const category = event.target.textContent;
    if (category === "All") {
      setRows(allRows);
      return;
    }
    const newContent =
      allRows &&
      allRows.filter((ele) => {
        return ele._rawData[5] === category;
      });
    setItemOffset(0);
    setRows(newContent);
  };

  return (
    <>
      <div className="categories">
        <ul className="links">
          <li>
            <button
              type="button"
              className="paragraph"
              onClick={handleCatCLick}
              href="#"
            >
              All
            </button>
          </li>
          {cats &&
            cats.map((ele) => (
              <li key={ele}>
                <button
                  type="button"
                  className="paragraph"
                  onClick={handleCatCLick}
                  href="#"
                >
                  {ele}
                </button>
              </li>
            ))}
        </ul>
      </div>
      <ResponsiveMasonry
        className="portfolio"
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry
          className="masonry"
          children={
            content &&
            content.map((ele) => (
              <PlayerModal
                key={ele._rawData[2]}
                thumbnail={ele._rawData[3]}
                url={ele._rawData[4]}
                name={ele._rawData[2]}
              />
            ))
          }
        />
      </ResponsiveMasonry>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
    </>
  );
}
