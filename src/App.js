import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import 'react-redux-toastr/src/styles/index.scss'
import './assets/scss/style.scss';
import Header from './components/Header';
import Home from './controllers/Home';
import $ from 'jquery'
import Characters from './controllers/Characters';
import Roadmap from './controllers/Roadmap';
import Backed from './controllers/Backed';
import Fooder from './components/Fooder';
import Features from './controllers/Features';

const width = $("body").width();

const pathname = window.location.pathname
const isMobile = width <= 768 ? true : false

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Header pathname={pathname} isMobile={isMobile}></Header>
                <Home></Home>
                <Characters></Characters>
                <Features></Features>
                <Roadmap></Roadmap>
                <Backed></Backed>
                <Fooder></Fooder>
            </Fragment>
        )
    }
}

export default App