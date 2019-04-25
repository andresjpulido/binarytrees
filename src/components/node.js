import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from "react-router-dom";


const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class Node extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('session', 0);
        this.handleClick = this.handleClick.bind(this);
        this.state = { ...INITIAL_STATE }; 
    }

    handleSubmit = (e) => {
        const { email, password } = this.state;
        e.preventDefault();
        localStorage.setItem('session', 1);
        this.props.history.push('/home') 
    };

    handleClick = event => {
        console.log("test");
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (

            <div class="rounded-circle bg-danger " onClick={this.handleClick.bind(this)}>
                <div class="text-center">883</div>
            </div>

        );
    }
}

export default Node;
