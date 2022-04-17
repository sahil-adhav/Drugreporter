import React from "react";
import bgHome from "./images/bgHome.jpg";
import styleAbout from "./css/styleAbout.css";
import sahil from "./images/sahil.png";
import aaditi from "./images/aaditi.jpeg";
import aditya from "./images/aditya.jpeg";
import ayush from "./images/ayush.jpeg";

function About() {
  return (
    <div>
      <section id="bg__image">
        <bgImg className="bgImg" style={{ backgroundImage: `url(${bgHome})` }}>
          <h1 className="abtHeading shadow">
            ABOUT <br /> US
          </h1>
        </bgImg>
      </section>

      {/* About us section  */}
      <section id="aboutUs">
        <div className="imgContainer">
          <div className="personalInfo">
            <img class="personalPic" src={aaditi} alt="" />
            <p class="picName">Aaditi Badgujar</p>
            <div class="social__icon">
              <a href="#">
                <i class="icon ion-social-instagram"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-github"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="personalInfo">
            <img class="personalPic" src={sahil} alt="" />
            <p class="picName">Sahil Adhav</p>
            <div class="social__icon">
              <a href="#">
                <i class="icon ion-social-instagram"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-github"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="personalInfo">
            <img class="personalPic" src={aditya} alt="" />
            <p class="picName">Aditya Sood</p>
            <div class="social__icon">
              <a href="#">
                <i class="icon ion-social-instagram"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-github"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="personalInfo">
            <img class="personalPic" src={ayush} alt="" />
            <p class="picName">Ayush Prasad</p>
            <div class="social__icon">
              <a href="#">
                <i class="icon ion-social-instagram"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-github"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-linkedin"></i>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default About;
