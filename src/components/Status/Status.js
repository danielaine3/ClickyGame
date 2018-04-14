import React from "react";
import "./Status.css";

const Status = props => (
	<ul className="statusbar">
		<li className="status">{props.status}</li>
		<li className= "counts">Score:{props.score} | Top Score:{props.topScore}</li>
	</ul>

);

export default Status;