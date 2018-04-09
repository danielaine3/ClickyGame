import React from "react";
// import Score from "./Score"

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
	//Setting the initial state of the Counter component
	state = {
		count: 0
	};

	//handleIncrement increases this.state.count by 1
	handleIncrement = () => {
		//We always use the setState method to update a component's state
		this.setState({ count: this.state.count + 1 });
	};

	//handleDecrement decreases this.state.count by 1
	handleDecrement = () => {
		//We alsuse use the setState method to update a component's state
		this.setState({ count: this.state.count - 1});
	};

	//The render medthod returns the JSX that should be rendered
	render() {
		return (
			<p>Score: {this.state.count}</p>
		);
	}
};

export default Counter;