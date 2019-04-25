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
            <div className="vertical-center">
                <div className="container ">
                    <h3 class="text-white">Types of binary trees</h3>
                    <ul>
                        <li>A rooted binary tree has a root node and every node has at most two children.</li>
                        <li>
                            A full binary tree (sometimes referred to as a proper[15] or plane binary tree)[16][17] is a tree in which every node has either 0 or 2 children. Another way of defining a full binary tree is a recursive definition. A full binary tree is either:[11]
            </li>
                        <li>A single vertex.</li>
                        <li>A tree whose root node has two subtrees, both of which are full binary trees.</li>
                        <li>In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes at the last level h.[18] An alternative definition is a perfect tree whose rightmost leaves (perhaps all) have been removed. Some authors use the term complete to refer instead to a perfect binary tree as defined above, in which case they call this type of tree an almost complete binary tree or nearly complete binary tree.[19][20] A complete binary tree can be efficiently represented using an array.[18]</li>
                        <li>
                            A perfect binary tree is a binary tree in which all interior nodes have two children and all leaves have the same depth or same level.[21] An example of a perfect binary tree is the (non-incestuous) ancestry chart of a person to a given depth, as each person has exactly two biological parents (one mother and one father).
                            In the infinite complete binary tree, every node has two children (and so the set of levels is countably infinite). The set of all nodes is countably infinite, but the set of all infinite paths from the root is uncountable, having the cardinality of the continuum. These paths correspond by an order-preserving bijection to the points of the Cantor set, or (using the example of a Stern–Brocot tree) to the set of positive irrational numbers.
                            A balanced binary tree is a binary tree structure in which the left and right subtrees of every node differ in height by no more than 1.[22] One may also consider binary trees where no leaf is much farther away from the root than any other leaf. (Different balancing schemes allow different definitions of "much farther".[23])
                            A degenerate (or pathological) tree is where each parent node has only one associated child node.[citation needed] This means that performance-wise[clarification needed], the tree will behave like a linked list data structure.
            </li>
                        <li>In the infinite complete binary tree, every node has two children (and so the set of levels is countably infinite). The set of all nodes is countably infinite, but the set of all infinite paths from the root is uncountable, having the cardinality of the continuum. These paths correspond by an order-preserving bijection to the points of the Cantor set, or (using the example of a Stern–Brocot tree) to the set of positive irrational numbers.</li>
                        <li>A balanced binary tree is a binary tree structure in which the left and right subtrees of every node differ in height by no more than 1.[22] One may also consider binary trees where no leaf is much farther away from the root than any other leaf. (Different balancing schemes allow different definitions of "much farther".[23])</li>
                        <li>A degenerate (or pathological) tree is where each parent node has only one associated child node.[citation needed] This means that performance-wise[clarification needed], the tree will behave like a linked list data structure.</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Types;
