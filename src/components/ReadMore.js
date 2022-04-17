import styleReadMore from "./css/styleReadMore.css";
import { Link } from "react-router-dom";
import drug1 from "./images/drug1.png";
import drug2 from "./images/drug2.png";

const ReadMore = () => {
  return (
    <div>
      <div className="readmore">
        <section id="drugDesc">
          <p class="readmoreHeading">What is Drug Trafficking?</p>
          <p class="readmoreDesc">
            Drug trafficking is the illegal possession of drugs, transporting
            drugs, distributing drugs, selling drugs and so on. You could be
            involved in one or all of these activities and it can be seen as
            drug trafficking. Drug trafficking charges are basically possession
            cases involving a very large amount of drugs. The most common
            scenario occurs when the defendant is pulled over for a traffic
            violation. The officer may obtain probable cause to search through
            the facts and circumstances, such as a dog alerting to possible
            drugs. The driver may also give consent to search and a large amount
            of drugs are found in the vehicle.{" "}
          </p>
        </section>

        <section className="desc2">
          <p class="readmoreHeading">What we do?</p>
          <div className="containerDesc">
            <p className="greenText">DATA GATHERING & ANALYSIS</p>
            <div className="imgAndTextContainer">
              <div className="leftPart">
                <p class="descHeading">Intelligence-Led Prevention</p>
                <div className="drugCampContainer">
                  <div className="imgCamp">
                    <img src={drug1} alt="" />
                  </div>
                  <div className="descCamp">
                    <p>
                      We are building a rich picture of the trends, hotspots,
                      routes and networks of human trafficking on a global
                      scale. With greater intelligence, we are generating
                      targeted action to disrupt drug trafficking networks at
                      their source.
                    </p>

                    <button class="btnCamp">
                      <a href="https://www.unodc.org/unodc/en/drug-prevention-and-treatment/index.html" target="_blank">
                        <p>Read More</p>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="rightPart">
                <img className="imgCampRight" src={drug2} alt="" />
              </div>
            </div>
          </div>

          {/* SECOND PART */}

          <div className="containerDesc">
            <p className="greenText right">KNOWLEDGE SHARING</p>
            <div className="imgAndTextContainer">
              <div className="leftPart2">
                <img className="imgCampRight right" src={drug2} alt="" />
              </div>
              <div className="rightPart2">
                <p class="descHeading right">Awareness Raising</p>
                <div className="drugCampContainer">
                  <div className="descCamp right">
                    <p>
                    Human trafficking is a clandestine crime; being able to spot the signs is critical. We offer a number of resources and bespoke awareness courses for individuals and organisations alike, including schools, businesses and frontline professionals.
                    </p>

                    <button class="btnCamp_right  right">
                      <a href="https://www.unodc.org/unodc/en/drug-prevention-and-treatment/index.html" target="_blank">
                        <p>Read More</p>
                      </a>
                    </button>
                  </div>
                  <div className="imgCamp right">
                    <img src={drug1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReadMore;
