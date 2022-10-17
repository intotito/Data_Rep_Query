import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
 * Read Component class, maintains a state as an array of books viewable on the web application
 */
export class Read extends React.Component {
    /*
        state object contains a single property that is an array of books with 3 entries
    */
    state = {
        books: [
            {
                "title": "Learn Git in a Month of Lunches",
                "isbn": "1617292419",
                "pageCount": 0,
                "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
                "status": "MEAP",
                "authors": ["Rick Umali"],
                "categories": []
            },
            {
                "title": "MongoDB in Action, Second Edition",
                "isbn": "1617291609",
                "pageCount": 0,
                "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg", "status": "MEAP",
                "authors": [
                    "Kyle Banker",
                    "Peter Bakkum",
                    "Tim Hawkins",
                    "Shaun Verch",
                    "Douglas Garrett"
                ],
                "categories": []
            },
            {
                "title": "Getting MEAN with Mongo, Express, Angular, and Node",
                "isbn": "1617292036",
                "pageCount": 0,
                "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg", "status": "MEAP",
                "authors": ["Simon Holmes"],
                "categories": []
            }
        ]
    }
    /**
     * @returns The JSX.Element that will be rendered to the user.
     */
    render() {
        return (
            <div>
                <h3>Hello Read</h3>
                <Books books={this.state} />
            </div>
        )
    }
}

export class Create extends React.Component {
    render() {
        return (
            <div>

                <h3>Hello Create</h3>
            </div>
        )
    }
}

export class Books extends React.Component {
    constructor(props) {
        super(props);
        this.books = this.props.books.books;
    }

    render() {
        return this.books.map((book) => {
            return <BookItems item={book} key={book.isbn} />;
        });
    }
}

export class BookItems extends React.Component {
    constructor(props) {
        super(props);
        this.item = this.props.item;
        console.log(this.item);
    }
    renderX() {
        console.log("What === " + this.item);
        return (<div>aaa</div>)
    }
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.item.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.item.thumbnailUrl} />
                            <div>
                                {this.item.authors.join(", ")}
                            </div>
                        </blockquote>
                    </Card.Body>
                </Card>




            </div>
        )
    }
}

