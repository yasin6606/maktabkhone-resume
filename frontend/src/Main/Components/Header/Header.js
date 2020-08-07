import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <>
                <Container className="col-12">
                    <Row>
                        <Col>
                            <Navbar className="border-bottom py-4 d-flex justify-content-around">
                                <Navbar.Collapse>
                                    <Nav>

                                    </Nav>
                                    <Nav>

                                    </Nav>
                                </Navbar.Collapse>
                                <Navbar.Collapse className="d-flex justify-content-end">
                                    <Nav>

                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Header;