import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Delivering the best Software solutions to Boost your Personal and Business Operations and online Presence</p>
    <img src={image} alt="I made this"/>
  </div>;
}

export default About;
