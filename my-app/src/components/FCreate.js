import axios from "axios";
import React from "react";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

export function FCreate(props) {
//    let { id } = useParams();
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();
    
    useEffect(()=>{
        setTitle('Enter a title');
        setCover('Set a valid URL');
        setAuthor('Enter a living Author');
    }, []);

    /**
     * This method handles the submit action of the form
     * @param {Event} event 
     */
    const handleSubmit = function (event) {
        event.preventDefault();
        //       console.log(`title = ${this.state.title} cover = ${this.state.cover} author = ${this.state.author}`);
        const book = {
    //        id: id,
            title: title,
            cover: cover,
            author: author
        }
        //    this.setState({ title: '', cover: '', author: '' });
        // Make a HTTP Post request to server, with object 'book' attached to the request
        axios.post('http://localhost:4000/api/book', book)
            .then((res) => {
                navigate('/read');
                console.log(res.data); // Output Message from the Server
            })
            .catch((why) => {
                console.log("Exception encountered - " + why); // Output reason for error
            });
    }

    /**
        * This method handles changes made to the Title field
        * @param {Event} event 
        */
    const onChangeBookTitle = function (event) {
        //   this.setState({ title: event.target.value });
        setTitle(event.target.value);
    }
    /**
     * This method handles changes made to the Cover field
     * @param {Event} event 
     */
    const onChangeBookCover = function (event) {
        //        this.setState({ cover: event.target.value });
        setCover(event.target.value);
    }
    /**
     * This method handles changes made to the Author field
     * @param {Event} event 
     */
    const onChangeBookAuthor = function (event) {
        //       this.setState({ author: event.target.value });
        setAuthor(event.target.value);
    }


    return (

        <div>

            <h3>Hello Create</h3>

            <form onSubmit={handleSubmit} method='post' action='http://localhost:4000/api/book' target='_blank'>

                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text" id='title' name='title'
                        className="form-control"
                        value={title}
                        onChange={onChangeBookTitle}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text" id='author' name='author'
                        className="form-control"
                        value={author}
                        onChange={onChangeBookAuthor}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Cover URL: </label>
                    <input type="text" id='cover' name='cover'
                        className="form-control"
                        value={cover}
                        onChange={onChangeBookCover}
                    />
                </div>
                <input className="btn btn-primary" type='submit' value='Add Book' />
            </form>
        </div>
    )
}


