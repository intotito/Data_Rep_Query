import axios from "axios";
import React from "react";
/**
 * Create component displays a form for entering values for 
 * books Title, Cover and Year. 
 */
export class Create extends React.Component {
    /**
     * Constructor binds the event handlers and the component's state
     */
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookYear = this.onChangeBookYear.bind(this);
        this.state = {
            title: '',
            cover: '',
            year: ''
        };
    }
    /**
     * This method handles the submit action of the form
     * @param {Event} event 
     */
    handleSubmit(event) {
        event.preventDefault();
        console.log(`title = ${this.state.title} cover = ${this.state.cover} year = ${this.state.year}`);
        const book = {
            title:this.state.title,
            cover:this.state.cover,
            year:this.state.year
        }
        this.setState({ title: '', cover: '', year: '' });
        // Make a HTTP Post request to server, with object 'book' attached to the request
        axios.post('http://localhost:4000/api/book', book)
            .then((res)=>{
                console.log(res.data); // Output Message from the Server
            })
            .catch((why)=>{
                console.log("Exception encountered - " + why); // Output reason for error
            });
    }
    /**
     * This method handles changes made to the Title field
     * @param {Event} event 
     */
    onChangeBookTitle(event) {
        this.setState({ title: event.target.value });
    }
    /**
     * This method handles changes made to the Cover field
     * @param {Event} event 
     */
    onChangeBookCover(event) {
        this.setState({ cover: event.target.value });
    }
    /**
     * This method handles changes made to the Year field
     * @param {Event} event 
     */
    onChangeBookYear(event) {
        this.setState({ year: event.target.value });
    }

   

    render() {
        return (
            <div>
                
                <h3>Hello Create</h3>

            <form></form>

                <form onSubmit={this.handleSubmit} method='post' action='http://localhost:4000/api/book' target='_blank'>

                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text" id='title' name='title'
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Book Year: </label>
                        <input type="text" id='year' name='year'
                            className="form-control"
                            value={this.state.year}
                            onChange={this.onChangeBookYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Book Cover URL: </label>
                        <input type="text" id='url' name='url'
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>
                    <input className="btn btn-primary" type='submit' value='Add Book' />
                </form>
            </div>
        )
    }

}