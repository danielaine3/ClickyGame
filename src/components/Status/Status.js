import React from "react";
import "./Status.css";

const Status = props => (
	<ul className="statusbar">
		<li className="status">{props.status}</li>
		<li className= "counts">SCORE: {props.score} | TOP SCORE: {props.topScore}</li>
	</ul>
);

export default Status;