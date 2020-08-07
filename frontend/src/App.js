import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Main/Components/Header/Header';

function App() {

  const aboutPart = useRef(null);
  const skillsPart = useRef(null);

  const headerBtn = e => {
    //scroll from About button in header to about part
    e === "about" && aboutPart.current.scrollIntoView({ behavior: "smooth", block: "start" });

    //scroll from Skills button in header to skills part
    e === "skills" && skillsPart.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Container className="col-12">
        <Row>
          <Col className="p-0">
            <Row>
              <Col className="p-0">
                <Header
                  btnClicked={headerBtn}
                />
              </Col>
            </Row>
            <Row ref={aboutPart}>
              <Col>

              </Col>
            </Row>
            <Row ref={skillsPart}>
              <Col>

              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
