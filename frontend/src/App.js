import React, { useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Main/Components/Header/Header';
import Welcome from './Main/Components/WelcomePart/Welcome';
import About from './Main/Components/AboutPart/About';
import Skills from './Main/Components/SkillsPart/Skills';
import Snowflakes from 'magic-snowflakes';
import { FaArrowCircleDown } from 'react-icons/fa';
import { MDBAnimation } from 'mdbreact';

function App() {

  const [state, setState] = useState({
    colors: {
      snow: "#5aaa2b",
      text: "#aa3",
      cardBorder: "#5aaa2b",
      cardText: "#aa2b",
      background: "#fff",
    },
  });

  const welcomePart = useRef(null);
  const aboutPart = useRef(null);
  const skillsPart = useRef(null);

  // snow animation
  Snowflakes({ color: state.colors.snow, wind: false, maxSize: 4 });

  const headerBtn = e => {
    //scroll from About button in header to about part
    e === "about" && aboutPart.current.scrollIntoView({ behavior: "smooth", block: "start" });

    //scroll from Skills button in header to skills part
    e === "skills" && skillsPart.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
  };

  const changeTheme = () => {
    const bgColor = getRandomColor();

    if (getRandomColor() !== bgColor) {
      setState({
        colors: {
          snow: getRandomColor(),
          text: getRandomColor(),
          cardBorder: getRandomColor(),
          cardText: getRandomColor(),
          background: bgColor,
        },
      });
    } else {
      const bgColor = getRandomColor();

      setState({
        colors: {
          snow: getRandomColor(),
          text: getRandomColor(),
          cardBorder: getRandomColor(),
          cardText: getRandomColor(),
          background: bgColor,
        },
      });
    };
  };

  // go arrow item
  const goArrow = e => {
    window.scrollTo({ behavior: "smooth", top: window.innerHeight });
  };

  return (
    <>
      <Container className="col-12" style={{ backgroundColor: state.colors.background }}>
        <Row>
          <Col className="p-0">
            <Row className="fixed-top">
              <Col className="p-0">
                <Header
                  btnClicked={headerBtn}
                  btnClassName={`shadow-none`}
                  textClassName={state.colors.text}
                  changeThemeFunc={changeTheme}
                />
              </Col>
            </Row>
            <Row ref={welcomePart} style={{ height: window.innerHeight }}>
              <Col className="col-12">
                <Welcome
                  textClassName={state.colors.text}
                />
              </Col>
            </Row>
            <Row ref={aboutPart} style={{ height: window.innerHeight }}>
              <Col className="col-12">
                <About
                  textClassName={state.colors.text}
                />
              </Col>
            </Row>
            <Row ref={skillsPart}>
              <Col className="col-12">
                <Skills
                  textClassName={state.colors.cardText}
                  borderColor={state.colors.cardBorder}
                />
              </Col>
            </Row>
            <Row className="fixed-bottom py-3">
              <Col className="text-center">
                <MDBAnimation type="jello" infinite>
                  <FaArrowCircleDown size="23" color={state.colors.text} onClick={goArrow} />
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
