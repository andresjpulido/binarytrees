import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    HashRouter,
    Redirect
} from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        navCollapsed: true
    }

    _onToggleNav = () => {
        console.log("_onToggleNav")
        this.setState({ navCollapsed: !this.state.navCollapsed })

    }

    handleClick = event => {
        localStorage.setItem('session', 0);
    }

    render() {
        const { navCollapsed } = this.state
        var session = localStorage.getItem('session');
        session = 1;

        if (session == 0)
            return (
                <div></div>
            )
        else
            return (
                 
                    <nav class="navbar navbar-expand-md navbar-dark fixed-top" role="navigation" onClick={this._onToggleNav}>
                        <h2 class="text-white font-weight-bold">Binary Trees</h2>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class={(navCollapsed ? 'collapse' : '') + ' navbar-collapse ' + navCollapsed} id="navbarCollapse" >
                            <ul class="nav navbar-toggle navbar-nav ml-auto" >
                                <li class="nav-item" >
                                    <Link to={`/home`} class="nav-link" >Home</Link>
                                </li>
                                <li class="nav-item ">
                                    <Link to={'/types'} class="nav-link " >Types</Link>
                                </li>
                                <li class="nav-item ">
                                    <Link to={'/creation'} class="nav-link " >Creation </Link>
                                </li>
                                <li class="nav-item ">
                                    <Link to={'/search'} class="nav-link " >Search</Link>
                                </li>
                                <li class="nav-item ">
                                    <Link to={'/simulator'} class="nav-link " >Simulator</Link>
                                </li>
                            </ul> 
                        </div>
                    </nav>
                 
            );
    }
}

export default Header;