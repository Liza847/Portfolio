import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone! I am <span className="purple">Yelyzaveta Melnikova </span>  
            from <span className="purple">Kyiv</span>.
            <br />
            I am currently studying at <span className="purple">YCS </span> 
            and have a strong interest in web development.
            <br />
            My goal is to become a professional front-end developer and create amazing projects!
          </p>
          <h5>My Interests:</h5>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cook
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleep
            </li>
            <li className="about-activity">
              <ImPointRight /> Int3
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
