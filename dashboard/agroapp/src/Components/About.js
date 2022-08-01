import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import img1 from "./images/image.jpeg";
import img2 from "./images/img22.jpeg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img55.jpeg";
function About() {
  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <h2 className="title_main">FOOD MONITORING APP</h2>
          </Link>
        </div>
      </nav>
      <h1 className="mission">OUR MISSION</h1>
      <p className="mission_para">
        "Through this project, our mission is to provide a cost effective
        solution to the farmers of our country and make them equipped in the era
        of digital transformation. The Project is developed with the mission to
        prevent wastage of wheat grains stored in the Silo and prohibit illegal
        activities accompanying it. Furthermore, we also aim to educate the
        farmers with proper grading and classification about the wheat grains
        through the project."
      </p>
      <h1 className="mission">OUR GUIDE</h1>
      <div className="guide_detail">
        <div class="column1">
          <div class="card card1">
            <img
              src={img1}
              alt="Guide"
              style={{ width: "80%" }}
              className="guide_img"
            />
            <div class="container">
              <p class="title">Under the guidance of</p>
              <h2>Dr. Padmaja K.V.</h2>
              <p class="title">Professor & Associate Dean, </p>
              <h4> Department of EIE, RVCE</h4>
              <p>padmajakv@rvce.edu.in</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
        {/* <img src={img1} alt="guide image" className="guide_img" /> */}
        {/* <h1 style={{ marginBottom: "0px" }}>Dr. Padmaja K.V.</h1>
        <p style={{ marginTop: "auto" }}>Associate Professor E&I Department </p> */}
      </div>

      <h1 className="mission member">OUR TEAM</h1>

      <div className="row">
        <div class="column">
          <div class="card">
            <img src={img2} alt="Aman" style={{ width: "100%" }} />
            <div class="container">
              <h2>Aman Kumar Singh</h2>
              <p class="title">Team Member</p>
              <p>3rd year student, EIE, RVCE</p>
              <p>amankumar.ei19@rvce.edu.in</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src={img3} alt="Sakshi" style={{ width: "100%" }} />
            <div class="container">
              <h2>Sakshi Bharti</h2>
              <p class="title">Team Member</p>
              <p>3rd year student, EIE, RVCE</p>
              <p>sakshibharti.ei19@rvce.edu.in</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src={img4} alt="Samiya" style={{ width: "100%" }} />
            <div class="container">
              <h2>Samiya Goyal</h2>
              <p class="title">Team Member</p>
              <p>3rd year student, EIE, RVCE</p>
              <p>samiyagoyal.ei19@rvce.edu.in</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img src={img5} alt="Pankaj" style={{ width: "100%" }} />
            <div class="container">
              <h2>Pankaj Kankani</h2>
              <p class="title">Team Member</p>
              <p>3rd year student, EIE, RVCE</p>
              <p>pankajkankani.ei19@rvce.edu.in</p>
              <p>
                <button class="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* main */}
    </div>
  );
}

export default About;
