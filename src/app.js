import * as home from "./home/home_entry.js";
import MainElement from "./react_example/react_page.jsx";

import ReactDOM from 'react-dom';
import React from 'react';

document.write( home.homePage( new Date().getTime() )  );
ReactDOM.render(<MainElement />, document.getElementById('react'));
