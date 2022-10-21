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
        this.setState({ title: '', cover: '', author: '' });
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
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>
                    <input className="btn btn-primary" type='submit' value='Add Book' />
                </form>
            </div>
        )
    }

}