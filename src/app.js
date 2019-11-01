import React from 'react';
import ReactDom from 'react-dom';
import Login from './components/Login';
import {BrowserRouter,Route} from "react-router-dom";
import Member from './components/Member';
import Portal from './components/Portal';


ReactDom.render(
    <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route path="/Member" component={Member} />
        <Route path="/Portal" component={Portal} />
    </BrowserRouter>,
    document.getElementById('app')
);