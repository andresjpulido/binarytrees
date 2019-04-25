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

class Search extends Component {
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
            <div className="vertical-center">
                <div className="container ">
                    <h3 class="text-white">Depth-first search</h3>
                    <h5 class="text-white">Pre-order (NLR)</h5>
                    <ul><li>    Check if the current node is empty or null.</li>
                        <li>Display the data part of the root (or current node).</li>
                        <li>Traverse the left subtree by recursively calling the pre-order function.</li>
                        <li>Traverse the right subtree by recursively calling the pre-order function.</li>
                    </ul>
                    <h5 class="text-white">In-order (LNR)</h5>
                    <ul>
                        <li>Check if the current node is empty or null.</li>
                        <li>Traverse the left subtree by recursively calling the in-order function.</li>
                        <li>Display the data part of the root (or current node).</li>
                        <li>Traverse the right subtree by recursively calling the in-order function.</li>
                    </ul>
                    <h5 class="text-white">Out-order (RNL)</h5>
                    <ul>
                        <li>Check if the current node is empty or null.</li>
                        <li>Traverse the right subtree by recursively calling the out-order function.</li>
                        <li>Display the data part of the root (or current node).</li>
                        <li>Traverse the left subtree by recursively calling the out-order function.</li>
                    </ul>
                    <h5 class="text-white">Post-order (LRN)</h5>
                    <ul>
                        <li>Check if the current node is empty or null.</li>
                        <li>Traverse the left subtree by recursively calling the post-order function.</li>
                        <li>Traverse the right subtree by recursively calling the post-order function.</li>
                        <li>Display the data part of the root (or current node).</li>
                    </ul>
                    <h5 class="text-white">Generic tree</h5>
                    <ul>
                        <li>Perform pre-order operation.</li>
                        <li>For each i from 1 to the number of children do:</li>
                        <li>Visit i-th, if present.</li>
                        <li>Perform in-order operation.</li>
                        <li>Perform post-order operation.</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Search;
