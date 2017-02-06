import React, {Component} from 'react';

export class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount() {
		this.timerId = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return <h1>Current Time: {this.state.date.toLocaleTimeString()}</h1>
	}
}