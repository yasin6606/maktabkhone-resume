import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Main/Components/Header/Header';
import Welcome from './Main/Components/WelcomePart/Welcome';
import Snowflakes from 'magic-snowflakes';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

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

  return (
    <>
      <Container className="col-12 bg-secondary" style={{ height: window.innerHeight }}>
        <Row>
          <Col className="p-0">
            <Row>
              <Col className="p-0">
                <Header
                  btnClicked={headerBtn}
                  btnClassName="text-white"
                />
              </Col>
            </Row>
            <Row>
              <Col className="col-12">
                <Welcome />
              </Col>
              <Col className="col-12 d-flex justify-content-center fixed-bottom">
              </Col>
              <FaArrowDown />
            </Row>
            <Row ref={aboutPart}>
              <Col className="col-12">

              </Col>
              <Col className="col-12 d-flex justify-content-center">
                <FaArrowDown />
              </Col>
            </Row>
            <Row ref={skillsPart}>
              <Col className="col-12">

              </Col>
              <Col className="col-12 d-flex justify-content-center">
                <FaArrowUp />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
