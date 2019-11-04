import React from 'react';
import ReactDom from 'react-dom';
import Login from './components/Login';
import {BrowserRouter,Route} from "react-router-dom";
import Member from './components/Member';
import Portal from './components/Portal';


ReactDom.render(
    <BrowserRouter>
    <div>
        <Route exact path="/" component={Login} />
        <Route path="/Member" component={Member} />
        <Route path="/Portal" component={Portal} />
    </div>

    </BrowserRouter>,
    document.getElementById('app')
);