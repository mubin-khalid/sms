import React from "react";

import "./card.styles.css";
const reqSvgs = require.context("../../assets/svg", true, /\.svg$/);
const Card = () => {
  const allSvgFilePaths = reqSvgs.keys();
  const imagePath =
    allSvgFilePaths[
      parseInt(Math.random(0, allSvgFilePaths.length) * allSvgFilePaths.length)
    ];
  const image = reqSvgs(imagePath);
  return (
    <div
      className="card w-full md:w-64 px-4 mr-auto ml-auto"
      style={{
        marginTop: "32px"
      }}
    >
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-teal-600">
        <img
          alt="..."
          src={image}
          className="w-full align-middle rounded-t-lg"
          style={{
            marginTop: "-60px"
          }}
        />
        <blockquote className="relative p-8 mb-4">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 583 95"
            className="absolute left-0 w-full block"
            style={{
              height: "95px",
              top: "-94px",
              marginTop: "-38px"
            }}
          >
            <polygon
              points="-30,95 583,95 583,65"
              className="text-teal-600 fill-current"
            ></polygon>
          </svg>
          <h4 className="number text-xl font-bold text-white">+44 123456789</h4>
          <span className="font-medium font-xl text-white inline-block text-center w-full">
            Country Name
          </span>
        </blockquote>
      </div>
    </div>
  );
};

export default Card;
