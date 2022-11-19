import axios from "axios";
import React from "react";
/**
 * Create component displays a form for entering values for 
 * books Title, Cover and Author. 
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
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.state = {
            title: '',
            cover: '',
            author: ''
        };
    }
    /**
     * This method handles the submit action of the form
     * @param {Event} event 
     */
    handleSubmit(event) {
        event.preventDefault();
        console.log(`title = ${this.state.title} cover = ${this.state.cover} author = ${this.state.author}`);
        const book = {
            title:this.state.title,
            cover:this.state.cover,
            author:this.state.author
        }
        this.setState({ title: '', cover: '', author: '' });
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
     * This method handles changes made to the Author field
     * @param {Event} event 
     */
    onChangeBookAuthor(event) {
        this.setState({ author: event.target.value });
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
                        <label>Add Book Author: </label>
                        <input type="text" id='author' name='author'
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Book Cover URL: </label>
                        <input type="text" id='cover' name='cover'
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