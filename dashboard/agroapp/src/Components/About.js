import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import img1 from "./images/image.jpeg";
function About() {
  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <h2 className="title">FOOD MONITORING APP</h2>
          </Link>
        </div>
      </nav>
      <h1 className="mission">OUR MISSION</h1>
      <p className="mission_para">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
        dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
        est, qui dolorem ipsum quia dolor sit amet"
      </p>
      <h1 className="mission">OUR GUIDE</h1>
      <div className="guide_detail">
        <img src={img1} alt="guide image" className="guide_img" />
        <h1 style={{ marginBottom: "0px" }}>Dr. Padmaja K.V.</h1>
        <p style={{ marginTop: "auto" }}>Associate Professor E&I Department </p>
      </div>
      <h1 className="mission">OUR TEAM</h1>
    </div>
  );
}

export default About;
