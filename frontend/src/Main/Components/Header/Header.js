import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { MDBBtn } from 'mdbreact';

class Header extends Component {

    // arrow function for onClick on about and skills button
    btnChanges = e => this.props.btnClicked(e.currentTarget.id);

    // arrow function for onClick on customizeTheme button
    customizeThemeBtnChanges = e => this.props.changeThemeFunc();

    render() {
        return (
            <>
                <Container className={`col-12`}>
                    <Row>
                        <Col>
                            <Navbar className="py-4 d-flex justify-content-around">
                                <Navbar.Collapse className="d-flex justify-content-start">
                                    <Nav>
                                        <MDBBtn className={`${this.props.btnClassName}`} onClick={this.customizeThemeBtnChanges} style={{ color: this.props.textClassName }}>Customize Theme</MDBBtn>
                                    </Nav>
                                </Navbar.Collapse>
                                <Navbar.Collapse className="d-flex justify-content-end">
                                    <Nav>
                                        <MDBBtn id="about" className={`${this.props.btnClassName}`} onClick={this.btnChanges} style={{ color: this.props.textClassName }}>About</MDBBtn>
                                    </Nav>
                                    <Nav>
                                        <MDBBtn id="skills" className={`${this.props.btnClassName}`} onClick={this.btnChanges} style={{ color: this.props.textClassName }}>Skills</MDBBtn>
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