import axios from 'axios';
import { Books } from './books';
import React from 'react';
/**
 * Read Component class, maintains a state as an array of books viewable on the web application
 */
 export class Read extends React.Component {
//    axios = require('axios');
    /*
        state object contains a single property that is an array of books with 3 entries
    */
    state = {
        books: []
    }
    /**
     * This method is called whenever the component is added to the root DOM
     * and displayed to the user
     * This method fetches data from an API Repository on the web using HTTP GET 
     * method. Response is saved in the component's state. 
     */
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
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
                <Books books={this.state.books} />
            </div>
        )
    }
}