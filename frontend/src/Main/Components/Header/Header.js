import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { MDBBtn } from 'mdbreact';

class Header extends Component {

    // arrow function for onClick on any button
    btnChanges = e => this.props.btnClicked(e.currentTarget.id);

    render() {
        return (
            <>
                <Container className="col-12">
                    <Row>
                        <Col>
                            <Navbar className="border-bottom py-4 d-flex justify-content-around">
                                <Navbar.Collapse className="d-flex justify-content-start">
                                    <Nav>
                                        <MDBBtn id="customizeThem" onClick={this.btnChanges}>Customize Theme</MDBBtn>
                                    </Nav>
                                </Navbar.Collapse>
                                <Navbar.Collapse className="d-flex justify-content-end">
                                    <Nav>
                                        <MDBBtn id="about" onClick={this.btnChanges}>About</MDBBtn>
                                    </Nav>
                                    <Nav>
                                        <MDBBtn id="skills" onClick={this.btnChanges}>Skills</MDBBtn>
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