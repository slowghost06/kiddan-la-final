import React from "react";
import Members from "../components/members";
import Layout from "../components/layout";
export default function Team() {
  return (
    <Layout>
      <div className="page-display">
        {/*<p className="title" style={{ marginBottom: "1rem" }}>
          Meet our lovelies!
        </p>
        <p className="sub-title">Don't forget to say hi!</p>
        <p className="paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>*/}
        <Members
          thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/1920px-A_black_image.jpg?20201103073518"
          name="Something"
        />
      </div>
    </Layout>
  );
}
