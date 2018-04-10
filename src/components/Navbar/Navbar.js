import React from "react";
import "./Navbar.css";
import Counter from "../Counter";
import Score from "../Score";

const Navbar = props => (
	// <div className="navbar">
		<ul className="navbar">
			<li className="brand">
				<a href="/">Klicking Up With <br /> The Kardashian</a>
			</li>
			<li className="status"></li>
			<li className= "counts"> 
				<Counter />  <Score />
			</li>
		</ul>
	// </div>
);

export default Navbar;