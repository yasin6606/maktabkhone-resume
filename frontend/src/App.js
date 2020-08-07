import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Main/Components/Header/Header';

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Row>
              <Col>
                <Header />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
