import React from "react";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <div className="page-display">
        {/*<p className="title">Who are we?</p>*/}
        {/*<p className="sub-title">Some motto that we might want to add</p>*/}
        <div className="img-txt-side">
          {/*
            <div className="img">
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1024px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                alt="KiddanLA logo"
              />
            </div>
          */}

          <div className="txt">
            {/*
              <p className="sub-title" style={{ textAlign: "left" }}>
                What is Lorem Ipsum?
              </p>
            */}
            <p className="paragraph">
              At the forefront of the digital revolution, Kiddan LA continues to
              break new ground in the field of visual effects, virtual reality,
              augmented reality, immersive entertainment, and concept art.
              <br />
              <br />
              Founded by Hansjeet Duggal, Kiddan LA is one of the leading
              effects facilities in the world, with a studio located in Los
              Angeles, Orange, and now in Mumbai. Kiddan LA has created visual
              effects for over 100 projects. With so many technical and creative
              innovations, Kiddan LA has been a constant force propelling the
              evolution of visual effects.
              <br />
              <br />
              Since 2015, Kiddan LA has led the way in the use of computer
              graphics and digital imaging in feature Air. Kiddan LA features
              one the most comprehensive and advanced digital effects production
              pipelines in the entertainment industry, from the earliest
              creation of wholly computer-generated characters. Critical to
              Kiddan LA’s success are its Visual Effects Supervisors, who
              combine technical expertise with creative vision. They are joined
              by a global team of some 150-200 employees that includes
              producers, art directors, computer graphics artists, software
              engineers, editors, and technicians.
              <br />
              <br />
              Working closely with filmmakers to assure their vision is realized
              on screen, Kiddan LA’s departments handle end to end virtual
              production, research and development, concept art, creature
              design, fully articulated animatics, a mixture of computer
              graphics effects, models and miniatures, digital matte paintings,
              and state-of-the-art animation procedures. The artists that staff
              these departments represent the true brain trust at Kiddan LA, and
              their creativity has driven new technologies into the movie
              moments that continue to thrill and transport audiences globally.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
