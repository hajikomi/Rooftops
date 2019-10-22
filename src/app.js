import React from 'react';
import ReactDom from 'react-dom';
import Login from './components/Login';
import {BrowserRouter,Route} from "react-router-dom";
import Member from './components/Member';


ReactDom.render(
    <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/Member" component={Member} />
    </BrowserRouter>,
    document.getElementById('app')
);