import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.className = "header";
    }
    render() {
        console.log("classname = " + this.className);
        return (
            <div className={this.className}><h3>{this.props.title}</h3></div>
        );
    }
}

export class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='main'>
                <h2 className="etiti">Helllo World!</h2>
                <h2 className="etiti">It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export class Footer extends Header {
    constructor(props) {
        super(props);
        this.className = "footer";
    }
}


export class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar  bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="\">Home</Nav.Link>
                            <Nav.Link href="read">Read</Nav.Link>
                            <Nav.Link href="create">create</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
