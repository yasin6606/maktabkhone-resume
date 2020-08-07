import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBBtn } from 'mdbreact';

class ButtonComponent extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <MDBBtn color="primary">دکمه</MDBBtn>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ButtonComponent;