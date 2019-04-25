import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import Node from '../components/node'

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class Simulator extends Component {

    constructor(props) {
        super(props);
        localStorage.setItem('session', 0);
        this.state = { ...INITIAL_STATE };
        this.executeClick = this.executeClick.bind(this);
    }

    executeClick = (e) => {
        const { email, password } = this.state;
        e.preventDefault();

        //leer el arbol

        //recorrer el arbol y mostrar el resultado

    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <div className="container">

                <h3 class="text-white">Simulator</h3>
                <br />
                <h5 class="text-white">
                    <span class="badge badge-danger">1. </span> Creation
                </h5>

                <hr />

                <div class="row">

                    <ul>
                        <li>select the node</li>
                        <select class="form-control form-control-sm">
                            <option>---</option>
                        </select>
                        <li>select position</li>
                        <select class="form-control form-control-sm">
                            <option>---</option>
                        </select>                        
                        <li>Asign value</li>
                        <input class="form-control form-control-sm" type="text" placeholder=""/>                        
                        <li>Operation</li>
                        <select class="form-control form-control-sm">
                            <option>Create</option>
                            <option>Modify</option>
                            <option>Delete</option>
                        </select> 
                        <br />                          
                        <button type="button" class="btn btn-outline-secondary "
                            onClick={this.executeClick.bind(this)}>Edit</button>
                    </ul>

                    <div id="tree">
                        <svg height="500px" width="100%">

                            <circle cx="50%" cy="50" r="20" />
                            <circle cx="25%" cy="150" r="20" />
                            <circle cx="12%" cy="250" r="20" />
                            <circle cx="37%" cy="250" r="20" />
                            <circle cx="5%" cy="350" r="20" />
                            <circle cx="75%" cy="150" r="20" />

                            <text x="50%" y="50" dy=".3em"> 1 </text>
                            <text x="25%" y="150" dy=".3em"> 7 </text>
                            <text x="12%" y="250" dy=".3em"> 2 </text>
                            <text x="37%" y="250" dy=".3em"> 3 </text>
                            <text x="5%" y="350" dy=".3em"> 6 </text>
                            <text x="75%" y="150" dy=".3em"> 11 </text>

                            <line x1="50%" y1="50" x2="25%" y2="150" />
                            <line x1="50%" y1="50" x2="75%" y2="150" />
                            <line x1="25%" y1="150" x2="12%" y2="250" />
                            <line x1="12%" y1="250" x2="5%" y2="350" />
                            <line x1="25%" y1="150" x2="37%" y2="250" />

                        </svg>
                    </div>

                </div>

                <h5 class="text-white">
                    <span class="badge badge-danger">2. </span> Search
                </h5>

                <hr />

                <div class="row">
                    <div class="col-4">
                        <div class="list-group" id="list-tab" role="tablist">
                            <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="nlr">Pre-order (NLR)</a>
                            <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="lnr">In-order (LNR)</a>
                            <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="rnl">Out-order (RNL)</a>
                            <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="lrn">Post-order (LRN)</a>
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">

                                <div class="border border-secondary rounded">
                                    <pre><code>
                                        void preorden(tArbol *a)
                                        {`
{
    if (a != NULL) {
        tratar(a);           
    preorden(a->hIzquierdo);
    preorden(a->hDerecho);
}
                                        `}
                                    </code></pre>
                                </div>

                            </div>
                            <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                <div class="border border-secondary rounded">
                                    <pre><code>
                                        void preorden(tArbol *a)
                                        {`
{
    if (a != NULL) {
        tratar(a);              
    preorden(a->hIzquierdo);
    preorden(a->hDerecho);
}
                                        `}
                                    </code></pre>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                                <div class="border border-secondary rounded">
                                    <pre><code>
                                        void preorden(tArbol *a)
                                        {`
{
    if (a != NULL) {
            tratar(a);                         
        preorden(a->hIzquierdo);
        preorden(a->hDerecho);
}
                                        `}
                                    </code></pre>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                                <div class="border border-secondary rounded">
                                    <pre><code>
                                        void preorden(tArbol *a)
                                        {`
{
    if (a != NULL) {
        tratar(a);                         
    preorden(a->hIzquierdo);
    preorden(a->hDerecho);
}
                                        `}
                                    </code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-row text-center">
                    <div class="col-12">
                        <button type="button" class="btn btn-outline-secondary "
                            onClick={this.executeClick.bind(this)}>Search</button>
                    </div>
                </div>

                <br /><br />

                <div class="p-3 mb-2 bg-danger text-white">Result 0 1 3 2 5</div>
            </div >
        );
    }
}

export default Simulator;
