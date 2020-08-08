import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Main/Components/Header/Header';
import Welcome from './Main/Components/WelcomePart/Welcome';
import About from './Main/Components/AboutPart/About';
import Skills from './Main/Components/SkillsPart/Skills';
import Snowflakes from 'magic-snowflakes';
import { FaArrowCircleDown } from 'react-icons/fa';
import { MDBAnimation } from 'mdbreact';

function App() {

  const aboutPart = useRef(null);
  const skillsPart = useRef(null);

  // snow animation
  Snowflakes({ color: "#fff", wind: false, maxSize: 4 });

  const headerBtn = e => {
    //scroll from About button in header to about part
    e === "about" && aboutPart.current.scrollIntoView({ behavior: "smooth", block: "start" });

    //scroll from Skills button in header to skills part
    e === "skills" && skillsPart.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // go arrow item
  const goArrow = () => {

  };

  return (
    <>
      <Container className="col-12 bg-secondary">
        <Row>
          <Col className="p-0">
            <Row className="fixed-top">
              <Col className="p-0">
                <Header
                  btnClicked={headerBtn}
                  btnClassName="text-white shadow-none"
                />
              </Col>
            </Row>
            <Row style={{ height: window.innerHeight }}>
              <Col className="col-12">
                <Welcome
                  className="text-white"
                />
              </Col>
            </Row>
            <Row ref={aboutPart} style={{ height: window.innerHeight }}>
              <Col className="col-12">
                <About
                  className="text-White"
                />
              </Col>
            </Row>
            <Row ref={skillsPart} style={{ height: window.innerHeight }}>
              <Col className="col-12 h-100">
                <Skills />
              </Col>
            </Row>
            <Row className="fixed-bottom py-3">
              <Col className="text-center">
                <MDBAnimation type="jello" infinite>
                  <FaArrowCircleDown size="23" color="white" onClick={goArrow} />
                </MDBAnimation>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
