import React from "react";
import { BookItems } from "./content";
/**
 * Books component contains the books to be displayed in the Read component. Each Item
 * on the list is represented by the BookItem component. 
 */
export class Books extends React.Component {
    // Attempting to save properties to another variable for future use
    // will result in an empty variable. 
    // solution - access the data from the props
    
    /**
     * @returns The JSX.Element that will be rendered to the user 
     * Method 'reload' passed on from the parent Component (Read) is subsequently passed on to 
     * individual BookItems Components.
     */
    render() {
        return this.props.books.map((book) => {
            return <BookItems item={book} key={book._id} reload={this.props.reload} />;
        });
    }
}