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

class Types extends Component {
    constructor(props) {
        super(props);
        localStorage.setItem('session', 0);
        this.state = { ...INITIAL_STATE };
    }

    handleSubmit = (e) => {
        const { email, password } = this.state;
        e.preventDefault();
        localStorage.setItem('session', 1);
        this.props.history.push('/home')


    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <div className="container">
                 
                <h3 class="text-white">Creation</h3>
                 
            </div>
        );
    }
}

export default Types;
