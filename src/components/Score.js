import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Score extends React.Component{
	//Setting the initial state of the Counter component
	state = {
		score : 0
	};

	//addScore increases this.state.score by 1
	addScore = () => {
		//We always use the setState method to update a component's state
		this.setState({ score: this.state.score + 1});
	};

	//scoreReset sets the score to zero after a wrong guess
	scoreReset = () => {
		this.setState({ score: this.state.score = 0});
	};

	//The render method	returns the JSX that should be rendered
	render() {
		return (
			// <div className="panel panel-primary">
			// 	<div className= "panel-heading"></div>
				<div className= "panel-body text-center">
					<p>Top Score: {this.state.score}</p>
				</div>
			// </div>
		);
	}
};

export default Score;