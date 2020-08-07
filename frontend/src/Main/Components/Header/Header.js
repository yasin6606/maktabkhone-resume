import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

class Header extends Component {

    constructor(props) {
        super(props);

        this.customizeThem = React.createRef();
        this.about = React.createRef();
        this.skills = React.createRef();
    };

    // arrow function for onClick on any button
    btnChanges = () => {
        if (this.customizeThem.current.id = "customizeThem") {

        };

        if (this.customizeThem.current.id = "about") {

        };

        if (this.customizeThem.current.id = "skills") {

        };
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
                                        <button className="btn" id="customizeThem" onClick={this.btnChanges} ref={this.customizeThem}>Customize Theme</button>
                                    </Nav>
                                </Navbar.Collapse>
                                <Navbar.Collapse className="d-flex justify-content-end">
                                    <Nav>
                                        <button className="btn" id="about" onClick={this.btnChanges} ref={this.about}>About</button>
                                    </Nav>
                                    <Nav>
                                        <button className="btn" id="skills" onClick={this.btnChanges} ref={this.skills}>Skills</button>
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