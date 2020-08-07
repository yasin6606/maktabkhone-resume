import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { MDBBtn } from 'mdbreact';

class Header extends Component {

    constructor(props) {
        super(props);

        this.customizeThem = React.createRef();
        this.about = React.createRef();
        this.skills = React.createRef();
    };

    

    render() {
        return (
            <>
                <Container className="col-12">
                    <Row>
                        <Col>
                            <Navbar className="border-bottom py-4 d-flex justify-content-around">
                                <Navbar.Collapse className="d-flex justify-content-start">
                                    <Nav>
                                        <MDBBtn onClick={this.btnChanges} ref={this.customizeThem}>Customize Theme</MDBBtn>
                                    </Nav>
                                </Navbar.Collapse>
                                <Navbar.Collapse className="d-flex justify-content-end">
                                    <Nav>
                                        <MDBBtn onClick={this.btnChanges} ref={this.about}>About</MDBBtn>
                                    </Nav>
                                    <Nav>
                                        <MDBBtn onClick={this.btnChanges} ref={this.skills}>Skills</MDBBtn>
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