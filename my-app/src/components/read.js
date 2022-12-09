import axios from 'axios';
import { Books } from './books';
import React from 'react';

/**
 * Read Component class, maintains a state as an array of books viewable on the web application
 * This component passes down the reload method to its children for subsequent reload
 */
export class Read extends React.Component {
    //    axios = require('axios');
    /*
        state object contains a single property that is an array of books with 3 entries
    */
    state = {
        books: []
    }

    constructor(){
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    /**
     * This method is called whenever the component is added to the root DOM
     * and displayed to the user
     * This method fetches data from the server 'app.js' running at localhost:4000
     * This method is subsequently passed on to the children
     */
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
            .then(response => {
                this.setState({ books: response.data });
                console.log(this.state);
            })
            .catch((error) => { console.log("Something went wront") });
    }

    /**
     * @returns The JSX.Element that will be rendered to the user which is the Books component and a message
     */
    render() {
        return (
            <div className="App">
                <h3>Hello Read</h3>
                <Books books={this.state.books} reload={this.componentDidMount} />
            </div>
        )
    }
}