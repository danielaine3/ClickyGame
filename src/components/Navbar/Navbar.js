import React from "react";
import "./Navbar.css";
import Counter from "../Counter";
import Score from "../Score";

const Navbar = props => (
	<ul className="navbar">
		<li className="brand">
			<a href="/">Klicking Up With <br /> The Kardashians</a>
		</li>
		<li className="status"></li>
		<li className= "counts"> 
			<Counter />  <Score />
		</li>
	</ul>

);

export default Navbar;