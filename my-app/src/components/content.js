import React, { Component } from 'react'
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

export class Footer extends Header{
    constructor(props){
        super(props);
        this.className = "footer";
    }
}