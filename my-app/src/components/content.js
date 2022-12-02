import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Books } from './books';


/**
 * The Header Component. Displays the title as provided by the 'title' property or
 * the default message. 
 */
export class Header extends React.Component {
    /** 
     * @param {*} props - properties object passed to the constructor by the implementation
     */
    constructor(props) {
        super(props);
        this.className = "header";
        this.title = props.title ? props.title : "My Header in another Component";
    }
    /**
     * @returns The JSX.Element that will be rendered to the user.
     */
    render() {
        return (
            <div className={this.className}><h3>{this.title}</h3></div>
        );
    }
}

/**
 * MainComponent class represents the main content of the web application that shows the time and a message. 
 */
export class MainComponent extends React.Component {
    /**
     * @returns The JSX.Element that will be rendered to the user.
     */
    render() {
        return (
            <div className='main'>
                <h2 className="etiti">Helllo World!</h2>
                <h2 className="etiti">It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
/**
 * The Footer Component extends the Header component. Displays the title as provided by the 'title' property or
 * the default message. 
 */
export class Footer extends Header {
    constructor(props) {
        super(props);
        this.className = "footer";
        this.title = props.title ? props.title : "My Footer in another Component";
    }
}

/**
 * The NavigationBar Component represents the NavBar situated at the top of the page
 * for user to navigate throught the web application. 
 */
export class NavigationBar extends React.Component {
    render() {
        /**
     * @returns The JSX.Element that will be rendered to the user.
     */
        return (
            <Navbar bg="primary" variant="dark" expand="lg">
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




/**
 * The BookItems component displays information about a single book
 * The information to displayed is passed down from the Read component via the 
 * Books component to individual BookItem components. 
 */
export class BookItems extends React.Component {
    constructor(props) {
        super(props);
        this.item = this.props.item;
    }
    /**
     * @returns The JSX.Element that will be rendered to the user 
     */
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.item.title}</Card.Header>
                    <Card.Body>     
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.item.cover} />
                            <div>
                                {this.props.item.author}
                            </div>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/edit/' + this.props.item._id}className='btn btn-primary'>Edit</Link>
                </Card>




            </div>
        )
    }
}

