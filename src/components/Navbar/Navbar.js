import React from "react";
import "./Navbar.css";
import Counter from "../Counter";
import Score from "../Score";

const Navbar = props => (
	<Grid>
		<Row>
			<Col xs={12}>
			<div className="navbar">
				<ul>
					<li className="brand">
						<a href="/">Klicking Up With The Kardashian</a>
					</li>
					<li className="status"></li>
					<li className= "counts"> 
						<Counter />  <Score />
					</li>
				</ul>
			</div>
			</Col>
		</Row>
	</Grid>
);

export default Navbar;