import React from "react";
import "./Navbar.css";
// import Counter from "../Counter";
// import Score from "../Score";

const Navbar = props => (
	<ul className="navbar">
		<li><a className="brand" href="/">KARDASHIAN KLICK</a></li>
		<li className="status">{props.status}</li>
		<li className= "counts">Score:{props.score} | Top Score:{props.topScore}</li>
	</ul>

);

export default Navbar;