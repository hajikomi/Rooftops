import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from "react-router-dom";
//import Login from './components/Login';
//import Member from './components/Member';
//import Portal from './components/Portal';
import Front from './components/Front';

ReactDom.render(
    <BrowserRouter>
        <Front />
    </BrowserRouter>,
    document.getElementById('app')
);

//<Route exact path="/" component={Login} />
//<Route exact path="/Member" component={Member} />