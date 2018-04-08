import React from "react";
import "./DashCard.css";

const DashCard = props => (
	<div className="card">
		<div className="img-container">
			<img src={props.image} />
		</div>
	</div>
);

export default DashCard;