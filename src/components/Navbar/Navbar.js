import React from "react";
import "./Navbar.css";
import Counter from "../Counter";
import Score from "../Score";

const Navbar = props => (
	<div className="navbar">
		<ul>
			<li className="brand">
				<a href="/">Kardashian Klick</a>
			</li>
			<li className="status"></li>
			<li className= "counts"> 
				<Counter /> 
			</li>
			<li>
				<Score />
			</li>
		</ul>
	</div>
);

export default Navbar;