import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Main/Components/Header/Header';

function App() {

  const headerBtn = e => {
    console.log(e)
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
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
