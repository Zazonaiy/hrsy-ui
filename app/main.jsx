const React = require('react');
const ReactDOM = require('react-dom');
//const AppComponent = require('./components/Comment.jsx');

//ReactDOM.render(<AppComponent />, document.getElementById('content'));
//var Comment = <h1>react test</h1>;
//ReactDOM.render (
//    Comment,
//    document.getElementById('content')
//)

import Login from "./components/login/login";
import AppRouter from "./components/appRouter";


ReactDOM.render(<AppRouter></AppRouter>, document.getElementById('content'));
