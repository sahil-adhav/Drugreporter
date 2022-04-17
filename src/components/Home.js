import React, { useState } from "react";
// import Popup from "reactjs-popup";
import Popup from "./Popup.js";
import "reactjs-popup/dist/index.css";
import bgHome from "./images/bgHome.jpg";
import styleHome from "./css/styleHome.css";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <section id="bg__image">
        <bgImg className="bgImg" style={{ backgroundImage: `url(${bgHome})` }}>
          <h1 className="imgHeading shadow">PREVENT</h1>
          <h1 className="imgHeading shadow">DRUG</h1>
          <h1 className="imgHeading shadow">TRAFFICKING</h1>
        </bgImg>
      </section>

      <section id="info">
        <section className="leftSection">
          <div className="info__heading">
            <p>Report an Incident</p>
          </div>
          <div className="info__desc">
            <p>
              Drug trafficking is the illegal possession of drugs, transporting
              drugs, distributing drugs, selling drugs and so on. You could be
              involved in one or all of these activities and it can be seen as
              drug trafficking. Drug trafficking charges are basically
              possession cases involving a very large amount of drugs.{" "}
            </p>
          </div>
        </section>
        <aside className="rightSection">
          <div className="infoBtn">
            {/* <button>REPORT</button> */}
            <input
              className="btnForm"
              type="button"
              value="Report"
              onClick={togglePopup}
            />

            {isOpen && (
              <Popup
                content={
                  <>
                    <div className="formContainer">
                      <div className="formHeadingContainer">
                        <p className="formTitle">Report an Incident</p>
                      </div>
                      <div className="formContent">
                        <div className="formContent__">
                          <p className="formHeading">Incident Form</p>
                        </div>
                        <div className="formNotice">
                          <p className="formNotice__">
                            Please describe what you have seen or experienced.
                            What is it that makes you suspect exploitation is
                            taking place?
                          </p>
                        </div>
                        <div className="form">
                          <div className="sec1">
                            <p className="question">About the Incident</p>
                            <p className="questionDesc">Incident Description</p>
                            <textarea
                            className="questionDesc__"
                              name=""
                              id="incidentDesc"
                              cols="67"
                              rows="6"
                            ></textarea>
                            <p className="tagline">
                              What did you see or hear? What didn't feel right?
                            </p>
                          </div>
                          <div className="sec2">
                            <div className="sec2part1">
                              <p className="question">Incident Date</p>
                              <input className="dateNtime" type="datetime-local" name="" id="" />
                            </div>
                            <div className="sec2part2">
                              <p className="question__">Location</p>
                              <input
                                type="text"
                                name=""
                                id=""
                                className="Location"
                                placeholder="Enter Location"
                              />
                            </div>
                          </div>
                          <div className="sec3 ">
                            <p className="question">Media</p>
                            <p className="tagline">
                              Add Photos/Videos or audio content you have
                              relating to your incident description. Please do
                              not share explicit content.
                            </p>
                            {/* <button className="btnSubmitMedia">Upload</button> */}
                            <input className="btnUpload" type="file" name="" id="" />
                          </div>
                          <div className="submitForm">
                            <button className="btnSubmitForm" type="submit">SUBMIT</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                }
                handleClose={togglePopup}
              />
            )}
          </div>
        </aside>
      </section>
    </div>
  );
}

export default Home;
