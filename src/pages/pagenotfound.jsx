import React from "react";
import Layout from "../components/layout";

export default function PageNotFound() {
  return (
    <Layout>
      <div className="page-display">
        <p className="title" style={{ fontSize: "8rem" }}>
          404
        </p>
        <p className="sub-title">
          Sorry.
          <br />
        </p>
        <p className="paragraph">This page does not exist.</p>
      </div>
    </Layout>
  );
}
