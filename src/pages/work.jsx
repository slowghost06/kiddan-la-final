import React from "react";
import Portfolio from "../components/portfolio";
import Layout from "../components/layout";
export default function Work() {
  return (
    <div className="work-page">
      <Layout>
        <div className="page-display">
          <p className="title"></p>
          {/*<p className="sub-title">Lorem ipsum</p>
          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        */}
          <Portfolio itemsPerPage={3} />
        </div>
      </Layout>
    </div>
  );
}
