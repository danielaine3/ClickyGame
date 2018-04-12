import React from "react";
import "./DashCard.css";

const DashCard = props => (
	<div className="card" onClick={props.onClick.bind(this, props.id)}>
		<div className="img-container">
			<img src={props.image} />
		</div>
	</div>
);

export default DashCard;