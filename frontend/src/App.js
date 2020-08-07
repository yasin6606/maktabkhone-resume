import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Main/Components/Header/Header';

function App() {

  

  return (
    <>
      <Container className="col-12">
        <Row>
          <Col className="p-0">
            <Row>
              <Col className="p-0">
                <Header />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
