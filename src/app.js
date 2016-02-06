import * as home from "./home/home_entry.js";
//var home = require("babel!./home/home_entry.js");

document.write( home.homePage( new Date().getTime() )  );
